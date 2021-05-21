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
exports.UsageProfilingHour = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The number of profiled hosts for each hour for a given organization.
*/
var UsageProfilingHour = /** @class */ (function () {
    function UsageProfilingHour() {
    }
    UsageProfilingHour.getAttributeTypeMap = function () {
        return UsageProfilingHour.attributeTypeMap;
    };
    UsageProfilingHour.deserialize = function (data) {
        var res = new UsageProfilingHour();
        res.avgContainerAgentCount = ObjectSerializer_1.ObjectSerializer.deserialize(data.avg_container_agent_count, "number", "int64");
        res.hostCount = ObjectSerializer_1.ObjectSerializer.deserialize(data.host_count, "number", "int64");
        res.hour = ObjectSerializer_1.ObjectSerializer.deserialize(data.hour, "Date", "date-time");
        return res;
    };
    UsageProfilingHour.serialize = function (data) {
        var attributeTypes = UsageProfilingHour.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.avg_container_agent_count = ObjectSerializer_1.ObjectSerializer.serialize(data.avgContainerAgentCount, "number", "int64");
        res.host_count = ObjectSerializer_1.ObjectSerializer.serialize(data.hostCount, "number", "int64");
        res.hour = ObjectSerializer_1.ObjectSerializer.serialize(data.hour, "Date", "date-time");
        return res;
    };
    UsageProfilingHour.discriminator = undefined;
    UsageProfilingHour.attributeTypeMap = {
        "avgContainerAgentCount": {
            "baseName": "avg_container_agent_count",
            "type": "number",
            "format": "int64"
        },
        "hostCount": {
            "baseName": "host_count",
            "type": "number",
            "format": "int64"
        },
        "hour": {
            "baseName": "hour",
            "type": "Date",
            "format": "date-time"
        }
    };
    return UsageProfilingHour;
}());
exports.UsageProfilingHour = UsageProfilingHour;
//# sourceMappingURL=UsageProfilingHour.js.map