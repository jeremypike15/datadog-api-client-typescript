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
 * Attributes of a partial application key.
 */

export class PartialApplicationKeyAttributes {
  /**
   * Creation date of the application key.
   */
  "createdAt"?: string;
  /**
   * The last four characters of the application key.
   */
  "last4"?: string;
  /**
   * Name of the application key.
   */
  "name"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    createdAt: {
      baseName: "created_at",
      type: "string",
      format: "",
    },
    last4: {
      baseName: "last4",
      type: "string",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return PartialApplicationKeyAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): PartialApplicationKeyAttributes {
    const res = new PartialApplicationKeyAttributes();

    res.createdAt = ObjectSerializer.deserialize(data.created_at, "string", "");

    res.last4 = ObjectSerializer.deserialize(data.last4, "string", "");

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    return res;
  }

  static serialize(data: PartialApplicationKeyAttributes): {
    [key: string]: any;
  } {
    const attributeTypes =
      PartialApplicationKeyAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.created_at = ObjectSerializer.serialize(data.createdAt, "string", "");

    res.last4 = ObjectSerializer.serialize(data.last4, "string", "");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    return res;
  }

  public constructor() {}
}
