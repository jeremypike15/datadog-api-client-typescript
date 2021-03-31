/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsDeviceID } from './SyntheticsDeviceID';
import { SyntheticsTestOptionsMonitorOptions } from './SyntheticsTestOptionsMonitorOptions';
import { SyntheticsTestOptionsRetry } from './SyntheticsTestOptionsRetry';
import { SyntheticsTickInterval } from './SyntheticsTickInterval';
import { HttpFile } from '../http/http';

/**
* Object describing the extra options for a Synthetic test.
*/
export class SyntheticsTestOptions {
    /**
    * For SSL test, whether or not the test should allow self signed certificates.
    */
    'acceptSelfSigned'?: boolean;
    /**
    * Allows loading insecure content for an HTTP request.
    */
    'allowInsecure'?: boolean;
    /**
    * For browser test, array with the different device IDs used to run the test.
    */
    'deviceIds'?: Array<SyntheticsDeviceID>;
    /**
    * Whether or not to disable CORS mechanism. Currently only available for Chrome.
    */
    'disableCors'?: boolean;
    /**
    * For API HTTP test, whether or not the test should follow redirects.
    */
    'followRedirects'?: boolean;
    /**
    * Minimum amount of time in failure required to trigger an alert.
    */
    'minFailureDuration'?: number;
    /**
    * Minimum number of locations in failure required to trigger an alert.
    */
    'minLocationFailed'?: number;
    'monitorOptions'?: SyntheticsTestOptionsMonitorOptions;
    /**
    * Prevents saving screenshots of the steps.
    */
    'noScreenshot'?: boolean;
    'retry'?: SyntheticsTestOptionsRetry;
    'tickEvery'?: SyntheticsTickInterval;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acceptSelfSigned",
            "baseName": "accept_self_signed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowInsecure",
            "baseName": "allow_insecure",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "deviceIds",
            "baseName": "device_ids",
            "type": "Array<SyntheticsDeviceID>",
            "format": ""
        },
        {
            "name": "disableCors",
            "baseName": "disableCors",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "followRedirects",
            "baseName": "follow_redirects",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "minFailureDuration",
            "baseName": "min_failure_duration",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "minLocationFailed",
            "baseName": "min_location_failed",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "monitorOptions",
            "baseName": "monitor_options",
            "type": "SyntheticsTestOptionsMonitorOptions",
            "format": ""
        },
        {
            "name": "noScreenshot",
            "baseName": "noScreenshot",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "retry",
            "baseName": "retry",
            "type": "SyntheticsTestOptionsRetry",
            "format": ""
        },
        {
            "name": "tickEvery",
            "baseName": "tick_every",
            "type": "SyntheticsTickInterval",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsTestOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}

