/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationKeyUpdateData } from './ApplicationKeyUpdateData';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Request used to update an application key.
*/

export class ApplicationKeyUpdateRequest {
    'data': ApplicationKeyUpdateData;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "data": {
            "baseName": "data",
            "type": "ApplicationKeyUpdateData",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return ApplicationKeyUpdateRequest.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): ApplicationKeyUpdateRequest {
      let res = new ApplicationKeyUpdateRequest();

      if (data.data === undefined) {
          throw new TypeError("missing required attribute 'data' on 'ApplicationKeyUpdateRequest' object");
      }
      res.data = ObjectSerializer.deserialize(data.data, "ApplicationKeyUpdateData", "")


      return res;
    }

    static serialize(data: ApplicationKeyUpdateRequest): {[key: string]: any} {
        let attributeTypes = ApplicationKeyUpdateRequest.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.data === undefined) {
            throw new TypeError("missing required attribute 'data' on 'ApplicationKeyUpdateRequest' object");
        }
        res.data = ObjectSerializer.serialize(data.data, "ApplicationKeyUpdateData", "")

        return res
    }
    
    public constructor() {
    }
}



