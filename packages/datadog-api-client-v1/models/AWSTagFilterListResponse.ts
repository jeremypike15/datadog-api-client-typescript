/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AWSTagFilter } from "./AWSTagFilter";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * An array of tag filter rules by `namespace` and tag filter string.
 */

export class AWSTagFilterListResponse {
  /**
   * An array of tag filters.
   */
  "filters"?: Array<AWSTagFilter>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    filters: {
      baseName: "filters",
      type: "Array<AWSTagFilter>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return AWSTagFilterListResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): AWSTagFilterListResponse {
    const res = new AWSTagFilterListResponse();

    res.filters = ObjectSerializer.deserialize(
      data.filters,
      "Array<AWSTagFilter>",
      ""
    );

    return res;
  }

  static serialize(data: AWSTagFilterListResponse): { [key: string]: any } {
    const attributeTypes = AWSTagFilterListResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.filters = ObjectSerializer.serialize(
      data.filters,
      "Array<AWSTagFilter>",
      ""
    );

    return res;
  }

  public constructor() {}
}
