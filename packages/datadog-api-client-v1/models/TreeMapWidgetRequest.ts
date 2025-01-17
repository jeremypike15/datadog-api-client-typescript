/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * An updated treemap widget.
 */

export class TreeMapWidgetRequest {
  /**
   * The widget metrics query.
   */
  "q"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    q: {
      baseName: "q",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return TreeMapWidgetRequest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): TreeMapWidgetRequest {
    const res = new TreeMapWidgetRequest();

    res.q = ObjectSerializer.deserialize(data.q, "string", "");

    return res;
  }

  static serialize(data: TreeMapWidgetRequest): { [key: string]: any } {
    const attributeTypes = TreeMapWidgetRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.q = ObjectSerializer.serialize(data.q, "string", "");

    return res;
  }

  public constructor() {}
}
