/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { Role } from "./Role";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response containing information about multiple roles.
 */

export class RolesResponse {
  /**
   * Array of returned roles.
   */
  "data"?: Array<Role>;
  "meta"?: ResponseMetaAttributes;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "Array<Role>",
      format: "",
    },
    meta: {
      baseName: "meta",
      type: "ResponseMetaAttributes",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return RolesResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): RolesResponse {
    const res = new RolesResponse();

    res.data = ObjectSerializer.deserialize(data.data, "Array<Role>", "");

    res.meta = ObjectSerializer.deserialize(
      data.meta,
      "ResponseMetaAttributes",
      ""
    );

    return res;
  }

  static serialize(data: RolesResponse): { [key: string]: any } {
    const attributeTypes = RolesResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.data = ObjectSerializer.serialize(data.data, "Array<Role>", "");

    res.meta = ObjectSerializer.serialize(
      data.meta,
      "ResponseMetaAttributes",
      ""
    );

    return res;
  }

  public constructor() {}
}
