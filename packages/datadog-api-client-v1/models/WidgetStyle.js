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
exports.WidgetStyle = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Widget style definition.
*/
var WidgetStyle = /** @class */ (function () {
    function WidgetStyle() {
    }
    WidgetStyle.getAttributeTypeMap = function () {
        return WidgetStyle.attributeTypeMap;
    };
    WidgetStyle.deserialize = function (data) {
        var res = new WidgetStyle();
        res.palette = ObjectSerializer_1.ObjectSerializer.deserialize(data.palette, "string", "");
        return res;
    };
    WidgetStyle.serialize = function (data) {
        var attributeTypes = WidgetStyle.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.palette = ObjectSerializer_1.ObjectSerializer.serialize(data.palette, "string", "");
        return res;
    };
    WidgetStyle.discriminator = undefined;
    WidgetStyle.attributeTypeMap = {
        "palette": {
            "baseName": "palette",
            "type": "string",
            "format": ""
        }
    };
    return WidgetStyle;
}());
exports.WidgetStyle = WidgetStyle;
//# sourceMappingURL=WidgetStyle.js.map