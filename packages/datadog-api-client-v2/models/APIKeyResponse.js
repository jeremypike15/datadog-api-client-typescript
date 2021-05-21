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
exports.APIKeyResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Response for retrieving an API key.
*/
var APIKeyResponse = /** @class */ (function () {
    function APIKeyResponse() {
    }
    APIKeyResponse.getAttributeTypeMap = function () {
        return APIKeyResponse.attributeTypeMap;
    };
    APIKeyResponse.deserialize = function (data) {
        var res = new APIKeyResponse();
        res.data = ObjectSerializer_1.ObjectSerializer.deserialize(data.data, "FullAPIKey", "");
        res.included = ObjectSerializer_1.ObjectSerializer.deserialize(data.included, "Array<APIKeyResponseIncludedItem>", "");
        return res;
    };
    APIKeyResponse.serialize = function (data) {
        var attributeTypes = APIKeyResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.data = ObjectSerializer_1.ObjectSerializer.serialize(data.data, "FullAPIKey", "");
        res.included = ObjectSerializer_1.ObjectSerializer.serialize(data.included, "Array<APIKeyResponseIncludedItem>", "");
        return res;
    };
    APIKeyResponse.discriminator = undefined;
    APIKeyResponse.attributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "FullAPIKey",
            "format": ""
        },
        "included": {
            "baseName": "included",
            "type": "Array<APIKeyResponseIncludedItem>",
            "format": ""
        }
    };
    return APIKeyResponse;
}());
exports.APIKeyResponse = APIKeyResponse;
//# sourceMappingURL=APIKeyResponse.js.map