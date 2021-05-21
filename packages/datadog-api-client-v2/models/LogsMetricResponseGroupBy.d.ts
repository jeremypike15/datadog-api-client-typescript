/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
* A group by rule.
*/
export declare class LogsMetricResponseGroupBy {
    /**
    * The path to the value the log-based metric will be aggregated over.
    */
    'path'?: string;
    /**
    * Eventual name of the tag that gets created. By default, the path attribute is used as the tag name.
    */
    'tagName'?: string;
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
    }): LogsMetricResponseGroupBy;
    static serialize(data: LogsMetricResponseGroupBy): {
        [key: string]: any;
    };
    constructor();
}