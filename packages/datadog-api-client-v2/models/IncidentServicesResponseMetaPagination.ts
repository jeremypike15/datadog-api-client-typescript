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

import { HttpFile } from '../http/http';

/**
* Pagination properties.
*/
export class IncidentServicesResponseMetaPagination {
    /**
    * The index of the first element in the next page of results. Equal to page size added to the current offset.
    */
    'nextOffset'?: number;
    /**
    * The index of the first element in the results.
    */
    'offset'?: number;
    /**
    * Maximum size of pages to return.
    */
    'size'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "nextOffset",
            "baseName": "next_offset",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return IncidentServicesResponseMetaPagination.attributeTypeMap;
    }
    
    public constructor() {
    }
}

