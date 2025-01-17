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
 * Attributes of a full application key.
 */

export class FullApplicationKeyAttributes {
  /**
   * Creation date of the application key.
   */
  "createdAt"?: string;
  /**
   * The application key.
   */
  "key"?: string;
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
    key: {
      baseName: "key",
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
    return FullApplicationKeyAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): FullApplicationKeyAttributes {
    const res = new FullApplicationKeyAttributes();

    res.createdAt = ObjectSerializer.deserialize(data.created_at, "string", "");

    res.key = ObjectSerializer.deserialize(data.key, "string", "");

    res.last4 = ObjectSerializer.deserialize(data.last4, "string", "");

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    return res;
  }

  static serialize(data: FullApplicationKeyAttributes): { [key: string]: any } {
    const attributeTypes = FullApplicationKeyAttributes.getAttributeTypeMap();
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

    res.key = ObjectSerializer.serialize(data.key, "string", "");

    res.last4 = ObjectSerializer.serialize(data.last4, "string", "");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    return res;
  }

  public constructor() {}
}
