/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricsAndMetricTagConfigurations } from './MetricsAndMetricTagConfigurations';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Response object that includes metrics and metric tag configurations.
*/

export class MetricsAndMetricTagConfigurationsResponse {
    /**
    * Array of metrics and metric tag configurations.
    */
    'data'?: Array<MetricsAndMetricTagConfigurations>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "data": {
            "baseName": "data",
            "type": "Array<MetricsAndMetricTagConfigurations>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return MetricsAndMetricTagConfigurationsResponse.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): MetricsAndMetricTagConfigurationsResponse {
      let res = new MetricsAndMetricTagConfigurationsResponse();

      res.data = ObjectSerializer.deserialize(data.data, "Array<MetricsAndMetricTagConfigurations>", "")


      return res;
    }

    static serialize(data: MetricsAndMetricTagConfigurationsResponse): {[key: string]: any} {
        let attributeTypes = MetricsAndMetricTagConfigurationsResponse.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.data = ObjectSerializer.serialize(data.data, "Array<MetricsAndMetricTagConfigurations>", "")

        return res
    }
    
    public constructor() {
    }
}



