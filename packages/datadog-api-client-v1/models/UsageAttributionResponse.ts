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

import { UsageAttributionBody } from './UsageAttributionBody';
import { UsageAttributionMetadata } from './UsageAttributionMetadata';
import { HttpFile } from '../http/http';

/**
* Response containing the Usage Summary by tag(s).
*/
export class UsageAttributionResponse {
    'metadata'?: UsageAttributionMetadata;
    /**
    * Get Usage Summary by tag(s).
    */
    'usage'?: Array<UsageAttributionBody>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "UsageAttributionMetadata",
            "format": ""
        },
        {
            "name": "usage",
            "baseName": "usage",
            "type": "Array<UsageAttributionBody>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsageAttributionResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

