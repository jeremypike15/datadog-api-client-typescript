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

import { LogQueryDefinitionSort } from './LogQueryDefinitionSort';
import { HttpFile } from '../http/http';

/**
* Defined items in the group.
*/
export class LogQueryDefinitionGroupBy {
    /**
    * Facet name.
    */
    'facet': string;
    /**
    * Maximum number of items in the group.
    */
    'limit'?: number;
    'sort'?: LogQueryDefinitionSort;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "facet",
            "baseName": "facet",
            "type": "string",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "LogQueryDefinitionSort",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogQueryDefinitionGroupBy.attributeTypeMap;
    }
    
    public constructor() {
    }
}
