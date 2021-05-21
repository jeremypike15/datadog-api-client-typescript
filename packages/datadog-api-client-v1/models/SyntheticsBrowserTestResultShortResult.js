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
exports.SyntheticsBrowserTestResultShortResult = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object with the result of the last browser test run.
*/
var SyntheticsBrowserTestResultShortResult = /** @class */ (function () {
    function SyntheticsBrowserTestResultShortResult() {
    }
    SyntheticsBrowserTestResultShortResult.getAttributeTypeMap = function () {
        return SyntheticsBrowserTestResultShortResult.attributeTypeMap;
    };
    SyntheticsBrowserTestResultShortResult.deserialize = function (data) {
        var res = new SyntheticsBrowserTestResultShortResult();
        res.device = ObjectSerializer_1.ObjectSerializer.deserialize(data.device, "SyntheticsDevice", "");
        res.duration = ObjectSerializer_1.ObjectSerializer.deserialize(data.duration, "number", "double");
        res.errorCount = ObjectSerializer_1.ObjectSerializer.deserialize(data.errorCount, "number", "int64");
        res.stepCountCompleted = ObjectSerializer_1.ObjectSerializer.deserialize(data.stepCountCompleted, "number", "int64");
        res.stepCountTotal = ObjectSerializer_1.ObjectSerializer.deserialize(data.stepCountTotal, "number", "int64");
        return res;
    };
    SyntheticsBrowserTestResultShortResult.serialize = function (data) {
        var attributeTypes = SyntheticsBrowserTestResultShortResult.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.device = ObjectSerializer_1.ObjectSerializer.serialize(data.device, "SyntheticsDevice", "");
        res.duration = ObjectSerializer_1.ObjectSerializer.serialize(data.duration, "number", "double");
        res.errorCount = ObjectSerializer_1.ObjectSerializer.serialize(data.errorCount, "number", "int64");
        res.stepCountCompleted = ObjectSerializer_1.ObjectSerializer.serialize(data.stepCountCompleted, "number", "int64");
        res.stepCountTotal = ObjectSerializer_1.ObjectSerializer.serialize(data.stepCountTotal, "number", "int64");
        return res;
    };
    SyntheticsBrowserTestResultShortResult.discriminator = undefined;
    SyntheticsBrowserTestResultShortResult.attributeTypeMap = {
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
        "errorCount": {
            "baseName": "errorCount",
            "type": "number",
            "format": "int64"
        },
        "stepCountCompleted": {
            "baseName": "stepCountCompleted",
            "type": "number",
            "format": "int64"
        },
        "stepCountTotal": {
            "baseName": "stepCountTotal",
            "type": "number",
            "format": "int64"
        }
    };
    return SyntheticsBrowserTestResultShortResult;
}());
exports.SyntheticsBrowserTestResultShortResult = SyntheticsBrowserTestResultShortResult;
//# sourceMappingURL=SyntheticsBrowserTestResultShortResult.js.map