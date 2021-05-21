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
exports.PartialAPIKey = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Partial Datadog API key.
*/
var PartialAPIKey = /** @class */ (function () {
    function PartialAPIKey() {
    }
    PartialAPIKey.getAttributeTypeMap = function () {
        return PartialAPIKey.attributeTypeMap;
    };
    PartialAPIKey.deserialize = function (data) {
        var res = new PartialAPIKey();
        res.attributes = ObjectSerializer_1.ObjectSerializer.deserialize(data.attributes, "PartialAPIKeyAttributes", "");
        res.id = ObjectSerializer_1.ObjectSerializer.deserialize(data.id, "string", "");
        res.relationships = ObjectSerializer_1.ObjectSerializer.deserialize(data.relationships, "APIKeyRelationships", "");
        if (['api_keys', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    PartialAPIKey.serialize = function (data) {
        var attributeTypes = PartialAPIKey.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.attributes = ObjectSerializer_1.ObjectSerializer.serialize(data.attributes, "PartialAPIKeyAttributes", "");
        res.id = ObjectSerializer_1.ObjectSerializer.serialize(data.id, "string", "");
        res.relationships = ObjectSerializer_1.ObjectSerializer.serialize(data.relationships, "APIKeyRelationships", "");
        if (['api_keys', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    PartialAPIKey.discriminator = undefined;
    PartialAPIKey.attributeTypeMap = {
        "attributes": {
            "baseName": "attributes",
            "type": "PartialAPIKeyAttributes",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "relationships": {
            "baseName": "relationships",
            "type": "APIKeyRelationships",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "APIKeysType",
            "format": ""
        }
    };
    return PartialAPIKey;
}());
exports.PartialAPIKey = PartialAPIKey;
//# sourceMappingURL=PartialAPIKey.js.map