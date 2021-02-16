/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ResponseMetaAttributes } from './ResponseMetaAttributes';
import { Role } from './Role';
import { HttpFile } from '../http/http';

/**
* Response containing information about multiple roles.
*/
export class RolesResponse {
    /**
    * Array of returned roles.
    */
    'data'?: Array<Role>;
    'meta'?: ResponseMetaAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Role>",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "ResponseMetaAttributes",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RolesResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

