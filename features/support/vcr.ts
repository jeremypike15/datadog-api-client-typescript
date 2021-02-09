import tracer from "./tracer";
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
    this.polly = new Polly(`${gherkinDocument.feature?.name as string}/${pickle.name}`, {
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
        recordFailedRequests: true,
        logging: false,
        persisterOptions: {
            fs: {
                recordingsDir: path.resolve(__dirname, `../../cassettes/${this.apiVersion}`)
            }
        }
    });
    const { server } = this.polly;

    // make sure that we are not recording APM traces
    server.any((tracer as any)._tracer._url.host).passthrough();
    // remove secrets from request headers before persisting
    server.any().on('beforePersist', (req, recording) => {
        recording.request.headers = recording.request.headers.filter((value: any) => {
            return value.name != 'dd-api-key' && value.name != 'dd-application-key'
        })
    });
})

After(async function (this: World, { gherkinDocument, pickle }: ITestCaseHookParameter) {
    if (this.polly !== undefined) {
        await this.polly.stop();
    }
})
