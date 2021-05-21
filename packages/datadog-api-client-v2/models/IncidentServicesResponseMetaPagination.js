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
exports.IncidentServicesResponseMetaPagination = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Pagination properties.
*/
var IncidentServicesResponseMetaPagination = /** @class */ (function () {
    function IncidentServicesResponseMetaPagination() {
    }
    IncidentServicesResponseMetaPagination.getAttributeTypeMap = function () {
        return IncidentServicesResponseMetaPagination.attributeTypeMap;
    };
    IncidentServicesResponseMetaPagination.deserialize = function (data) {
        var res = new IncidentServicesResponseMetaPagination();
        res.nextOffset = ObjectSerializer_1.ObjectSerializer.deserialize(data.next_offset, "number", "int64");
        res.offset = ObjectSerializer_1.ObjectSerializer.deserialize(data.offset, "number", "int64");
        res.size = ObjectSerializer_1.ObjectSerializer.deserialize(data.size, "number", "int64");
        return res;
    };
    IncidentServicesResponseMetaPagination.serialize = function (data) {
        var attributeTypes = IncidentServicesResponseMetaPagination.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.next_offset = ObjectSerializer_1.ObjectSerializer.serialize(data.nextOffset, "number", "int64");
        res.offset = ObjectSerializer_1.ObjectSerializer.serialize(data.offset, "number", "int64");
        res.size = ObjectSerializer_1.ObjectSerializer.serialize(data.size, "number", "int64");
        return res;
    };
    IncidentServicesResponseMetaPagination.discriminator = undefined;
    IncidentServicesResponseMetaPagination.attributeTypeMap = {
        "nextOffset": {
            "baseName": "next_offset",
            "type": "number",
            "format": "int64"
        },
        "offset": {
            "baseName": "offset",
            "type": "number",
            "format": "int64"
        },
        "size": {
            "baseName": "size",
            "type": "number",
            "format": "int64"
        }
    };
    return IncidentServicesResponseMetaPagination;
}());
exports.IncidentServicesResponseMetaPagination = IncidentServicesResponseMetaPagination;
//# sourceMappingURL=IncidentServicesResponseMetaPagination.js.map