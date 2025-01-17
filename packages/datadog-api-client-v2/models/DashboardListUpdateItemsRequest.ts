/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardListItemRequest } from "./DashboardListItemRequest";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Request containing the list of dashboards to update to.
 */

export class DashboardListUpdateItemsRequest {
  /**
   * List of dashboards to update the dashboard list to.
   */
  "dashboards"?: Array<DashboardListItemRequest>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    dashboards: {
      baseName: "dashboards",
      type: "Array<DashboardListItemRequest>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return DashboardListUpdateItemsRequest.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): DashboardListUpdateItemsRequest {
    const res = new DashboardListUpdateItemsRequest();

    res.dashboards = ObjectSerializer.deserialize(
      data.dashboards,
      "Array<DashboardListItemRequest>",
      ""
    );

    return res;
  }

  static serialize(data: DashboardListUpdateItemsRequest): {
    [key: string]: any;
  } {
    const attributeTypes =
      DashboardListUpdateItemsRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.dashboards = ObjectSerializer.serialize(
      data.dashboards,
      "Array<DashboardListItemRequest>",
      ""
    );

    return res;
  }

  public constructor() {}
}
