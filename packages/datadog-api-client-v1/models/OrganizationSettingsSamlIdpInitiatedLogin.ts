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
 * Has one property enabled (boolean).
 */

export class OrganizationSettingsSamlIdpInitiatedLogin {
  /**
   * Whether SAML IdP initiated login is enabled, learn more in the [SAML documentation](https://docs.datadoghq.com/account_management/saml/#idp-initiated-login).
   */
  "enabled"?: boolean;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return OrganizationSettingsSamlIdpInitiatedLogin.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): OrganizationSettingsSamlIdpInitiatedLogin {
    const res = new OrganizationSettingsSamlIdpInitiatedLogin();

    res.enabled = ObjectSerializer.deserialize(data.enabled, "boolean", "");

    return res;
  }

  static serialize(data: OrganizationSettingsSamlIdpInitiatedLogin): {
    [key: string]: any;
  } {
    const attributeTypes =
      OrganizationSettingsSamlIdpInitiatedLogin.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.enabled = ObjectSerializer.serialize(data.enabled, "boolean", "");

    return res;
  }

  public constructor() {}
}
