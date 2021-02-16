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

import { SyntheticsPrivateLocation } from './SyntheticsPrivateLocation';
import { SyntheticsPrivateLocationCreationResponseResultEncryption } from './SyntheticsPrivateLocationCreationResponseResultEncryption';
import { HttpFile } from '../http/http';

/**
* Object that contains the new private location, the public key for result encryption, and the configuration skeleton.
*/
export class SyntheticsPrivateLocationCreationResponse {
    /**
    * Configuration skeleton for the private location. See installation instructions of the private location on how to use this configuration.
    */
    'config'?: any;
    'privateLocation'?: SyntheticsPrivateLocation;
    'resultEncryption'?: SyntheticsPrivateLocationCreationResponseResultEncryption;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "config",
            "baseName": "config",
            "type": "any",
            "format": ""
        },
        {
            "name": "privateLocation",
            "baseName": "private_location",
            "type": "SyntheticsPrivateLocation",
            "format": ""
        },
        {
            "name": "resultEncryption",
            "baseName": "result_encryption",
            "type": "SyntheticsPrivateLocationCreationResponseResultEncryption",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsPrivateLocationCreationResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

