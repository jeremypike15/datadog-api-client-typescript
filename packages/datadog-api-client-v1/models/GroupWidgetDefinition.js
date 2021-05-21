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
exports.GroupWidgetDefinition = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The groups widget allows you to keep similar graphs together on your timeboard. Each group has a custom header, can hold one to many graphs, and is collapsible.
*/
var GroupWidgetDefinition = /** @class */ (function () {
    function GroupWidgetDefinition() {
    }
    GroupWidgetDefinition.getAttributeTypeMap = function () {
        return GroupWidgetDefinition.attributeTypeMap;
    };
    GroupWidgetDefinition.deserialize = function (data) {
        var res = new GroupWidgetDefinition();
        res.backgroundColor = ObjectSerializer_1.ObjectSerializer.deserialize(data.background_color, "string", "");
        res.bannerImg = ObjectSerializer_1.ObjectSerializer.deserialize(data.banner_img, "string", "");
        if (data.layout_type === undefined) {
            throw new TypeError("missing required attribute 'layout_type' on 'GroupWidgetDefinition' object");
        }
        if (['ordered', undefined].includes(data.layout_type)) {
            res.layoutType = data.layout_type;
        }
        else {
            throw TypeError("invalid enum value " + data.layout_type + " for layout_type");
        }
        res.showTitle = ObjectSerializer_1.ObjectSerializer.deserialize(data.show_title, "boolean", "");
        res.title = ObjectSerializer_1.ObjectSerializer.deserialize(data.title, "string", "");
        if (['center', 'left', 'right', undefined].includes(data.title_align)) {
            res.titleAlign = data.title_align;
        }
        else {
            throw TypeError("invalid enum value " + data.title_align + " for title_align");
        }
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'GroupWidgetDefinition' object");
        }
        if (['group', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        if (data.widgets === undefined) {
            throw new TypeError("missing required attribute 'widgets' on 'GroupWidgetDefinition' object");
        }
        res.widgets = ObjectSerializer_1.ObjectSerializer.deserialize(data.widgets, "Array<Widget>", "");
        return res;
    };
    GroupWidgetDefinition.serialize = function (data) {
        var attributeTypes = GroupWidgetDefinition.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.background_color = ObjectSerializer_1.ObjectSerializer.serialize(data.backgroundColor, "string", "");
        res.banner_img = ObjectSerializer_1.ObjectSerializer.serialize(data.bannerImg, "string", "");
        if (data.layoutType === undefined) {
            throw new TypeError("missing required attribute 'layout_type' on 'GroupWidgetDefinition' object");
        }
        if (['ordered', undefined].includes(data.layoutType)) {
            res.layout_type = data.layoutType;
        }
        else {
            throw TypeError("invalid enum value " + data.layoutType + " for layoutType");
        }
        res.show_title = ObjectSerializer_1.ObjectSerializer.serialize(data.showTitle, "boolean", "");
        res.title = ObjectSerializer_1.ObjectSerializer.serialize(data.title, "string", "");
        if (['center', 'left', 'right', undefined].includes(data.titleAlign)) {
            res.title_align = data.titleAlign;
        }
        else {
            throw TypeError("invalid enum value " + data.titleAlign + " for titleAlign");
        }
        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'GroupWidgetDefinition' object");
        }
        if (['group', undefined].includes(data.type)) {
            res.type = data.type;
        }
        else {
            throw TypeError("invalid enum value " + data.type + " for type");
        }
        if (data.widgets === undefined) {
            throw new TypeError("missing required attribute 'widgets' on 'GroupWidgetDefinition' object");
        }
        res.widgets = ObjectSerializer_1.ObjectSerializer.serialize(data.widgets, "Array<Widget>", "");
        return res;
    };
    GroupWidgetDefinition.discriminator = undefined;
    GroupWidgetDefinition.attributeTypeMap = {
        "backgroundColor": {
            "baseName": "background_color",
            "type": "string",
            "format": ""
        },
        "bannerImg": {
            "baseName": "banner_img",
            "type": "string",
            "format": ""
        },
        "layoutType": {
            "baseName": "layout_type",
            "type": "WidgetLayoutType",
            "format": ""
        },
        "showTitle": {
            "baseName": "show_title",
            "type": "boolean",
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
        "type": {
            "baseName": "type",
            "type": "GroupWidgetDefinitionType",
            "format": ""
        },
        "widgets": {
            "baseName": "widgets",
            "type": "Array<Widget>",
            "format": ""
        }
    };
    return GroupWidgetDefinition;
}());
exports.GroupWidgetDefinition = GroupWidgetDefinition;
//# sourceMappingURL=GroupWidgetDefinition.js.map