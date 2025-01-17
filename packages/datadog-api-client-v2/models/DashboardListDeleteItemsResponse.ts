/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardListItemResponse } from "./DashboardListItemResponse";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response containing a list of deleted dashboards.
 */

export class DashboardListDeleteItemsResponse {
  /**
   * List of dashboards deleted from the dashboard list.
   */
  "deletedDashboardsFromList"?: Array<DashboardListItemResponse>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    deletedDashboardsFromList: {
      baseName: "deleted_dashboards_from_list",
      type: "Array<DashboardListItemResponse>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return DashboardListDeleteItemsResponse.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): DashboardListDeleteItemsResponse {
    const res = new DashboardListDeleteItemsResponse();

    res.deletedDashboardsFromList = ObjectSerializer.deserialize(
      data.deleted_dashboards_from_list,
      "Array<DashboardListItemResponse>",
      ""
    );

    return res;
  }

  static serialize(data: DashboardListDeleteItemsResponse): {
    [key: string]: any;
  } {
    const attributeTypes =
      DashboardListDeleteItemsResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.deleted_dashboards_from_list = ObjectSerializer.serialize(
      data.deletedDashboardsFromList,
      "Array<DashboardListItemResponse>",
      ""
    );

    return res;
  }

  public constructor() {}
}
