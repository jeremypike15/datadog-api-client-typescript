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
exports.RelationshipToPermissionData = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Relationship to permission object.
*/
var RelationshipToPermissionData = /** @class */ (function () {
    function RelationshipToPermissionData() {
    }
    RelationshipToPermissionData.getAttributeTypeMap = function () {
        return RelationshipToPermissionData.attributeTypeMap;
    };
    RelationshipToPermissionData.deserialize = function (data) {
        var res = new RelationshipToPermissionData();
        res.id = ObjectSerializer_1.ObjectSerializer.deserialize(data.id, "string", "");
        if (['permissions', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    RelationshipToPermissionData.serialize = function (data) {
        var attributeTypes = RelationshipToPermissionData.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.id = ObjectSerializer_1.ObjectSerializer.serialize(data.id, "string", "");
        if (['permissions', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    RelationshipToPermissionData.discriminator = undefined;
    RelationshipToPermissionData.attributeTypeMap = {
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "PermissionsType",
            "format": ""
        }
    };
    return RelationshipToPermissionData;
}());
exports.RelationshipToPermissionData = RelationshipToPermissionData;
//# sourceMappingURL=RelationshipToPermissionData.js.map