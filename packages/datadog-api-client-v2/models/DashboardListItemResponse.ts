/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardType } from './DashboardType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* A dashboard within a list.
*/

export class DashboardListItemResponse {
    /**
    * ID of the dashboard.
    */
    'id': string;
    'type': DashboardType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "DashboardType",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return DashboardListItemResponse.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): DashboardListItemResponse {
      let res = new DashboardListItemResponse();

      if (data.id === undefined) {
          throw new TypeError("missing required attribute 'id' on 'DashboardListItemResponse' object");
      }
      res.id = ObjectSerializer.deserialize(data.id, "string", "")

      if (data.type === undefined) {
          throw new TypeError("missing required attribute 'type' on 'DashboardListItemResponse' object");
      }
      if (['custom_timeboard', 'custom_screenboard', 'integration_screenboard', 'integration_timeboard', 'host_timeboard', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }


      return res;
    }

    static serialize(data: DashboardListItemResponse): {[key: string]: any} {
        let attributeTypes = DashboardListItemResponse.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.id === undefined) {
            throw new TypeError("missing required attribute 'id' on 'DashboardListItemResponse' object");
        }
        res.id = ObjectSerializer.serialize(data.id, "string", "")

        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'DashboardListItemResponse' object");
        }
        if (['custom_timeboard', 'custom_screenboard', 'integration_screenboard', 'integration_timeboard', 'host_timeboard', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        return res
    }
    
    public constructor() {
    }
}



