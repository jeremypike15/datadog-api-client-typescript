import { Given } from "@cucumber/cucumber";

import fs from 'fs'
import path from 'path'

import { World } from '../support/world'


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
            let apiName = operation["tag"].replace(/\s/, '');
            let operationName = operation["operationId"].toOperationName();

            // make sure we have a fresh instance of API client and configuration
            let givenAPI = require(`../../${apiVersion}`);
            let givenConfiguration = givenAPI.createConfiguration();
            givenConfiguration["apiKeyAuth"] = process.env.DD_TEST_CLIENT_API_KEY;
            givenConfiguration["appKeyAuth"] = process.env.DD_TEST_CLIENT_APP_KEY;

            let givenAPIInstance = new (givenAPI[`${apiName}Api`])(givenConfiguration);
            console.log(givenAPIInstance);
            console.log(`${apiName}Api${operation["operationId"]}Request`);

            let method = givenAPIInstance[operationName];

            // find undo method
            // TODO undo_builder = build_undo_for(operation_name, given_api_instance)

            // enable unstable operation
            // TODO given_configuration.unstable_operations[operation_name.to_sym] = true

            // perform operation
            let request: { [key: string]: any } = {};
            for (let p of operation['parameters']) {
                let value: any
                if (p.value !== undefined) {
                    request[p.name] = JSON.parse(p.value?.templated(this.fixtures));
                }
                if (p.source !== undefined) {
                    request[p.name] = this.fixtures.lookup(p.source)
                }
            }
            console.log(request);
                
            let result: any = await method(request);
            // register undo method
            // TODO undo << undo_builder.call(result) if undo_builder
            // TODO this.undo.push(UndoOperations)

            // optional re-shaping
            if (operation['source'] !== undefined) {
                result = result.lookup(operation['source']);
            }

            // store response in fixtures
            if (operation['key'] !== undefined) {
                this.fixtures[operation['key']] = result;
            }
        });
    }
}

export { IOperationParameter, IGivenStep };