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
exports.LogsMetricResponseAttributes = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The object describing a Datadog log-based metric.
*/
var LogsMetricResponseAttributes = /** @class */ (function () {
    function LogsMetricResponseAttributes() {
    }
    LogsMetricResponseAttributes.getAttributeTypeMap = function () {
        return LogsMetricResponseAttributes.attributeTypeMap;
    };
    LogsMetricResponseAttributes.deserialize = function (data) {
        var res = new LogsMetricResponseAttributes();
        res.compute = ObjectSerializer_1.ObjectSerializer.deserialize(data.compute, "LogsMetricResponseCompute", "");
        res.filter = ObjectSerializer_1.ObjectSerializer.deserialize(data.filter, "LogsMetricResponseFilter", "");
        res.groupBy = ObjectSerializer_1.ObjectSerializer.deserialize(data.group_by, "Array<LogsMetricResponseGroupBy>", "");
        return res;
    };
    LogsMetricResponseAttributes.serialize = function (data) {
        var attributeTypes = LogsMetricResponseAttributes.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.compute = ObjectSerializer_1.ObjectSerializer.serialize(data.compute, "LogsMetricResponseCompute", "");
        res.filter = ObjectSerializer_1.ObjectSerializer.serialize(data.filter, "LogsMetricResponseFilter", "");
        res.group_by = ObjectSerializer_1.ObjectSerializer.serialize(data.groupBy, "Array<LogsMetricResponseGroupBy>", "");
        return res;
    };
    LogsMetricResponseAttributes.discriminator = undefined;
    LogsMetricResponseAttributes.attributeTypeMap = {
        "compute": {
            "baseName": "compute",
            "type": "LogsMetricResponseCompute",
            "format": ""
        },
        "filter": {
            "baseName": "filter",
            "type": "LogsMetricResponseFilter",
            "format": ""
        },
        "groupBy": {
            "baseName": "group_by",
            "type": "Array<LogsMetricResponseGroupBy>",
            "format": ""
        }
    };
    return LogsMetricResponseAttributes;
}());
exports.LogsMetricResponseAttributes = LogsMetricResponseAttributes;
//# sourceMappingURL=LogsMetricResponseAttributes.js.map