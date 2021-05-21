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
exports.SecurityFilter = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The security filter's properties.
*/
var SecurityFilter = /** @class */ (function () {
    function SecurityFilter() {
    }
    SecurityFilter.getAttributeTypeMap = function () {
        return SecurityFilter.attributeTypeMap;
    };
    SecurityFilter.deserialize = function (data) {
        var res = new SecurityFilter();
        res.attributes = ObjectSerializer_1.ObjectSerializer.deserialize(data.attributes, "SecurityFilterAttributes", "");
        res.id = ObjectSerializer_1.ObjectSerializer.deserialize(data.id, "string", "");
        if (['security_filters', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    SecurityFilter.serialize = function (data) {
        var attributeTypes = SecurityFilter.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.attributes = ObjectSerializer_1.ObjectSerializer.serialize(data.attributes, "SecurityFilterAttributes", "");
        res.id = ObjectSerializer_1.ObjectSerializer.serialize(data.id, "string", "");
        if (['security_filters', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    SecurityFilter.discriminator = undefined;
    SecurityFilter.attributeTypeMap = {
        "attributes": {
            "baseName": "attributes",
            "type": "SecurityFilterAttributes",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "SecurityFilterType",
            "format": ""
        }
    };
    return SecurityFilter;
}());
exports.SecurityFilter = SecurityFilter;
//# sourceMappingURL=SecurityFilter.js.map