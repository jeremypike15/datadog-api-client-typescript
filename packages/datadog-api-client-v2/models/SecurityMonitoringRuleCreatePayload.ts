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

import { SecurityMonitoringFilter } from './SecurityMonitoringFilter';
import { SecurityMonitoringRuleCaseCreate } from './SecurityMonitoringRuleCaseCreate';
import { SecurityMonitoringRuleOptions } from './SecurityMonitoringRuleOptions';
import { SecurityMonitoringRuleQueryCreate } from './SecurityMonitoringRuleQueryCreate';
import { HttpFile } from '../http/http';

/**
* Create a new rule.
*/
export class SecurityMonitoringRuleCreatePayload {
    /**
    * Cases for generating signals.
    */
    'cases': Array<SecurityMonitoringRuleCaseCreate>;
    /**
    * Additional queries to filter matched events before they are processed.
    */
    'filters'?: Array<SecurityMonitoringFilter>;
    /**
    * Whether the rule is enabled.
    */
    'isEnabled': boolean;
    /**
    * Message for generated signals.
    */
    'message': string;
    /**
    * The name of the rule.
    */
    'name': string;
    'options': SecurityMonitoringRuleOptions;
    /**
    * Queries for selecting logs which are part of the rule.
    */
    'queries': Array<SecurityMonitoringRuleQueryCreate>;
    /**
    * Tags for generated signals.
    */
    'tags'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cases",
            "baseName": "cases",
            "type": "Array<SecurityMonitoringRuleCaseCreate>",
            "format": ""
        },
        {
            "name": "filters",
            "baseName": "filters",
            "type": "Array<SecurityMonitoringFilter>",
            "format": ""
        },
        {
            "name": "isEnabled",
            "baseName": "isEnabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "SecurityMonitoringRuleOptions",
            "format": ""
        },
        {
            "name": "queries",
            "baseName": "queries",
            "type": "Array<SecurityMonitoringRuleQueryCreate>",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SecurityMonitoringRuleCreatePayload.attributeTypeMap;
    }
    
    public constructor() {
    }
}

