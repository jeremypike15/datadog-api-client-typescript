/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardListItemRequest } from './DashboardListItemRequest';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Request containing a list of dashboards to delete.
*/

export class DashboardListDeleteItemsRequest {
    /**
    * List of dashboards to delete from the dashboard list.
    */
    'dashboards'?: Array<DashboardListItemRequest>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "dashboards": {
            "baseName": "dashboards",
            "type": "Array<DashboardListItemRequest>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return DashboardListDeleteItemsRequest.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): DashboardListDeleteItemsRequest {
      let res = new DashboardListDeleteItemsRequest();

      res.dashboards = ObjectSerializer.deserialize(data.dashboards, "Array<DashboardListItemRequest>", "")


      return res;
    }

    static serialize(data: DashboardListDeleteItemsRequest): {[key: string]: any} {
        let attributeTypes = DashboardListDeleteItemsRequest.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.dashboards = ObjectSerializer.serialize(data.dashboards, "Array<DashboardListItemRequest>", "")

        return res
    }
    
    public constructor() {
    }
}



