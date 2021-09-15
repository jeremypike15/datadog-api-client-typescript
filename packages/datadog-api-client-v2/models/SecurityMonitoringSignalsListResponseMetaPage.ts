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
 * Paging attributes.
 */

export class SecurityMonitoringSignalsListResponseMetaPage {
  /**
   * The cursor used to get the next results, if any. To make the next request, use the same parameters with the addition of the `page[cursor]`.
   */
  "after"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    after: {
      baseName: "after",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SecurityMonitoringSignalsListResponseMetaPage.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SecurityMonitoringSignalsListResponseMetaPage {
    const res = new SecurityMonitoringSignalsListResponseMetaPage();

    res.after = ObjectSerializer.deserialize(data.after, "string", "");

    return res;
  }

  static serialize(data: SecurityMonitoringSignalsListResponseMetaPage): {
    [key: string]: any;
  } {
    const attributeTypes =
      SecurityMonitoringSignalsListResponseMetaPage.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.after = ObjectSerializer.serialize(data.after, "string", "");

    return res;
  }

  public constructor() {}
}
