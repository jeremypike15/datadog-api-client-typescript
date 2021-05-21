"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserTestResultData = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object containing results for your Synthetic browser test.
*/
var SyntheticsBrowserTestResultData = /** @class */ (function () {
    function SyntheticsBrowserTestResultData() {
    }
    SyntheticsBrowserTestResultData.getAttributeTypeMap = function () {
        return SyntheticsBrowserTestResultData.attributeTypeMap;
    };
    SyntheticsBrowserTestResultData.deserialize = function (data) {
        var res = new SyntheticsBrowserTestResultData();
        res.browserType = ObjectSerializer_1.ObjectSerializer.deserialize(data.browserType, "string", "");
        res.browserVersion = ObjectSerializer_1.ObjectSerializer.deserialize(data.browserVersion, "string", "");
        res.device = ObjectSerializer_1.ObjectSerializer.deserialize(data.device, "SyntheticsDevice", "");
        res.duration = ObjectSerializer_1.ObjectSerializer.deserialize(data.duration, "number", "double");
        res.error = ObjectSerializer_1.ObjectSerializer.deserialize(data.error, "string", "");
        res.passed = ObjectSerializer_1.ObjectSerializer.deserialize(data.passed, "boolean", "");
        res.receivedEmailCount = ObjectSerializer_1.ObjectSerializer.deserialize(data.receivedEmailCount, "number", "int64");
        res.startUrl = ObjectSerializer_1.ObjectSerializer.deserialize(data.startUrl, "string", "");
        res.stepDetails = ObjectSerializer_1.ObjectSerializer.deserialize(data.stepDetails, "Array<SyntheticsStepDetail>", "");
        res.thumbnailsBucketKey = ObjectSerializer_1.ObjectSerializer.deserialize(data.thumbnailsBucketKey, "boolean", "");
        res.timeToInteractive = ObjectSerializer_1.ObjectSerializer.deserialize(data.timeToInteractive, "number", "double");
        return res;
    };
    SyntheticsBrowserTestResultData.serialize = function (data) {
        var attributeTypes = SyntheticsBrowserTestResultData.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.browserType = ObjectSerializer_1.ObjectSerializer.serialize(data.browserType, "string", "");
        res.browserVersion = ObjectSerializer_1.ObjectSerializer.serialize(data.browserVersion, "string", "");
        res.device = ObjectSerializer_1.ObjectSerializer.serialize(data.device, "SyntheticsDevice", "");
        res.duration = ObjectSerializer_1.ObjectSerializer.serialize(data.duration, "number", "double");
        res.error = ObjectSerializer_1.ObjectSerializer.serialize(data.error, "string", "");
        res.passed = ObjectSerializer_1.ObjectSerializer.serialize(data.passed, "boolean", "");
        res.receivedEmailCount = ObjectSerializer_1.ObjectSerializer.serialize(data.receivedEmailCount, "number", "int64");
        res.startUrl = ObjectSerializer_1.ObjectSerializer.serialize(data.startUrl, "string", "");
        res.stepDetails = ObjectSerializer_1.ObjectSerializer.serialize(data.stepDetails, "Array<SyntheticsStepDetail>", "");
        res.thumbnailsBucketKey = ObjectSerializer_1.ObjectSerializer.serialize(data.thumbnailsBucketKey, "boolean", "");
        res.timeToInteractive = ObjectSerializer_1.ObjectSerializer.serialize(data.timeToInteractive, "number", "double");
        return res;
    };
    SyntheticsBrowserTestResultData.discriminator = undefined;
    SyntheticsBrowserTestResultData.attributeTypeMap = {
        "browserType": {
            "baseName": "browserType",
            "type": "string",
            "format": ""
        },
        "browserVersion": {
            "baseName": "browserVersion",
            "type": "string",
            "format": ""
        },
        "device": {
            "baseName": "device",
            "type": "SyntheticsDevice",
            "format": ""
        },
        "duration": {
            "baseName": "duration",
            "type": "number",
            "format": "double"
        },
        "error": {
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        "passed": {
            "baseName": "passed",
            "type": "boolean",
            "format": ""
        },
        "receivedEmailCount": {
            "baseName": "receivedEmailCount",
            "type": "number",
            "format": "int64"
        },
        "startUrl": {
            "baseName": "startUrl",
            "type": "string",
            "format": ""
        },
        "stepDetails": {
            "baseName": "stepDetails",
            "type": "Array<SyntheticsStepDetail>",
            "format": ""
        },
        "thumbnailsBucketKey": {
            "baseName": "thumbnailsBucketKey",
            "type": "boolean",
            "format": ""
        },
        "timeToInteractive": {
            "baseName": "timeToInteractive",
            "type": "number",
            "format": "double"
        }
    };
    return SyntheticsBrowserTestResultData;
}());
exports.SyntheticsBrowserTestResultData = SyntheticsBrowserTestResultData;
//# sourceMappingURL=SyntheticsBrowserTestResultData.js.map