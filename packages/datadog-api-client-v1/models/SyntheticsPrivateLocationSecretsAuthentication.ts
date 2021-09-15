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
 * Authentication part of the secrets.
 */

export class SyntheticsPrivateLocationSecretsAuthentication {
  /**
   * Access key for the private location.
   */
  "id"?: string;
  /**
   * Secret access key for the private location.
   */
  "key"?: string;

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
    key: {
      baseName: "key",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsPrivateLocationSecretsAuthentication.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsPrivateLocationSecretsAuthentication {
    const res = new SyntheticsPrivateLocationSecretsAuthentication();

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    res.key = ObjectSerializer.deserialize(data.key, "string", "");

    return res;
  }

  static serialize(data: SyntheticsPrivateLocationSecretsAuthentication): {
    [key: string]: any;
  } {
    const attributeTypes =
      SyntheticsPrivateLocationSecretsAuthentication.getAttributeTypeMap();
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

    res.key = ObjectSerializer.serialize(data.key, "string", "");

    return res;
  }

  public constructor() {}
}
