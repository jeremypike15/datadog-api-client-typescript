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
exports.LogsPipelineProcessor = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Nested Pipelines are pipelines within a pipeline. Use Nested Pipelines to split the processing into two steps. For example, first use a high-level filtering such as team and then a second level of filtering based on the integration, service, or any other tag or attribute.  A pipeline can contain Nested Pipelines and Processors whereas a Nested Pipeline can only contain Processors.
*/
var LogsPipelineProcessor = /** @class */ (function () {
    function LogsPipelineProcessor() {
    }
    LogsPipelineProcessor.getAttributeTypeMap = function () {
        return LogsPipelineProcessor.attributeTypeMap;
    };
    LogsPipelineProcessor.deserialize = function (data) {
        var res = new LogsPipelineProcessor();
        res.filter = ObjectSerializer_1.ObjectSerializer.deserialize(data.filter, "LogsFilter", "");
        res.isEnabled = ObjectSerializer_1.ObjectSerializer.deserialize(data.is_enabled, "boolean", "");
        res.name = ObjectSerializer_1.ObjectSerializer.deserialize(data.name, "string", "");
        res.processors = ObjectSerializer_1.ObjectSerializer.deserialize(data.processors, "Array<LogsProcessor>", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'LogsPipelineProcessor' object");
        }
        if (['pipeline', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    LogsPipelineProcessor.serialize = function (data) {
        var attributeTypes = LogsPipelineProcessor.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.filter = ObjectSerializer_1.ObjectSerializer.serialize(data.filter, "LogsFilter", "");
        res.is_enabled = ObjectSerializer_1.ObjectSerializer.serialize(data.isEnabled, "boolean", "");
        res.name = ObjectSerializer_1.ObjectSerializer.serialize(data.name, "string", "");
        res.processors = ObjectSerializer_1.ObjectSerializer.serialize(data.processors, "Array<LogsProcessor>", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'LogsPipelineProcessor' object");
        }
        if (['pipeline', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    LogsPipelineProcessor.discriminator = undefined;
    LogsPipelineProcessor.attributeTypeMap = {
        "filter": {
            "baseName": "filter",
            "type": "LogsFilter",
            "format": ""
        },
        "isEnabled": {
            "baseName": "is_enabled",
            "type": "boolean",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "processors": {
            "baseName": "processors",
            "type": "Array<LogsProcessor>",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "LogsPipelineProcessorType",
            "format": ""
        }
    };
    return LogsPipelineProcessor;
}());
exports.LogsPipelineProcessor = LogsPipelineProcessor;
//# sourceMappingURL=LogsPipelineProcessor.js.map