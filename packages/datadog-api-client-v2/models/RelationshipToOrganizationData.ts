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

import { OrganizationsType } from './OrganizationsType';
import { HttpFile } from '../http/http';

/**
* Relationship to organization object.
*/
export class RelationshipToOrganizationData {
    /**
    * ID of the organization.
    */
    'id': string;
    'type': OrganizationsType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "OrganizationsType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RelationshipToOrganizationData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

