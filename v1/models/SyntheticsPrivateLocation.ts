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

import { SyntheticsPrivateLocationSecrets } from './SyntheticsPrivateLocationSecrets';
import { HttpFile } from '../http/http';

/**
* Object containing information about the private location to create.
*/
export class SyntheticsPrivateLocation {
    /**
    * Description of the private location.
    */
    'description': string;
    /**
    * Unique identifier of the private location.
    */
    'id'?: string;
    /**
    * Name of the private location.
    */
    'name': string;
    'secrets'?: SyntheticsPrivateLocationSecrets;
    /**
    * Array of tags attached to the private location.
    */
    'tags': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "secrets",
            "baseName": "secrets",
            "type": "SyntheticsPrivateLocationSecrets",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsPrivateLocation.attributeTypeMap;
    }
    
    public constructor() {
    }
}
