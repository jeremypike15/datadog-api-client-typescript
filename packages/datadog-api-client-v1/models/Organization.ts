/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OrganizationBilling } from "./OrganizationBilling";
import { OrganizationSettings } from "./OrganizationSettings";
import { OrganizationSubscription } from "./OrganizationSubscription";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Create, edit, and manage organizations.
 */

export class Organization {
  "billing"?: OrganizationBilling;
  /**
   * Date of the organization creation.
   */
  "created"?: string;
  /**
   * Description of the organization.
   */
  "description"?: string;
  /**
   * The name of the new child-organization, limited to 32 characters.
   */
  "name"?: string;
  /**
   * The `public_id` of the organization you are operating within.
   */
  "publicId"?: string;
  "settings"?: OrganizationSettings;
  "subscription"?: OrganizationSubscription;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    billing: {
      baseName: "billing",
      type: "OrganizationBilling",
      format: "",
    },
    created: {
      baseName: "created",
      type: "string",
      format: "",
    },
    description: {
      baseName: "description",
      type: "string",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
      format: "",
    },
    settings: {
      baseName: "settings",
      type: "OrganizationSettings",
      format: "",
    },
    subscription: {
      baseName: "subscription",
      type: "OrganizationSubscription",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return Organization.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): Organization {
    const res = new Organization();

    res.billing = ObjectSerializer.deserialize(
      data.billing,
      "OrganizationBilling",
      ""
    );

    res.created = ObjectSerializer.deserialize(data.created, "string", "");

    res.description = ObjectSerializer.deserialize(
      data.description,
      "string",
      ""
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.publicId = ObjectSerializer.deserialize(data.public_id, "string", "");

    res.settings = ObjectSerializer.deserialize(
      data.settings,
      "OrganizationSettings",
      ""
    );

    res.subscription = ObjectSerializer.deserialize(
      data.subscription,
      "OrganizationSubscription",
      ""
    );

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
    res.billing = ObjectSerializer.serialize(
      data.billing,
      "OrganizationBilling",
      ""
    );

    res.created = ObjectSerializer.serialize(data.created, "string", "");

    res.description = ObjectSerializer.serialize(
      data.description,
      "string",
      ""
    );

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.public_id = ObjectSerializer.serialize(data.publicId, "string", "");

    res.settings = ObjectSerializer.serialize(
      data.settings,
      "OrganizationSettings",
      ""
    );

    res.subscription = ObjectSerializer.serialize(
      data.subscription,
      "OrganizationSubscription",
      ""
    );

    return res;
  }

  public constructor() {}
}
