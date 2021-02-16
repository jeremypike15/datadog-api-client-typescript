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

import { LogsArchiveDefinition } from './LogsArchiveDefinition';
import { HttpFile } from '../http/http';

/**
* The logs archive.
*/
export class LogsArchive {
    'data'?: LogsArchiveDefinition;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "LogsArchiveDefinition",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsArchive.attributeTypeMap;
    }
    
    public constructor() {
    }
}

