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
exports.UsageNetworkFlowsHour = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Number of netflow events indexed for each hour for a given organization.
*/
var UsageNetworkFlowsHour = /** @class */ (function () {
    function UsageNetworkFlowsHour() {
    }
    UsageNetworkFlowsHour.getAttributeTypeMap = function () {
        return UsageNetworkFlowsHour.attributeTypeMap;
    };
    UsageNetworkFlowsHour.deserialize = function (data) {
        var res = new UsageNetworkFlowsHour();
        res.hour = ObjectSerializer_1.ObjectSerializer.deserialize(data.hour, "Date", "date-time");
        res.indexedEventCount = ObjectSerializer_1.ObjectSerializer.deserialize(data.indexed_event_count, "number", "int64");
        return res;
    };
    UsageNetworkFlowsHour.serialize = function (data) {
        var attributeTypes = UsageNetworkFlowsHour.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.hour = ObjectSerializer_1.ObjectSerializer.serialize(data.hour, "Date", "date-time");
        res.indexed_event_count = ObjectSerializer_1.ObjectSerializer.serialize(data.indexedEventCount, "number", "int64");
        return res;
    };
    UsageNetworkFlowsHour.discriminator = undefined;
    UsageNetworkFlowsHour.attributeTypeMap = {
        "hour": {
            "baseName": "hour",
            "type": "Date",
            "format": "date-time"
        },
        "indexedEventCount": {
            "baseName": "indexed_event_count",
            "type": "number",
            "format": "int64"
        }
    };
    return UsageNetworkFlowsHour;
}());
exports.UsageNetworkFlowsHour = UsageNetworkFlowsHour;
//# sourceMappingURL=UsageNetworkFlowsHour.js.map