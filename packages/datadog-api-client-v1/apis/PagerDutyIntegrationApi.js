"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagerDutyIntegrationApiResponseProcessor = exports.PagerDutyIntegrationApiRequestFactory = void 0;
// TODO: better import syntax?
var baseapi_1 = require("./baseapi");
var configuration_1 = require("../configuration");
var http_1 = require("../http/http");
var ObjectSerializer_1 = require("../models/ObjectSerializer");
var exception_1 = require("./exception");
var util_1 = require("../util");
/**
 * no description
 */
var PagerDutyIntegrationApiRequestFactory = /** @class */ (function (_super) {
    __extends(PagerDutyIntegrationApiRequestFactory, _super);
    function PagerDutyIntegrationApiRequestFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new service object in the PagerDuty integration.
     * Create a new service object
     * @param body Create a new service object request body.
     */
    PagerDutyIntegrationApiRequestFactory.prototype.createPagerDutyIntegrationService = function (body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling createPagerDutyIntegrationService.');
                        }
                        localVarPath = '/api/v1/integration/pagerduty/configuration/services';
                        requestContext = configuration_1.getServer(config, 'PagerDutyIntegrationApi.createPagerDutyIntegrationService').makeRequestContext(localVarPath, http_1.HttpMethod.POST);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "PagerDutyService", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Delete a single service object in the Datadog-PagerDuty integration.
     * Delete a single service object
     * @param serviceName The service name
     */
    PagerDutyIntegrationApiRequestFactory.prototype.deletePagerDutyIntegrationService = function (serviceName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'serviceName' is not null or undefined
                        if (serviceName === null || serviceName === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter serviceName was null or undefined when calling deletePagerDutyIntegrationService.');
                        }
                        localVarPath = '/api/v1/integration/pagerduty/configuration/services/{service_name}'
                            .replace('{' + 'service_name' + '}', encodeURIComponent(String(serviceName)));
                        requestContext = configuration_1.getServer(config, 'PagerDutyIntegrationApi.deletePagerDutyIntegrationService').makeRequestContext(localVarPath, http_1.HttpMethod.DELETE);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Get service name in the Datadog-PagerDuty integration.
     * Get a single service object
     * @param serviceName The service name.
     */
    PagerDutyIntegrationApiRequestFactory.prototype.getPagerDutyIntegrationService = function (serviceName, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'serviceName' is not null or undefined
                        if (serviceName === null || serviceName === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter serviceName was null or undefined when calling getPagerDutyIntegrationService.');
                        }
                        localVarPath = '/api/v1/integration/pagerduty/configuration/services/{service_name}'
                            .replace('{' + 'service_name' + '}', encodeURIComponent(String(serviceName)));
                        requestContext = configuration_1.getServer(config, 'PagerDutyIntegrationApi.getPagerDutyIntegrationService').makeRequestContext(localVarPath, http_1.HttpMethod.GET);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    /**
     * Update a single service object in the Datadog-PagerDuty integration.
     * Update a single service object
     * @param serviceName The service name
     * @param body Update an existing service object request body.
     */
    PagerDutyIntegrationApiRequestFactory.prototype.updatePagerDutyIntegrationService = function (serviceName, body, options) {
        return __awaiter(this, void 0, void 0, function () {
            var config, localVarPath, requestContext, contentType, serializedBody, authMethod;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = options || this.configuration;
                        // verify required parameter 'serviceName' is not null or undefined
                        if (serviceName === null || serviceName === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter serviceName was null or undefined when calling updatePagerDutyIntegrationService.');
                        }
                        // verify required parameter 'body' is not null or undefined
                        if (body === null || body === undefined) {
                            throw new baseapi_1.RequiredError('Required parameter body was null or undefined when calling updatePagerDutyIntegrationService.');
                        }
                        localVarPath = '/api/v1/integration/pagerduty/configuration/services/{service_name}'
                            .replace('{' + 'service_name' + '}', encodeURIComponent(String(serviceName)));
                        requestContext = configuration_1.getServer(config, 'PagerDutyIntegrationApi.updatePagerDutyIntegrationService').makeRequestContext(localVarPath, http_1.HttpMethod.PUT);
                        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
                        requestContext.setHttpConfig(config.httpConfig);
                        contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
                            "application/json"
                        ]);
                        requestContext.setHeaderParam("Content-Type", contentType);
                        serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(ObjectSerializer_1.ObjectSerializer.serialize(body, "PagerDutyServiceKey", ""), contentType);
                        requestContext.setBody(serializedBody);
                        authMethod = null;
                        // Apply auth methods
                        authMethod = config.authMethods["apiKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        authMethod = config.authMethods["appKeyAuth"];
                        if (!authMethod) return [3 /*break*/, 4];
                        return [4 /*yield*/, authMethod.applySecurityAuthentication(requestContext)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, requestContext];
                }
            });
        });
    };
    return PagerDutyIntegrationApiRequestFactory;
}(baseapi_1.BaseAPIRequestFactory));
exports.PagerDutyIntegrationApiRequestFactory = PagerDutyIntegrationApiRequestFactory;
var PagerDutyIntegrationApiResponseProcessor = /** @class */ (function () {
    function PagerDutyIntegrationApiResponseProcessor() {
    }
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    PagerDutyIntegrationApiResponseProcessor.prototype.createPagerDutyIntegrationService = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_1, _a, _b, _c, _d, body_2, _e, _f, _g, _h, body_3, _j, _k, _l, _m, body_4, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("201", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_1 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "PagerDutyServiceName", ""]);
                        return [2 /*return*/, body_1];
                    case 2:
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_2 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_2);
                    case 4:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_3 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_3);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_4 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "PagerDutyServiceName", ""]);
                        return [2 /*return*/, body_4];
                    case 8:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    PagerDutyIntegrationApiResponseProcessor.prototype.deletePagerDutyIntegrationService = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_5, _a, _b, _c, _d, body_6, _e, _f, _g, _h, body_7, _j, _k, _l, _m, body;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                            return [2 /*return*/];
                        }
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_5 = _b.apply(_a, [_d.apply(_c, [_o.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_5);
                    case 2:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_6 = _f.apply(_e, [_h.apply(_g, [_o.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_6);
                    case 4:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_7 = _k.apply(_j, [_m.apply(_l, [_o.sent(), contentType]), "void", ""]);
                        return [2 /*return*/, body_7];
                    case 6:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    PagerDutyIntegrationApiResponseProcessor.prototype.getPagerDutyIntegrationService = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_8, _a, _b, _c, _d, body_9, _e, _f, _g, _h, body_10, _j, _k, _l, _m, body_11, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (!util_1.isCodeInRange("200", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_8 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "PagerDutyServiceName", ""]);
                        return [2 /*return*/, body_8];
                    case 2:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_9 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_9);
                    case 4:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_10 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_10);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_11 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "PagerDutyServiceName", ""]);
                        return [2 /*return*/, body_11];
                    case 8:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePagerDutyIntegrationService
     * @throws ApiException if the response code was not in [200, 299]
     */
    PagerDutyIntegrationApiResponseProcessor.prototype.updatePagerDutyIntegrationService = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var contentType, body_12, _a, _b, _c, _d, body_13, _e, _f, _g, _h, body_14, _j, _k, _l, _m, body_15, _o, _p, _q, _r, body;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
                        if (util_1.isCodeInRange("200", response.httpStatusCode)) {
                            return [2 /*return*/];
                        }
                        if (!util_1.isCodeInRange("400", response.httpStatusCode)) return [3 /*break*/, 2];
                        _b = (_a = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _d = (_c = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 1:
                        body_12 = _b.apply(_a, [_d.apply(_c, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(400, body_12);
                    case 2:
                        if (!util_1.isCodeInRange("403", response.httpStatusCode)) return [3 /*break*/, 4];
                        _f = (_e = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _h = (_g = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 3:
                        body_13 = _f.apply(_e, [_h.apply(_g, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(403, body_13);
                    case 4:
                        if (!util_1.isCodeInRange("404", response.httpStatusCode)) return [3 /*break*/, 6];
                        _k = (_j = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _m = (_l = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 5:
                        body_14 = _k.apply(_j, [_m.apply(_l, [_s.sent(), contentType]), "APIErrorResponse", ""]);
                        throw new exception_1.ApiException(404, body_14);
                    case 6:
                        if (!(response.httpStatusCode >= 200 && response.httpStatusCode <= 299)) return [3 /*break*/, 8];
                        _p = (_o = ObjectSerializer_1.ObjectSerializer).deserialize;
                        _r = (_q = ObjectSerializer_1.ObjectSerializer).parse;
                        return [4 /*yield*/, response.body.text()];
                    case 7:
                        body_15 = _p.apply(_o, [_r.apply(_q, [_s.sent(), contentType]), "void", ""]);
                        return [2 /*return*/, body_15];
                    case 8:
                        body = response.body || "";
                        throw new exception_1.ApiException(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
                }
            });
        });
    };
    return PagerDutyIntegrationApiResponseProcessor;
}());
exports.PagerDutyIntegrationApiResponseProcessor = PagerDutyIntegrationApiResponseProcessor;
//# sourceMappingURL=PagerDutyIntegrationApi.js.map