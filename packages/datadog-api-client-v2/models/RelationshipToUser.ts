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

import { RelationshipToUserData } from './RelationshipToUserData';
import { HttpFile } from '../http/http';

/**
* Relationship to user.
*/
export class RelationshipToUser {
    'data': RelationshipToUserData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "RelationshipToUserData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RelationshipToUser.attributeTypeMap;
    }
    
    public constructor() {
    }
}
