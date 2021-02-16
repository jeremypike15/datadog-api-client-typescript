/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiKey } from './ApiKey';
import { HttpFile } from '../http/http';

/**
* An API key with its associated metadata.
*/
export class ApiKeyResponse {
    'apiKey'?: ApiKey;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiKey",
            "baseName": "api_key",
            "type": "ApiKey",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiKeyResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

