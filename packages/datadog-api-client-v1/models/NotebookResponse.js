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
exports.NotebookResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* The description of a notebook response.
*/
var NotebookResponse = /** @class */ (function () {
    function NotebookResponse() {
    }
    NotebookResponse.getAttributeTypeMap = function () {
        return NotebookResponse.attributeTypeMap;
    };
    NotebookResponse.deserialize = function (data) {
        var res = new NotebookResponse();
        res.data = ObjectSerializer_1.ObjectSerializer.deserialize(data.data, "NotebookResponseData", "");
        return res;
    };
    NotebookResponse.serialize = function (data) {
        var attributeTypes = NotebookResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.data = ObjectSerializer_1.ObjectSerializer.serialize(data.data, "NotebookResponseData", "");
        return res;
    };
    NotebookResponse.discriminator = undefined;
    NotebookResponse.attributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "NotebookResponseData",
            "format": ""
        }
    };
    return NotebookResponse;
}());
exports.NotebookResponse = NotebookResponse;
//# sourceMappingURL=NotebookResponse.js.map