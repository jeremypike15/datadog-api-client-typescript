/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageHostHour } from './UsageHostHour';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Host usage response.
*/

export class UsageHostsResponse {
    /**
    * An array of objects related to host usage.
    */
    'usage'?: Array<UsageHostHour>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "usage": {
            "baseName": "usage",
            "type": "Array<UsageHostHour>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return UsageHostsResponse.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): UsageHostsResponse {
      let res = new UsageHostsResponse();

      res.usage = ObjectSerializer.deserialize(data.usage, "Array<UsageHostHour>", "")


      return res;
    }

    static serialize(data: UsageHostsResponse): {[key: string]: any} {
        let attributeTypes = UsageHostsResponse.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.usage = ObjectSerializer.serialize(data.usage, "Array<UsageHostHour>", "")

        return res
    }
    
    public constructor() {
    }
}



