/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DashboardLayoutType } from './DashboardLayoutType';
/**
* Dashboard definition.
*/
export declare class DashboardSummaryDefinition {
    /**
    * Identifier of the dashboard author.
    */
    'authorHandle'?: string;
    /**
    * Creation date of the dashboard.
    */
    'createdAt'?: Date;
    /**
    * Description of the dashboard.
    */
    'description'?: string;
    /**
    * Dashboard identifier.
    */
    'id'?: string;
    /**
    * Whether this dashboard is read-only. If True, only the author and admins can make changes to it.
    */
    'isReadOnly'?: boolean;
    'layoutType'?: DashboardLayoutType;
    /**
    * Modification date of the dashboard.
    */
    'modifiedAt'?: Date;
    /**
    * Title of the dashboard.
    */
    'title'?: string;
    /**
    * URL of the dashboard.
    */
    'url'?: string;
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
    }): DashboardSummaryDefinition;
    static serialize(data: DashboardSummaryDefinition): {
        [key: string]: any;
    };
    constructor();
}