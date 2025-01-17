/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityFilterType } from "./SecurityFilterType";
import { SecurityFilterUpdateAttributes } from "./SecurityFilterUpdateAttributes";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The new security filter properties.
 */

export class SecurityFilterUpdateData {
  "attributes": SecurityFilterUpdateAttributes;
  "type": SecurityFilterType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "SecurityFilterUpdateAttributes",
      format: "",
    },
    type: {
      baseName: "type",
      type: "SecurityFilterType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SecurityFilterUpdateData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SecurityFilterUpdateData {
    const res = new SecurityFilterUpdateData();

    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'SecurityFilterUpdateData' object"
      );
    }
    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "SecurityFilterUpdateAttributes",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SecurityFilterUpdateData' object"
      );
    }
    if (["security_filters", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new SecurityFilterUpdateData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: SecurityFilterUpdateData): { [key: string]: any } {
    const attributeTypes = SecurityFilterUpdateData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'SecurityFilterUpdateData' object"
      );
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "SecurityFilterUpdateAttributes",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SecurityFilterUpdateData' object"
      );
    }
    if (["security_filters", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
