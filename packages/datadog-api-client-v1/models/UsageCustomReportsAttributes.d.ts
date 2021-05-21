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
* The response containing attributes for custom reports.
*/
export declare class UsageCustomReportsAttributes {
    /**
    * The date the specified custom report was computed.
    */
    'computedOn'?: string;
    /**
    * The ending date of custom report.
    */
    'endDate'?: string;
    /**
    * size
    */
    'size'?: number;
    /**
    * The starting date of custom report.
    */
    'startDate'?: string;
    /**
    * A list of tags to apply to custom reports.
    */
    'tags'?: Array<string>;
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
    }): UsageCustomReportsAttributes;
    static serialize(data: UsageCustomReportsAttributes): {
        [key: string]: any;
    };
    constructor();
}