import { Given } from '@cucumber/cucumber';

import fs from 'fs'
import path from 'path'

import { World } from '../support/world'
import { Store } from './store';
import { pathLookup } from './templating';
import { UndoActions, buildUndoFor } from './undo';


interface IOperationParameter {
    name: string;
    source?: string;
    value?: string;
}

interface IGivenStep {
    tag: string;
    key: string;
    step: string;
    operationId: string;
    parameters: IOperationParameter[];
    source?: string;
}

for (let apiVersion of ['v1', 'v2']) {
    let content = fs.readFileSync(path.join(__dirname, `../${apiVersion}/given.json`)).toString();
    let givenSteps = JSON.parse(content) as IGivenStep[];
    for (let operation of givenSteps) {
        Given(operation.step, async function (this: World) {
            let apiName = operation.tag.replace(/\s/, '');
            let operationName = operation.operationId.toOperationName();

            // make sure we have a fresh instance of API client and configuration
            let api = require(`../../${apiVersion}`);
            let configuration = api.createConfiguration({
                authMethods: {
                    apiKeyAuth: process.env.DD_TEST_CLIENT_API_KEY,
                    appKeyAuth: process.env.DD_TEST_CLIENT_APP_KEY
                }
            });
            let apiInstance = new (api[`${apiName}Api`])(configuration);

            // find undo method
            let undoAction = UndoActions[apiVersion][operation.operationId];
            if (undoAction === undefined) {
                throw new Error(`missing undo for ${operation.operationId} in ${apiVersion}`);
            }
            
            // enable unstable operation
            // TODO given_configuration.unstable_operations[operation_name.to_sym] = true

            // perform operation
            let opts: { [key: string]: any } = {};
            for (let p of operation.parameters) {
                let value: any
                if (p.value !== undefined) {
                    opts[p.name.toAttributeName()] = JSON.parse(p.value?.templated(this.fixtures));
                }
                if (p.source !== undefined) {
                    opts[p.name.toAttributeName()] = pathLookup(this.fixtures, p.source)
                }
            }

            // example: await v1.IPRangesApi(v1.createConfiguration({authMethod: {...}})).getIPRanges({});
            let result = await apiInstance[operationName](opts);

            // register undo method
            if (undoAction.undo.type == 'unsafe') {
                this.undo.push(buildUndoFor(apiVersion, undoAction, result));
            }

            // optional re-shaping
            if (operation['source'] !== undefined) {
                result = pathLookup(result, operation['source']);
            }

            // store response in fixtures
            if (operation['key'] !== undefined) {
                this.fixtures[operation['key']] = result;
            }
        });
    }
}

export { IOperationParameter, IGivenStep };