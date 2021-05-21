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
exports.HostMuteResponse = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Response with the list of muted host for your organization.
*/
var HostMuteResponse = /** @class */ (function () {
    function HostMuteResponse() {
    }
    HostMuteResponse.getAttributeTypeMap = function () {
        return HostMuteResponse.attributeTypeMap;
    };
    HostMuteResponse.deserialize = function (data) {
        var res = new HostMuteResponse();
        res.action = ObjectSerializer_1.ObjectSerializer.deserialize(data.action, "string", "");
        res.end = ObjectSerializer_1.ObjectSerializer.deserialize(data.end, "number", "int64");
        res.hostname = ObjectSerializer_1.ObjectSerializer.deserialize(data.hostname, "string", "");
        res.message = ObjectSerializer_1.ObjectSerializer.deserialize(data.message, "string", "");
        return res;
    };
    HostMuteResponse.serialize = function (data) {
        var attributeTypes = HostMuteResponse.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.action = ObjectSerializer_1.ObjectSerializer.serialize(data.action, "string", "");
        res.end = ObjectSerializer_1.ObjectSerializer.serialize(data.end, "number", "int64");
        res.hostname = ObjectSerializer_1.ObjectSerializer.serialize(data.hostname, "string", "");
        res.message = ObjectSerializer_1.ObjectSerializer.serialize(data.message, "string", "");
        return res;
    };
    HostMuteResponse.discriminator = undefined;
    HostMuteResponse.attributeTypeMap = {
        "action": {
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        "end": {
            "baseName": "end",
            "type": "number",
            "format": "int64"
        },
        "hostname": {
            "baseName": "hostname",
            "type": "string",
            "format": ""
        },
        "message": {
            "baseName": "message",
            "type": "string",
            "format": ""
        }
    };
    return HostMuteResponse;
}());
exports.HostMuteResponse = HostMuteResponse;
//# sourceMappingURL=HostMuteResponse.js.map