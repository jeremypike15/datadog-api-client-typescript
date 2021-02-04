import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "chai";
import { World } from "../support/world";

import {} from '../support/templating';


Given('a valid "apiKeyAuth" key in the system', function (this: World) {
    this.configuration()["apiKeyAuth"] = process.env.DD_TEST_CLIENT_API_KEY
});

Given('a valid "appKeyAuth" key in the system', function (this: World) {
    this.configuration()["appKeyAuth"] = process.env.DD_TEST_CLIENT_APP_KEY
});

Given('an instance of {string} API', function (this: World, apiName: string) {
    // TODO add support for DEBUG=true when supported in configuration
    this.apiName = apiName;
    this.apiInstance = new (this.api()[`${apiName}Api`])(this.configuration());
});

Given('operation {string} enabled', function (this: World, operationId: string) {
    // TODO add support for unstable operations
    // this.configuration().unstableOperations[operationId] = true;
});

Given(/body (.*)/, function (this: World, body: string) {
    this.opts["body"] = JSON.parse(body.templated(this.fixtures));
});

Given('request contains {string} parameter from {string}', function (this: World, parameterName: string, fixturePath: string) {
    this.opts[parameterName] = this.fixtures.pathLookup(fixturePath);
});


Given(/request contains "([^"]+)" parameter with value (.*)/, function (this: World, parameterName: string, value: string) {
    this.opts[parameterName] = JSON.parse(value.templated(this.fixtures));
});


Given('new {string} request', function (this: World, operationId: string) {
    this.operationId = operationId.toOperationName();

    console.log(operationId.toOperationName());
    console.log(this.method);
    this.request = {}
});


When('the request is sent', async function (this: World) {
    this.response = await this.apiInstance[this.operationId](this.request);
});

Then(/^the response status is (\d+) (.*)/, function (this: World, status: number, msg: string) {
    // Write code here that turns the phrase above into concrete actions
    return true;
});

Then('the response {string} has the same value as {string}', function (this: World, response: string, value: string) {
    // Write code here that turns the phrase above into concrete actions
    console.log(`{response} == {value}`)
});


Then(/the response "([^"]+)" is equal to (.*)/, function (this: World, response: string, value: string) {
    // Write code here that turns the phrase above into concrete actions
    return 'ok';
});

Then('the response {string} is false', function (this: World, response: string) {
    // Write code here that turns the phrase above into concrete actions
    return 'ok';
});

Then('the response {string} has length {int}', function (this: World, response: string, length: number) {
    // expect(response).to.has.length(length);
    return 'ok'
});