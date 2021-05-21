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
exports.LogsQueryFilter = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The search and filter query settings
*/
var LogsQueryFilter = /** @class */ (function () {
    function LogsQueryFilter() {
    }
    LogsQueryFilter.getAttributeTypeMap = function () {
        return LogsQueryFilter.attributeTypeMap;
    };
    LogsQueryFilter.deserialize = function (data) {
        var res = new LogsQueryFilter();
        res.from = ObjectSerializer_1.ObjectSerializer.deserialize(data.from, "string", "");
        res.indexes = ObjectSerializer_1.ObjectSerializer.deserialize(data.indexes, "Array<string>", "");
        res.query = ObjectSerializer_1.ObjectSerializer.deserialize(data.query, "string", "");
        res.to = ObjectSerializer_1.ObjectSerializer.deserialize(data.to, "string", "");
        return res;
    };
    LogsQueryFilter.serialize = function (data) {
        var attributeTypes = LogsQueryFilter.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.from = ObjectSerializer_1.ObjectSerializer.serialize(data.from, "string", "");
        res.indexes = ObjectSerializer_1.ObjectSerializer.serialize(data.indexes, "Array<string>", "");
        res.query = ObjectSerializer_1.ObjectSerializer.serialize(data.query, "string", "");
        res.to = ObjectSerializer_1.ObjectSerializer.serialize(data.to, "string", "");
        return res;
    };
    LogsQueryFilter.discriminator = undefined;
    LogsQueryFilter.attributeTypeMap = {
        "from": {
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        "indexes": {
            "baseName": "indexes",
            "type": "Array<string>",
            "format": ""
        },
        "query": {
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        "to": {
            "baseName": "to",
            "type": "string",
            "format": ""
        }
    };
    return LogsQueryFilter;
}());
exports.LogsQueryFilter = LogsQueryFilter;
//# sourceMappingURL=LogsQueryFilter.js.map