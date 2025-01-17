/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityFilter } from "./SecurityFilter";
import { SecurityFilterMeta } from "./SecurityFilterMeta";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * All the available security filters objects.
 */

export class SecurityFiltersResponse {
  /**
   * A list of security filters objects.
   */
  "data"?: Array<SecurityFilter>;
  "meta"?: SecurityFilterMeta;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "Array<SecurityFilter>",
      format: "",
    },
    meta: {
      baseName: "meta",
      type: "SecurityFilterMeta",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SecurityFiltersResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SecurityFiltersResponse {
    const res = new SecurityFiltersResponse();

    res.data = ObjectSerializer.deserialize(
      data.data,
      "Array<SecurityFilter>",
      ""
    );

    res.meta = ObjectSerializer.deserialize(
      data.meta,
      "SecurityFilterMeta",
      ""
    );

    return res;
  }

  static serialize(data: SecurityFiltersResponse): { [key: string]: any } {
    const attributeTypes = SecurityFiltersResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "Array<SecurityFilter>",
      ""
    );

    res.meta = ObjectSerializer.serialize(data.meta, "SecurityFilterMeta", "");

    return res;
  }

  public constructor() {}
}
