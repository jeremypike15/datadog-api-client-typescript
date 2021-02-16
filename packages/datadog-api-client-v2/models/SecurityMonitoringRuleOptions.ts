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

import { SecurityMonitoringRuleEvaluationWindow } from './SecurityMonitoringRuleEvaluationWindow';
import { SecurityMonitoringRuleKeepAlive } from './SecurityMonitoringRuleKeepAlive';
import { SecurityMonitoringRuleMaxSignalDuration } from './SecurityMonitoringRuleMaxSignalDuration';
import { HttpFile } from '../http/http';

/**
* Options on rules.
*/
export class SecurityMonitoringRuleOptions {
    'evaluationWindow'?: SecurityMonitoringRuleEvaluationWindow;
    'keepAlive'?: SecurityMonitoringRuleKeepAlive;
    'maxSignalDuration'?: SecurityMonitoringRuleMaxSignalDuration;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "evaluationWindow",
            "baseName": "evaluationWindow",
            "type": "SecurityMonitoringRuleEvaluationWindow",
            "format": ""
        },
        {
            "name": "keepAlive",
            "baseName": "keepAlive",
            "type": "SecurityMonitoringRuleKeepAlive",
            "format": ""
        },
        {
            "name": "maxSignalDuration",
            "baseName": "maxSignalDuration",
            "type": "SecurityMonitoringRuleMaxSignalDuration",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SecurityMonitoringRuleOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}
