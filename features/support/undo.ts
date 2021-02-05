import fs from 'fs'
import path from 'path'
import { pathLookup } from './templating';

interface iOperationParameter {
    name: string;
    source: string;
}

interface iUndo {
    type: 'safe' | 'unsafe' | 'idempotent';
    operationId: string;
    parameters: iOperationParameter[];
}

interface iUndoAction {
    tag: string;
    undo: iUndo;
}

let UndoActions: { [version: string]: { [operationId: string]: iUndoAction } } = {};
for (let apiVersion of ['v1', 'v2']) {
    let content = fs.readFileSync(path.join(__dirname, `../${apiVersion}/undo.json`)).toString();
    UndoActions[apiVersion] = JSON.parse(content) as { [index: string]: iUndoAction };
}

function buildUndoFor(apiVersion: string, operation: iUndoAction, response: any): { (): void } {
    return function (): void {
        let apiName = operation.tag.replace(/\s/, '');
        let operationName = operation.undo.operationId.toOperationName();

        let api = require(`../../${apiVersion}`);
        let configuration = api.createConfiguration({
            authMethods: {
                apiKeyAuth: process.env.DD_TEST_CLIENT_API_KEY,
                appKeyAuth: process.env.DD_TEST_CLIENT_APP_KEY
            }
        });
        let apiInstance = new (api[`${apiName}Api`])(configuration);

        // perform operation
        let opts: { [key: string]: any } = {};
        for (let p of operation.undo.parameters) {
            let value: any
            if (p.source !== undefined) {
                opts[p.name.toAttributeName()] = pathLookup(response, p.source)
            }
        }

        apiInstance[operationName](opts).then(
            () => { },
            (error: any) => console.error(`could not undo operation ${operationName}: ${error}`)
        );
    }
}

export { UndoActions, buildUndoFor };