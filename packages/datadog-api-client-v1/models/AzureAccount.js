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
exports.AzureAccount = void 0;
var ObjectSerializer_1 = require("./ObjectSerializer");
/**
* Datadog-Azure integrations configured for your organization.
*/
var AzureAccount = /** @class */ (function () {
    function AzureAccount() {
    }
    AzureAccount.getAttributeTypeMap = function () {
        return AzureAccount.attributeTypeMap;
    };
    AzureAccount.deserialize = function (data) {
        var res = new AzureAccount();
        res.clientId = ObjectSerializer_1.ObjectSerializer.deserialize(data.client_id, "string", "");
        res.clientSecret = ObjectSerializer_1.ObjectSerializer.deserialize(data.client_secret, "string", "");
        res.errors = ObjectSerializer_1.ObjectSerializer.deserialize(data.errors, "Array<string>", "");
        res.hostFilters = ObjectSerializer_1.ObjectSerializer.deserialize(data.host_filters, "string", "");
        res.newClientId = ObjectSerializer_1.ObjectSerializer.deserialize(data.new_client_id, "string", "");
        res.newTenantName = ObjectSerializer_1.ObjectSerializer.deserialize(data.new_tenant_name, "string", "");
        res.tenantName = ObjectSerializer_1.ObjectSerializer.deserialize(data.tenant_name, "string", "");
        return res;
    };
    AzureAccount.serialize = function (data) {
        var attributeTypes = AzureAccount.getAttributeTypeMap();
        var res = {};
        for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (!(key in attributeTypes)) {
                throw new TypeError(key + " attribute not in schema");
            }
        }
        res.client_id = ObjectSerializer_1.ObjectSerializer.serialize(data.clientId, "string", "");
        res.client_secret = ObjectSerializer_1.ObjectSerializer.serialize(data.clientSecret, "string", "");
        res.errors = ObjectSerializer_1.ObjectSerializer.serialize(data.errors, "Array<string>", "");
        res.host_filters = ObjectSerializer_1.ObjectSerializer.serialize(data.hostFilters, "string", "");
        res.new_client_id = ObjectSerializer_1.ObjectSerializer.serialize(data.newClientId, "string", "");
        res.new_tenant_name = ObjectSerializer_1.ObjectSerializer.serialize(data.newTenantName, "string", "");
        res.tenant_name = ObjectSerializer_1.ObjectSerializer.serialize(data.tenantName, "string", "");
        return res;
    };
    AzureAccount.discriminator = undefined;
    AzureAccount.attributeTypeMap = {
        "clientId": {
            "baseName": "client_id",
            "type": "string",
            "format": ""
        },
        "clientSecret": {
            "baseName": "client_secret",
            "type": "string",
            "format": ""
        },
        "errors": {
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        },
        "hostFilters": {
            "baseName": "host_filters",
            "type": "string",
            "format": ""
        },
        "newClientId": {
            "baseName": "new_client_id",
            "type": "string",
            "format": ""
        },
        "newTenantName": {
            "baseName": "new_tenant_name",
            "type": "string",
            "format": ""
        },
        "tenantName": {
            "baseName": "tenant_name",
            "type": "string",
            "format": ""
        }
    };
    return AzureAccount;
}());
exports.AzureAccount = AzureAccount;
//# sourceMappingURL=AzureAccount.js.map