/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OrganizationAttributes } from "./OrganizationAttributes";
import { OrganizationsType } from "./OrganizationsType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Organization object.
 */

export class Organization {
  "attributes"?: OrganizationAttributes;
  /**
   * ID of the organization.
   */
  "id"?: string;
  "type": OrganizationsType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "OrganizationAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "OrganizationsType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return Organization.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): Organization {
    const res = new Organization();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "OrganizationAttributes",
      ""
    );

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'Organization' object"
      );
    }
    if (["orgs", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new Organization();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: Organization): { [key: string]: any } {
    const attributeTypes = Organization.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "OrganizationAttributes",
      ""
    );

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'Organization' object"
      );
    }
    if (["orgs", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
