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
exports.GeomapWidgetRequest = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* An updated geomap widget.
*/
var GeomapWidgetRequest = /** @class */ (function () {
    function GeomapWidgetRequest() {
    }
    GeomapWidgetRequest.getAttributeTypeMap = function () {
        return GeomapWidgetRequest.attributeTypeMap;
    };
    GeomapWidgetRequest.deserialize = function (data) {
        var res = new GeomapWidgetRequest();
        res.formulas = ObjectSerializer_1.ObjectSerializer.deserialize(data.formulas, "Array<WidgetFormula>", "");
        res.logQuery = ObjectSerializer_1.ObjectSerializer.deserialize(data.log_query, "LogQueryDefinition", "");
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
        return res;
    };
    GeomapWidgetRequest.serialize = function (data) {
        var attributeTypes = GeomapWidgetRequest.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.formulas = ObjectSerializer_1.ObjectSerializer.serialize(data.formulas, "Array<WidgetFormula>", "");
        res.log_query = ObjectSerializer_1.ObjectSerializer.serialize(data.logQuery, "LogQueryDefinition", "");
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
        return res;
    };
    GeomapWidgetRequest.discriminator = undefined;
    GeomapWidgetRequest.attributeTypeMap = {
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
        }
    };
    return GeomapWidgetRequest;
}());
exports.GeomapWidgetRequest = GeomapWidgetRequest;
//# sourceMappingURL=GeomapWidgetRequest.js.map