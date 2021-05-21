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
exports.RelationshipToIncidentPostmortem = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A relationship reference for postmortems.
*/
var RelationshipToIncidentPostmortem = /** @class */ (function () {
    function RelationshipToIncidentPostmortem() {
    }
    RelationshipToIncidentPostmortem.getAttributeTypeMap = function () {
        return RelationshipToIncidentPostmortem.attributeTypeMap;
    };
    RelationshipToIncidentPostmortem.deserialize = function (data) {
        var res = new RelationshipToIncidentPostmortem();
        if (data.data === undefined) {
            throw new TypeError("missing required attribute 'data' on 'RelationshipToIncidentPostmortem' object");
        }
        res.data = ObjectSerializer_1.ObjectSerializer.deserialize(data.data, "RelationshipToIncidentPostmortemData", "");
        return res;
    };
    RelationshipToIncidentPostmortem.serialize = function (data) {
        var attributeTypes = RelationshipToIncidentPostmortem.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.data === undefined) {
            throw new TypeError("missing required attribute 'data' on 'RelationshipToIncidentPostmortem' object");
        }
        res.data = ObjectSerializer_1.ObjectSerializer.serialize(data.data, "RelationshipToIncidentPostmortemData", "");
        return res;
    };
    RelationshipToIncidentPostmortem.discriminator = undefined;
    RelationshipToIncidentPostmortem.attributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "RelationshipToIncidentPostmortemData",
            "format": ""
        }
    };
    return RelationshipToIncidentPostmortem;
}());
exports.RelationshipToIncidentPostmortem = RelationshipToIncidentPostmortem;
//# sourceMappingURL=RelationshipToIncidentPostmortem.js.map