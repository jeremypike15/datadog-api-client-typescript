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
exports.ToplistWidgetRequest = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Updated top list widget.
*/
var ToplistWidgetRequest = /** @class */ (function () {
    function ToplistWidgetRequest() {
    }
    ToplistWidgetRequest.getAttributeTypeMap = function () {
        return ToplistWidgetRequest.attributeTypeMap;
    };
    ToplistWidgetRequest.deserialize = function (data) {
        var res = new ToplistWidgetRequest();
        res.apmQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.apm_query, "LogQueryDefinition", "");
        res.conditionalFormats = ObjectSerializer_1.ObjectSerializer.deserialize(data.conditional_formats, "Array<WidgetConditionalFormat>", "");
        res.eventQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.event_query, "LogQueryDefinition", "");
        res.formulas = ObjectSerializer_1.ObjectSerializer.deserialize(data.formulas, "Array<WidgetFormula>", "");
        res.logQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.log_query, "LogQueryDefinition", "");
        res.networkQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.network_query, "LogQueryDefinition", "");
        res.processQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.process_query, "ProcessQueryDefinition", "");
        res.profileMetricsQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.profile_metrics_query, "LogQueryDefinition", "");
        res.q = ObjectSerializer_1.ObjectSerializer.deserialize(data.q, "string", "");
        res.queries = ObjectSerializer_1.ObjectSerializer.deserialize(data.queries, "Array<FormulaAndFunctionQueryDefinition>", "");
        if (['timeseries', 'scalar', undefined].includes(data.response_format)) {
            res.responseFormat = data.response_format;
        }
        else {
            throw TypeError("invalid enum value " + data.response_format + " for response_format");
        }
        res.rumQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.rum_query, "LogQueryDefinition", "");
        res.securityQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.security_query, "LogQueryDefinition", "");
        res.style = ObjectSerializer_1.ObjectSerializer.deserialize(data.style, "WidgetRequestStyle", "");
        return res;
    };
    ToplistWidgetRequest.serialize = function (data) {
        var attributeTypes = ToplistWidgetRequest.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.apm_query = ObjectSerializer_1.ObjectSerializer.serialize(data.apmQuery, "LogQueryDefinition", "");
        res.conditional_formats = ObjectSerializer_1.ObjectSerializer.serialize(data.conditionalFormats, "Array<WidgetConditionalFormat>", "");
        res.event_query = ObjectSerializer_1.ObjectSerializer.serialize(data.eventQuery, "LogQueryDefinition", "");
        res.formulas = ObjectSerializer_1.ObjectSerializer.serialize(data.formulas, "Array<WidgetFormula>", "");
        res.log_query = ObjectSerializer_1.ObjectSerializer.serialize(data.logQuery, "LogQueryDefinition", "");
        res.network_query = ObjectSerializer_1.ObjectSerializer.serialize(data.networkQuery, "LogQueryDefinition", "");
        res.process_query = ObjectSerializer_1.ObjectSerializer.serialize(data.processQuery, "ProcessQueryDefinition", "");
        res.profile_metrics_query = ObjectSerializer_1.ObjectSerializer.serialize(data.profileMetricsQuery, "LogQueryDefinition", "");
        res.q = ObjectSerializer_1.ObjectSerializer.serialize(data.q, "string", "");
        res.queries = ObjectSerializer_1.ObjectSerializer.serialize(data.queries, "Array<FormulaAndFunctionQueryDefinition>", "");
        if (['timeseries', 'scalar', undefined].includes(data.responseFormat)) {
            res.response_format = data.responseFormat;
        }
        else {
            throw TypeError("invalid enum value " + data.responseFormat + " for responseFormat");
        }
        res.rum_query = ObjectSerializer_1.ObjectSerializer.serialize(data.rumQuery, "LogQueryDefinition", "");
        res.security_query = ObjectSerializer_1.ObjectSerializer.serialize(data.securityQuery, "LogQueryDefinition", "");
        res.style = ObjectSerializer_1.ObjectSerializer.serialize(data.style, "WidgetRequestStyle", "");
        return res;
    };
    ToplistWidgetRequest.discriminator = undefined;
    ToplistWidgetRequest.attributeTypeMap = {
        "apmQuery": {
            "baseName": "apm_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "conditionalFormats": {
            "baseName": "conditional_formats",
            "type": "Array<WidgetConditionalFormat>",
            "format": ""
        },
        "eventQuery": {
            "baseName": "event_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "formulas": {
            "baseName": "formulas",
            "type": "Array<WidgetFormula>",
            "format": ""
        },
        "logQuery": {
            "baseName": "log_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "networkQuery": {
            "baseName": "network_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "processQuery": {
            "baseName": "process_query",
            "type": "ProcessQueryDefinition",
            "format": ""
        },
        "profileMetricsQuery": {
            "baseName": "profile_metrics_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "q": {
            "baseName": "q",
            "type": "string",
            "format": ""
        },
        "queries": {
            "baseName": "queries",
            "type": "Array<FormulaAndFunctionQueryDefinition>",
            "format": ""
        },
        "responseFormat": {
            "baseName": "response_format",
            "type": "FormulaAndFunctionResponseFormat",
            "format": ""
        },
        "rumQuery": {
            "baseName": "rum_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "securityQuery": {
            "baseName": "security_query",
            "type": "LogQueryDefinition",
            "format": ""
        },
        "style": {
            "baseName": "style",
            "type": "WidgetRequestStyle",
            "format": ""
        }
    };
    return ToplistWidgetRequest;
}());
exports.ToplistWidgetRequest = ToplistWidgetRequest;
//# sourceMappingURL=ToplistWidgetRequest.js.map