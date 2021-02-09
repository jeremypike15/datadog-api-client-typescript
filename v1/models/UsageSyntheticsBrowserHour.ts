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

import { HttpFile } from '../http/http';

/**
* Number of Synthetics Browser tests run for each hour for a given organization.
*/
export class UsageSyntheticsBrowserHour {
    /**
    * Contains the number of Synthetics Browser tests run.
    */
    'browserCheckCallsCount'?: number;
    /**
    * The hour for the usage.
    */
    'hour'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "browserCheckCallsCount",
            "baseName": "browser_check_calls_count",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "hour",
            "baseName": "hour",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return UsageSyntheticsBrowserHour.attributeTypeMap;
    }
    
    public constructor() {
    }
}
