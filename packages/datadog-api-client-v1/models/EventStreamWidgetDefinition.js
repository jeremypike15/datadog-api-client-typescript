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
exports.EventStreamWidgetDefinition = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The event stream is a widget version of the stream of events on the Event Stream view. Only available on FREE layout dashboards.
*/
var EventStreamWidgetDefinition = /** @class */ (function () {
    function EventStreamWidgetDefinition() {
    }
    EventStreamWidgetDefinition.getAttributeTypeMap = function () {
        return EventStreamWidgetDefinition.attributeTypeMap;
    };
    EventStreamWidgetDefinition.deserialize = function (data) {
        var res = new EventStreamWidgetDefinition();
        if (['s', 'l', undefined].includes(data.event_size)) {
            res.eventSize = data.event_size;
        }
        else {
            throw TypeError("invalid enum value " + data.event_size + " for event_size");
        }
        if (data.query === undefined) {
            throw new TypeError("missing required attribute 'query' on 'EventStreamWidgetDefinition' object");
        }
        res.query = ObjectSerializer_1.ObjectSerializer.deserialize(data.query, "string", "");
        res.tagsExecution = ObjectSerializer_1.ObjectSerializer.deserialize(data.tags_execution, "string", "");
        res.time = ObjectSerializer_1.ObjectSerializer.deserialize(data.time, "WidgetTime", "");
        res.title = ObjectSerializer_1.ObjectSerializer.deserialize(data.title, "string", "");
        if (['center', 'left', 'right', undefined].includes(data.title_align)) {
            res.titleAlign = data.title_align;
        }
        else {
            throw TypeError("invalid enum value " + data.title_align + " for title_align");
        }
        res.titleSize = ObjectSerializer_1.ObjectSerializer.deserialize(data.title_size, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'EventStreamWidgetDefinition' object");
        }
        if (['event_stream', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    EventStreamWidgetDefinition.serialize = function (data) {
        var attributeTypes = EventStreamWidgetDefinition.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        if (['s', 'l', undefined].includes(data.eventSize)) {
            res.event_size = data.eventSize;
        }
        else {
            throw TypeError("invalid enum value " + data.eventSize + " for eventSize");
        }
        if (data.query === undefined) {
            throw new TypeError("missing required attribute 'query' on 'EventStreamWidgetDefinition' object");
        }
        res.query = ObjectSerializer_1.ObjectSerializer.serialize(data.query, "string", "");
        res.tags_execution = ObjectSerializer_1.ObjectSerializer.serialize(data.tagsExecution, "string", "");
        res.time = ObjectSerializer_1.ObjectSerializer.serialize(data.time, "WidgetTime", "");
        res.title = ObjectSerializer_1.ObjectSerializer.serialize(data.title, "string", "");
        if (['center', 'left', 'right', undefined].includes(data.titleAlign)) {
            res.title_align = data.titleAlign;
        }
        else {
            throw TypeError("invalid enum value " + data.titleAlign + " for titleAlign");
        }
        res.title_size = ObjectSerializer_1.ObjectSerializer.serialize(data.titleSize, "string", "");
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'EventStreamWidgetDefinition' object");
        }
        if (['event_stream', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        return res;
    };
    EventStreamWidgetDefinition.discriminator = undefined;
    EventStreamWidgetDefinition.attributeTypeMap = {
        "eventSize": {
            "baseName": "event_size",
            "type": "WidgetEventSize",
            "format": ""
        },
        "query": {
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        "tagsExecution": {
            "baseName": "tags_execution",
            "type": "string",
            "format": ""
        },
        "time": {
            "baseName": "time",
            "type": "WidgetTime",
            "format": ""
        },
        "title": {
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        "titleAlign": {
            "baseName": "title_align",
            "type": "WidgetTextAlign",
            "format": ""
        },
        "titleSize": {
            "baseName": "title_size",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "EventStreamWidgetDefinitionType",
            "format": ""
        }
    };
    return EventStreamWidgetDefinition;
}());
exports.EventStreamWidgetDefinition = EventStreamWidgetDefinition;
//# sourceMappingURL=EventStreamWidgetDefinition.js.map