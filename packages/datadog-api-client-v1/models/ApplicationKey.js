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
exports.ApplicationKey = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* An application key with its associated metadata.
*/
var ApplicationKey = /** @class */ (function () {
    function ApplicationKey() {
    }
    ApplicationKey.getAttributeTypeMap = function () {
        return ApplicationKey.attributeTypeMap;
    };
    ApplicationKey.deserialize = function (data) {
        var res = new ApplicationKey();
        res.hash = ObjectSerializer_1.ObjectSerializer.deserialize(data.hash, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        res.owner = ObjectSerializer_1.ObjectSerializer.deserialize(data.owner, "string", "");
        return res;
    };
    ApplicationKey.serialize = function (data) {
        var attributeTypes = ApplicationKey.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.hash = ObjectSerializer_1.ObjectSerializer.serialize(data.hash, "string", "");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        res.owner = ObjectSerializer_1.ObjectSerializer.serialize(data.owner, "string", "");
        return res;
    };
    ApplicationKey.discriminator = undefined;
    ApplicationKey.attributeTypeMap = {
        "hash": {
            "baseName": "hash",
            "type": "string",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "owner": {
            "baseName": "owner",
            "type": "string",
            "format": ""
        }
    };
    return ApplicationKey;
}());
exports.ApplicationKey = ApplicationKey;
//# sourceMappingURL=ApplicationKey.js.map