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

import { IncidentTeamRelationships } from './IncidentTeamRelationships';
import { IncidentTeamResponseAttributes } from './IncidentTeamResponseAttributes';
import { IncidentTeamType } from './IncidentTeamType';
import { HttpFile } from '../http/http';

/**
* Incident Team data from a response.
*/
export class IncidentTeamResponseData {
    'attributes'?: IncidentTeamResponseAttributes;
    /**
    * The incident team's ID.
    */
    'id'?: string;
    'relationships'?: IncidentTeamRelationships;
    'type'?: IncidentTeamType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "IncidentTeamResponseAttributes",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "IncidentTeamRelationships",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IncidentTeamType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IncidentTeamResponseData.attributeTypeMap;
    }
    
    public constructor() {
    }
}
