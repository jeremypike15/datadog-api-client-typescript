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
exports.RelationshipToOrganizationData = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Relationship to organization object.
*/
var RelationshipToOrganizationData = /** @class */ (function () {
    function RelationshipToOrganizationData() {
    }
    RelationshipToOrganizationData.getAttributeTypeMap = function () {
        return RelationshipToOrganizationData.attributeTypeMap;
    };
    RelationshipToOrganizationData.deserialize = function (data) {
        var res = new RelationshipToOrganizationData();
        if (data.id === undefined) {
            throw new TypeError("missing required attribute 'id' on 'RelationshipToOrganizationData' object");
        }
        res.id = ObjectSerializer_1.ObjectSerializer.deserialize(data.id, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'RelationshipToOrganizationData' object");
        }
        if (['orgs', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    RelationshipToOrganizationData.serialize = function (data) {
        var attributeTypes = RelationshipToOrganizationData.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.id === undefined) {
            throw new TypeError("missing required attribute 'id' on 'RelationshipToOrganizationData' object");
        }
        res.id = ObjectSerializer_1.ObjectSerializer.serialize(data.id, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'RelationshipToOrganizationData' object");
        }
        if (['orgs', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    RelationshipToOrganizationData.discriminator = undefined;
    RelationshipToOrganizationData.attributeTypeMap = {
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "OrganizationsType",
            "format": ""
        }
    };
    return RelationshipToOrganizationData;
}());
exports.RelationshipToOrganizationData = RelationshipToOrganizationData;
//# sourceMappingURL=RelationshipToOrganizationData.js.map