/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageAttributionBody } from './UsageAttributionBody';
import { UsageAttributionMetadata } from './UsageAttributionMetadata';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Response containing the Usage Summary by tag(s).
*/

export class UsageAttributionResponse {
    'metadata'?: UsageAttributionMetadata;
    /**
    * Get Usage Summary by tag(s).
    */
    'usage'?: Array<UsageAttributionBody>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "metadata": {
            "baseName": "metadata",
            "type": "UsageAttributionMetadata",
            "format": ""
        },
        "usage": {
            "baseName": "usage",
            "type": "Array<UsageAttributionBody>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return UsageAttributionResponse.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): UsageAttributionResponse {
      let res = new UsageAttributionResponse();

      res.metadata = ObjectSerializer.deserialize(data.metadata, "UsageAttributionMetadata", "")

      res.usage = ObjectSerializer.deserialize(data.usage, "Array<UsageAttributionBody>", "")


      return res;
    }

    static serialize(data: UsageAttributionResponse): {[key: string]: any} {
        let attributeTypes = UsageAttributionResponse.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.metadata = ObjectSerializer.serialize(data.metadata, "UsageAttributionMetadata", "")

        res.usage = ObjectSerializer.serialize(data.usage, "Array<UsageAttributionBody>", "")

        return res
    }
    
    public constructor() {
    }
}



