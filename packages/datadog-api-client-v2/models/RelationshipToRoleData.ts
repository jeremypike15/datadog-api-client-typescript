/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RolesType } from "./RolesType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Relationship to role object.
 */

export class RelationshipToRoleData {
  /**
   * ID of the role.
   */
  "id"?: string;
  "type"?: RolesType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "RolesType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return RelationshipToRoleData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): RelationshipToRoleData {
    const res = new RelationshipToRoleData();

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    if (["roles", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new RelationshipToRoleData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: RelationshipToRoleData): { [key: string]: any } {
    const attributeTypes = RelationshipToRoleData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.id = ObjectSerializer.serialize(data.id, "string", "");

    if (["roles", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
