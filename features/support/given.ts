import { Given } from "@cucumber/cucumber";

import fs from 'fs'
import path from 'path'

import { World } from '../support/world'


interface iOperationParameter {
    name: string;
    source?: string;
    value?: string;
}

interface iGivenStep {
    tag: string;
    key: string;
    step: string;
    operationId: string;
    parameters: iOperationParameter[];
    source?: string;
}

for (let apiVersion of ['v1', 'v2']) {
    let content = fs.readFileSync(path.join(__dirname, `../${apiVersion}/given.json`)).toString();
    let givenSteps = JSON.parse(content) as iGivenStep[];
    for (let step of givenSteps) {
        Given(step.step, function (this: World) {
            console.log(apiVersion);
            console.log(step);
        });
    }
}