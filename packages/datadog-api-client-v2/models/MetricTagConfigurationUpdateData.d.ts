/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MetricTagConfigurationType } from './MetricTagConfigurationType';
import { MetricTagConfigurationUpdateAttributes } from './MetricTagConfigurationUpdateAttributes';
/**
* Object for a single tag configuration to be edited.
*/
export declare class MetricTagConfigurationUpdateData {
    'attributes'?: MetricTagConfigurationUpdateAttributes;
    /**
    * The metric name for this resource.
    */
    'id': string;
    'type': MetricTagConfigurationType;
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
    }): MetricTagConfigurationUpdateData;
    static serialize(data: MetricTagConfigurationUpdateData): {
        [key: string]: any;
    };
    constructor();
}