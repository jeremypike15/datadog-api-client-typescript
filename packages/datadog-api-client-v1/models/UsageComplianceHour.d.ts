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
* Compliance Monitoring usage for a given organization for a given hour.
*/
export declare class UsageComplianceHour {
    /**
    * The total number of compliance container hours from the start of the given hour's month until the given hour.
    */
    'complianceContainerCount'?: number;
    /**
    * The total number of compliance hosts hours from the start of the given hour's month until the given hour.
    */
    'complianceHostCount'?: number;
    /**
    * The hour for the usage.
    */
    'hour'?: Date;
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
    }): UsageComplianceHour;
    static serialize(data: UsageComplianceHour): {
        [key: string]: any;
    };
    constructor();
}