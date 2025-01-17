/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RoleCreateResponseData } from "./RoleCreateResponseData";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response containing information about a created role.
 */

export class RoleCreateResponse {
  "data"?: RoleCreateResponseData;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "RoleCreateResponseData",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return RoleCreateResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): RoleCreateResponse {
    const res = new RoleCreateResponse();

    res.data = ObjectSerializer.deserialize(
      data.data,
      "RoleCreateResponseData",
      ""
    );

    return res;
  }

  static serialize(data: RoleCreateResponse): { [key: string]: any } {
    const attributeTypes = RoleCreateResponse.getAttributeTypeMap();
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
      "RoleCreateResponseData",
      ""
    );

    return res;
  }

  public constructor() {}
}
