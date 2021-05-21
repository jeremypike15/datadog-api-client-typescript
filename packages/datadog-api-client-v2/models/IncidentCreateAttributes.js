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
exports.IncidentCreateAttributes = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The incident's attributes for a create request.
*/
var IncidentCreateAttributes = /** @class */ (function () {
    function IncidentCreateAttributes() {
    }
    IncidentCreateAttributes.getAttributeTypeMap = function () {
        return IncidentCreateAttributes.attributeTypeMap;
    };
    IncidentCreateAttributes.deserialize = function (data) {
        var res = new IncidentCreateAttributes();
        if (data.customer_impacted === undefined) {
            throw new TypeError("missing required attribute 'customer_impacted' on 'IncidentCreateAttributes' object");
        }
        res.customerImpacted = ObjectSerializer_1.ObjectSerializer.deserialize(data.customer_impacted, "boolean", "");
        res.fields = ObjectSerializer_1.ObjectSerializer.deserialize(data.fields, "{ [key: string]: IncidentFieldAttributes; }", "");
        res.initialTimelineCells = ObjectSerializer_1.ObjectSerializer.deserialize(data.initial_timeline_cells, "Array<IncidentTimelineCellCreateAttributes>", "");
        res.notificationHandles = ObjectSerializer_1.ObjectSerializer.deserialize(data.notification_handles, "Array<string>", "");
        if (data.title === undefined) {
            throw new TypeError("missing required attribute 'title' on 'IncidentCreateAttributes' object");
        }
        res.title = ObjectSerializer_1.ObjectSerializer.deserialize(data.title, "string", "");
        return res;
    };
    IncidentCreateAttributes.serialize = function (data) {
        var attributeTypes = IncidentCreateAttributes.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (data.customerImpacted === undefined) {
            throw new TypeError("missing required attribute 'customer_impacted' on 'IncidentCreateAttributes' object");
        }
        res.customer_impacted = ObjectSerializer_1.ObjectSerializer.serialize(data.customerImpacted, "boolean", "");
        res.fields = ObjectSerializer_1.ObjectSerializer.serialize(data.fields, "{ [key: string]: IncidentFieldAttributes; }", "");
        res.initial_timeline_cells = ObjectSerializer_1.ObjectSerializer.serialize(data.initialTimelineCells, "Array<IncidentTimelineCellCreateAttributes>", "");
        res.notification_handles = ObjectSerializer_1.ObjectSerializer.serialize(data.notificationHandles, "Array<string>", "");
        if (data.title === undefined) {
            throw new TypeError("missing required attribute 'title' on 'IncidentCreateAttributes' object");
        }
        res.title = ObjectSerializer_1.ObjectSerializer.serialize(data.title, "string", "");
        return res;
    };
    IncidentCreateAttributes.discriminator = undefined;
    IncidentCreateAttributes.attributeTypeMap = {
        "customerImpacted": {
            "baseName": "customer_impacted",
            "type": "boolean",
            "format": ""
        },
        "fields": {
            "baseName": "fields",
            "type": "{ [key: string]: IncidentFieldAttributes; }",
            "format": ""
        },
        "initialTimelineCells": {
            "baseName": "initial_timeline_cells",
            "type": "Array<IncidentTimelineCellCreateAttributes>",
            "format": ""
        },
        "notificationHandles": {
            "baseName": "notification_handles",
            "type": "Array<string>",
            "format": ""
        },
        "title": {
            "baseName": "title",
            "type": "string",
            "format": ""
        }
    };
    return IncidentCreateAttributes;
}());
exports.IncidentCreateAttributes = IncidentCreateAttributes;
//# sourceMappingURL=IncidentCreateAttributes.js.map