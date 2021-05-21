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
exports.SyntheticsCoreWebVitals = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Core Web Vitals attached to a browser test step.
*/
var SyntheticsCoreWebVitals = /** @class */ (function () {
    function SyntheticsCoreWebVitals() {
    }
    SyntheticsCoreWebVitals.getAttributeTypeMap = function () {
        return SyntheticsCoreWebVitals.attributeTypeMap;
    };
    SyntheticsCoreWebVitals.deserialize = function (data) {
        var res = new SyntheticsCoreWebVitals();
        res.cls = ObjectSerializer_1.ObjectSerializer.deserialize(data.cls, "number", "int64");
        res.lcp = ObjectSerializer_1.ObjectSerializer.deserialize(data.lcp, "number", "int64");
        res.url = ObjectSerializer_1.ObjectSerializer.deserialize(data.url, "string", "");
        return res;
    };
    SyntheticsCoreWebVitals.serialize = function (data) {
        var attributeTypes = SyntheticsCoreWebVitals.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.cls = ObjectSerializer_1.ObjectSerializer.serialize(data.cls, "number", "int64");
        res.lcp = ObjectSerializer_1.ObjectSerializer.serialize(data.lcp, "number", "int64");
        res.url = ObjectSerializer_1.ObjectSerializer.serialize(data.url, "string", "");
        return res;
    };
    SyntheticsCoreWebVitals.discriminator = undefined;
    SyntheticsCoreWebVitals.attributeTypeMap = {
        "cls": {
            "baseName": "cls",
            "type": "number",
            "format": "int64"
        },
        "lcp": {
            "baseName": "lcp",
            "type": "number",
            "format": "int64"
        },
        "url": {
            "baseName": "url",
            "type": "string",
            "format": ""
        }
    };
    return SyntheticsCoreWebVitals;
}());
exports.SyntheticsCoreWebVitals = SyntheticsCoreWebVitals;
//# sourceMappingURL=SyntheticsCoreWebVitals.js.map