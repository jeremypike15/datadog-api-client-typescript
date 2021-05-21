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
exports.MetricsQueryMetadata = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Object containing all metric names returned and their associated metadata.
*/
var MetricsQueryMetadata = /** @class */ (function () {
    function MetricsQueryMetadata() {
    }
    MetricsQueryMetadata.getAttributeTypeMap = function () {
        return MetricsQueryMetadata.attributeTypeMap;
    };
    MetricsQueryMetadata.deserialize = function (data) {
        var res = new MetricsQueryMetadata();
        res.aggr = ObjectSerializer_1.ObjectSerializer.deserialize(data.aggr, "string", "");
        res.displayName = ObjectSerializer_1.ObjectSerializer.deserialize(data.display_name, "string", "");
        res.end = ObjectSerializer_1.ObjectSerializer.deserialize(data.end, "number", "int64");
        res.expression = ObjectSerializer_1.ObjectSerializer.deserialize(data.expression, "string", "");
        res.interval = ObjectSerializer_1.ObjectSerializer.deserialize(data.interval, "number", "int64");
        res.length = ObjectSerializer_1.ObjectSerializer.deserialize(data.length, "number", "int64");
        res.metric = ObjectSerializer_1.ObjectSerializer.deserialize(data.metric, "string", "");
        res.pointlist = ObjectSerializer_1.ObjectSerializer.deserialize(data.pointlist, "Array<Array<number>>", "double");
        res.scope = ObjectSerializer_1.ObjectSerializer.deserialize(data.scope, "string", "");
        res.start = ObjectSerializer_1.ObjectSerializer.deserialize(data.start, "number", "int64");
        res.unit = ObjectSerializer_1.ObjectSerializer.deserialize(data.unit, "Array<MetricsQueryUnit>", "");
        return res;
    };
    MetricsQueryMetadata.serialize = function (data) {
        var attributeTypes = MetricsQueryMetadata.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.aggr = ObjectSerializer_1.ObjectSerializer.serialize(data.aggr, "string", "");
        res.display_name = ObjectSerializer_1.ObjectSerializer.serialize(data.displayName, "string", "");
        res.end = ObjectSerializer_1.ObjectSerializer.serialize(data.end, "number", "int64");
        res.expression = ObjectSerializer_1.ObjectSerializer.serialize(data.expression, "string", "");
        res.interval = ObjectSerializer_1.ObjectSerializer.serialize(data.interval, "number", "int64");
        res.length = ObjectSerializer_1.ObjectSerializer.serialize(data.length, "number", "int64");
        res.metric = ObjectSerializer_1.ObjectSerializer.serialize(data.metric, "string", "");
        res.pointlist = ObjectSerializer_1.ObjectSerializer.serialize(data.pointlist, "Array<Array<number>>", "double");
        res.scope = ObjectSerializer_1.ObjectSerializer.serialize(data.scope, "string", "");
        res.start = ObjectSerializer_1.ObjectSerializer.serialize(data.start, "number", "int64");
        res.unit = ObjectSerializer_1.ObjectSerializer.serialize(data.unit, "Array<MetricsQueryUnit>", "");
        return res;
    };
    MetricsQueryMetadata.discriminator = undefined;
    MetricsQueryMetadata.attributeTypeMap = {
        "aggr": {
            "baseName": "aggr",
            "type": "string",
            "format": ""
        },
        "displayName": {
            "baseName": "display_name",
            "type": "string",
            "format": ""
        },
        "end": {
            "baseName": "end",
            "type": "number",
            "format": "int64"
        },
        "expression": {
            "baseName": "expression",
            "type": "string",
            "format": ""
        },
        "interval": {
            "baseName": "interval",
            "type": "number",
            "format": "int64"
        },
        "length": {
            "baseName": "length",
            "type": "number",
            "format": "int64"
        },
        "metric": {
            "baseName": "metric",
            "type": "string",
            "format": ""
        },
        "pointlist": {
            "baseName": "pointlist",
            "type": "Array<Array<number>>",
            "format": "double"
        },
        "scope": {
            "baseName": "scope",
            "type": "string",
            "format": ""
        },
        "start": {
            "baseName": "start",
            "type": "number",
            "format": "int64"
        },
        "unit": {
            "baseName": "unit",
            "type": "Array<MetricsQueryUnit>",
            "format": ""
        }
    };
    return MetricsQueryMetadata;
}());
exports.MetricsQueryMetadata = MetricsQueryMetadata;
//# sourceMappingURL=MetricsQueryMetadata.js.map