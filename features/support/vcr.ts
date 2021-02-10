import tracer from "./tracer";
import fs from 'fs';
import path from 'path';

import NodeHttpAdapter from '@pollyjs/adapter-node-http';
import FSPersister from '@pollyjs/persister-fs';
import { Polly } from '@pollyjs/core';
import { After, Before } from "@cucumber/cucumber";
import { World } from "./world";
import { ITestCaseHookParameter } from "@cucumber/cucumber/lib/support_code_library_builder/types";
import { MODES } from '@pollyjs/utils';

Polly.register(NodeHttpAdapter);
Polly.register(FSPersister);

const RecordMode: { [value: string]: any } = {
    true: MODES.RECORD,
    false: MODES.REPLAY,
    none: MODES.PASSTHROUGH
}

Before(function (this: World, { gherkinDocument, pickle }: ITestCaseHookParameter) {
    let recordingsDir = path.resolve(__dirname, `../../cassettes/${this.apiVersion}`);
    let recordingName = `${gherkinDocument.feature?.name as string}/${pickle.name}`
    this.polly = new Polly(recordingName, {
        adapters: ['node-http'],
        flushRequestsOnStop: true,
        persister: 'fs',
        matchRequestsBy: {
            headers(headers, _req) {
                delete headers['dd-api-key'];
                delete headers['dd-application-key'];
                return headers;
            }
        },
        mode: RecordMode[process.env.RECORD as string] || MODES.REPLAY,
        recordIfMissing: false,  // make sure that we match body exactly
        recordFailedRequests: true,  // make sure we can replay responses with 4xx codes
        logging: false,
        persisterOptions: {
            fs: {
                recordingsDir: recordingsDir
            }
        }
    });
    const { server } = this.polly;
   
    let date: Date;
    let frozen = path.join(recordingsDir, this.polly?.recordingId, 'frozen.json');
    if (this.polly?.mode == MODES.REPLAY) {
        date = new Date(JSON.parse(fs.readFileSync(frozen).toString()));
    } else {
        date = new Date();
        if (this.polly?.mode == MODES.RECORD) {
            fs.writeFileSync(frozen, JSON.stringify(date));
        }
    }
    
    let now = date.getTime()
    let name = pickle.name?.replace(/[^A-Za-z0-9]+/g, '_').substr(0, 100);
    let unique = `Typescript-${name}-${now}`;
    this.fixtures['unique'] = unique;
    this.fixtures['unique_lower'] = unique.toLowerCase();

    // make sure that we are not recording APM traces
    server.any((tracer as any)._tracer._url.host).passthrough();
    // remove secrets from request headers before persisting
    server.any().on('beforePersist', (req, recording) => {
        recording.request.headers = recording.request.headers.filter((value: any) => {
            return value.name != 'dd-api-key' && value.name != 'dd-application-key'
        })
    });
})

After(async function (this: World) {
    if (this.polly !== undefined) {
        await this.polly.stop();
    }
})