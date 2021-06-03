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
* The counts of monitor groups per different criteria.
*/

export class MonitorGroupSearchResponseCounts {
    /**
    * Search facets.
    */
    'status'?: Array<any>;
    /**
    * Search facets.
    */
    'type'?: Array<any>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "status": {
            "baseName": "status",
            "type": "Array<any>",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "Array<any>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return MonitorGroupSearchResponseCounts.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): MonitorGroupSearchResponseCounts {
      let res = new MonitorGroupSearchResponseCounts();

      res.status = ObjectSerializer.deserialize(data.status, "Array<any>", "")

      res.type = ObjectSerializer.deserialize(data.type, "Array<any>", "")


      return res;
    }

    static serialize(data: MonitorGroupSearchResponseCounts): {[key: string]: any} {
        let attributeTypes = MonitorGroupSearchResponseCounts.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.status = ObjectSerializer.serialize(data.status, "Array<any>", "")

        res.type = ObjectSerializer.serialize(data.type, "Array<any>", "")

        return res
    }
    
    public constructor() {
    }
}


