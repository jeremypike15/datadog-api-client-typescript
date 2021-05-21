/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { LogsMetricResponseCompute } from './LogsMetricResponseCompute';
import { LogsMetricResponseFilter } from './LogsMetricResponseFilter';
import { LogsMetricResponseGroupBy } from './LogsMetricResponseGroupBy';
/**
* The object describing a Datadog log-based metric.
*/
export declare class LogsMetricResponseAttributes {
    'compute'?: LogsMetricResponseCompute;
    'filter'?: LogsMetricResponseFilter;
    /**
    * The rules for the group by.
    */
    'groupBy'?: Array<LogsMetricResponseGroupBy>;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: {
        [key: string]: {
            baseName: string;
            type: string;
            format: string;
        };
    };
    static getAttributeTypeMap(): {
        [key: string]: {
            baseName: string;
            type: string;
            format: string;
        };
    };
    static deserialize(data: {
        [key: string]: any;
    }): LogsMetricResponseAttributes;
    static serialize(data: LogsMetricResponseAttributes): {
        [key: string]: any;
    };
    constructor();
}