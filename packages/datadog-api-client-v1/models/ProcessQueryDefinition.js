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
exports.ProcessQueryDefinition = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The process query to use in the widget.
*/
var ProcessQueryDefinition = /** @class */ (function () {
    function ProcessQueryDefinition() {
    }
    ProcessQueryDefinition.getAttributeTypeMap = function () {
        return ProcessQueryDefinition.attributeTypeMap;
    };
    ProcessQueryDefinition.deserialize = function (data) {
        var res = new ProcessQueryDefinition();
        res.filterBy = ObjectSerializer_1.ObjectSerializer.deserialize(data.filter_by, "Array<string>", "");
        res.limit = ObjectSerializer_1.ObjectSerializer.deserialize(data.limit, "number", "int64");
        if (data.metric === undefined) {
            throw new TypeError("missing required attribute 'metric' on 'ProcessQueryDefinition' object");
        }
        res.metric = ObjectSerializer_1.ObjectSerializer.deserialize(data.metric, "string", "");
        res.searchBy = ObjectSerializer_1.ObjectSerializer.deserialize(data.search_by, "string", "");
        return res;
    };
    ProcessQueryDefinition.serialize = function (data) {
        var attributeTypes = ProcessQueryDefinition.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.filter_by = ObjectSerializer_1.ObjectSerializer.serialize(data.filterBy, "Array<string>", "");
        res.limit = ObjectSerializer_1.ObjectSerializer.serialize(data.limit, "number", "int64");
        if (data.metric === undefined) {
            throw new TypeError("missing required attribute 'metric' on 'ProcessQueryDefinition' object");
        }
        res.metric = ObjectSerializer_1.ObjectSerializer.serialize(data.metric, "string", "");
        res.search_by = ObjectSerializer_1.ObjectSerializer.serialize(data.searchBy, "string", "");
        return res;
    };
    ProcessQueryDefinition.discriminator = undefined;
    ProcessQueryDefinition.attributeTypeMap = {
        "filterBy": {
            "baseName": "filter_by",
            "type": "Array<string>",
            "format": ""
        },
        "limit": {
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        "metric": {
            "baseName": "metric",
            "type": "string",
            "format": ""
        },
        "searchBy": {
            "baseName": "search_by",
            "type": "string",
            "format": ""
        }
    };
    return ProcessQueryDefinition;
}());
exports.ProcessQueryDefinition = ProcessQueryDefinition;
//# sourceMappingURL=ProcessQueryDefinition.js.map