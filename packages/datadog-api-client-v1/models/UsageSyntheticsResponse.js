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
exports.UsageSyntheticsResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Response containing the number of Synthetics API tests run for each hour for a given organization.
*/
var UsageSyntheticsResponse = /** @class */ (function () {
    function UsageSyntheticsResponse() {
    }
    UsageSyntheticsResponse.getAttributeTypeMap = function () {
        return UsageSyntheticsResponse.attributeTypeMap;
    };
    UsageSyntheticsResponse.deserialize = function (data) {
        var res = new UsageSyntheticsResponse();
        res.usage = ObjectSerializer_1.ObjectSerializer.deserialize(data.usage, "Array<UsageSyntheticsHour>", "");
        return res;
    };
    UsageSyntheticsResponse.serialize = function (data) {
        var attributeTypes = UsageSyntheticsResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.usage = ObjectSerializer_1.ObjectSerializer.serialize(data.usage, "Array<UsageSyntheticsHour>", "");
        return res;
    };
    UsageSyntheticsResponse.discriminator = undefined;
    UsageSyntheticsResponse.attributeTypeMap = {
        "usage": {
            "baseName": "usage",
            "type": "Array<UsageSyntheticsHour>",
            "format": ""
        }
    };
    return UsageSyntheticsResponse;
}());
exports.UsageSyntheticsResponse = UsageSyntheticsResponse;
//# sourceMappingURL=UsageSyntheticsResponse.js.map