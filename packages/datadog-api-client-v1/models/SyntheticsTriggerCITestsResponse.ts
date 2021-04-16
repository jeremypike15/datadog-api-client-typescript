/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsTriggerCITestLocation } from './SyntheticsTriggerCITestLocation';
import { SyntheticsTriggerCITestRunResult } from './SyntheticsTriggerCITestRunResult';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Object containing information about the tests triggered.
*/

export class SyntheticsTriggerCITestsResponse {
    /**
    * List of Synthetics locations.
    */
    'locations'?: Array<SyntheticsTriggerCITestLocation>;
    /**
    * Information about the tests runs.
    */
    'results'?: Array<SyntheticsTriggerCITestRunResult>;
    /**
    * The public IDs of the Synthetics test triggered.
    */
    'triggeredCheckIds'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "locations": {
            "baseName": "locations",
            "type": "Array<SyntheticsTriggerCITestLocation>",
            "format": ""
        },
        "results": {
            "baseName": "results",
            "type": "Array<SyntheticsTriggerCITestRunResult>",
            "format": ""
        },
        "triggeredCheckIds": {
            "baseName": "triggered_check_ids",
            "type": "Array<string>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SyntheticsTriggerCITestsResponse.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SyntheticsTriggerCITestsResponse {
      let res = new SyntheticsTriggerCITestsResponse();

      res.locations = ObjectSerializer.deserialize(data.locations, "Array<SyntheticsTriggerCITestLocation>", "")

      res.results = ObjectSerializer.deserialize(data.results, "Array<SyntheticsTriggerCITestRunResult>", "")

      res.triggeredCheckIds = ObjectSerializer.deserialize(data.triggered_check_ids, "Array<string>", "")


      return res;
    }

    static serialize(data: SyntheticsTriggerCITestsResponse): {[key: string]: any} {
        let attributeTypes = SyntheticsTriggerCITestsResponse.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.locations = ObjectSerializer.serialize(data.locations, "Array<SyntheticsTriggerCITestLocation>", "")

        res.results = ObjectSerializer.serialize(data.results, "Array<SyntheticsTriggerCITestRunResult>", "")

        res.triggered_check_ids = ObjectSerializer.serialize(data.triggeredCheckIds, "Array<string>", "")

        return res
    }
    
    public constructor() {
    }
}



