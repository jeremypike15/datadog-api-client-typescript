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
exports.AWSTagFilter = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* A tag filter.
*/
var AWSTagFilter = /** @class */ (function () {
    function AWSTagFilter() {
    }
    AWSTagFilter.getAttributeTypeMap = function () {
        return AWSTagFilter.attributeTypeMap;
    };
    AWSTagFilter.deserialize = function (data) {
        var res = new AWSTagFilter();
        if (['elb', 'application_elb', 'sqs', 'rds', 'custom', 'network_elb', 'lambda', undefined].includes(data.namespace)) {
            res.namespace = data.namespace;
        }
        else {
            throw TypeError("invalid enum value " + data.namespace + " for namespace");
        }
        res.tagFilterStr = ObjectSerializer_1.ObjectSerializer.deserialize(data.tag_filter_str, "string", "");
        return res;
    };
    AWSTagFilter.serialize = function (data) {
        var attributeTypes = AWSTagFilter.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (['elb', 'application_elb', 'sqs', 'rds', 'custom', 'network_elb', 'lambda', undefined].includes(data.namespace)) {
            res.namespace = data.namespace;
        }
        else {
            throw TypeError("invalid enum value " + data.namespace + " for namespace");
        }
        res.tag_filter_str = ObjectSerializer_1.ObjectSerializer.serialize(data.tagFilterStr, "string", "");
        return res;
    };
    AWSTagFilter.discriminator = undefined;
    AWSTagFilter.attributeTypeMap = {
        "namespace": {
            "baseName": "namespace",
            "type": "AWSNamespace",
            "format": ""
        },
        "tagFilterStr": {
            "baseName": "tag_filter_str",
            "type": "string",
            "format": ""
        }
    };
    return AWSTagFilter;
}());
exports.AWSTagFilter = AWSTagFilter;
//# sourceMappingURL=AWSTagFilter.js.map