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
 * Object containing a deleted Synthetic test ID with the associated deletion timestamp.
 */

export class SyntheticsDeletedTest {
  /**
   * Deletion timestamp of the Synthetic test ID.
   */
  "deletedAt"?: Date;
  /**
   * The Synthetic test ID deleted.
   */
  "publicId"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsDeletedTest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SyntheticsDeletedTest {
    const res = new SyntheticsDeletedTest();

    res.deletedAt = ObjectSerializer.deserialize(
      data.deleted_at,
      "Date",
      "date-time"
    );

    res.publicId = ObjectSerializer.deserialize(data.public_id, "string", "");

    return res;
  }

  static serialize(data: SyntheticsDeletedTest): { [key: string]: any } {
    const attributeTypes = SyntheticsDeletedTest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.deleted_at = ObjectSerializer.serialize(
      data.deletedAt,
      "Date",
      "date-time"
    );

    res.public_id = ObjectSerializer.serialize(data.publicId, "string", "");

    return res;
  }

  public constructor() {}
}
