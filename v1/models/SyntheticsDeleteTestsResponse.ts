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

import { SyntheticsDeleteTestsResponseDeletedTests } from './SyntheticsDeleteTestsResponseDeletedTests';
import { HttpFile } from '../http/http';

/**
* Response object for deleting Synthetic tests.
*/
export class SyntheticsDeleteTestsResponse {
    /**
    * Array of objects containing a deleted Synthetic test ID with the associated deletion timestamp.
    */
    'deletedTests'?: Array<SyntheticsDeleteTestsResponseDeletedTests>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deletedTests",
            "baseName": "deleted_tests",
            "type": "Array<SyntheticsDeleteTestsResponseDeletedTests>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsDeleteTestsResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}
