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
exports.IncidentServiceUpdateAttributes = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The incident service's attributes for an update request.
*/
var IncidentServiceUpdateAttributes = /** @class */ (function () {
    function IncidentServiceUpdateAttributes() {
    }
    IncidentServiceUpdateAttributes.getAttributeTypeMap = function () {
        return IncidentServiceUpdateAttributes.attributeTypeMap;
    };
    IncidentServiceUpdateAttributes.deserialize = function (data) {
        var res = new IncidentServiceUpdateAttributes();
        if (data.name === undefined) {
            throw new TypeError("missing required attribute 'name' on 'IncidentServiceUpdateAttributes' object");
        }
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        return res;
    };
    IncidentServiceUpdateAttributes.serialize = function (data) {
        var attributeTypes = IncidentServiceUpdateAttributes.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.name === undefined) {
            throw new TypeError("missing required attribute 'name' on 'IncidentServiceUpdateAttributes' object");
        }
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        return res;
    };
    IncidentServiceUpdateAttributes.discriminator = undefined;
    IncidentServiceUpdateAttributes.attributeTypeMap = {
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    };
    return IncidentServiceUpdateAttributes;
}());
exports.IncidentServiceUpdateAttributes = IncidentServiceUpdateAttributes;
//# sourceMappingURL=IncidentServiceUpdateAttributes.js.map