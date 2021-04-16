/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Search result.
*/

export class MetricSearchResponseResults {
    /**
    * List of metrics that match the search query.
    */
    'metrics'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "metrics": {
            "baseName": "metrics",
            "type": "Array<string>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return MetricSearchResponseResults.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): MetricSearchResponseResults {
      let res = new MetricSearchResponseResults();

      res.metrics = ObjectSerializer.deserialize(data.metrics, "Array<string>", "")


      return res;
    }

    static serialize(data: MetricSearchResponseResults): {[key: string]: any} {
        let attributeTypes = MetricSearchResponseResults.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.metrics = ObjectSerializer.serialize(data.metrics, "Array<string>", "")

        return res
    }
    
    public constructor() {
    }
}



