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
 * Represent validation endpoint responses.
 */

export class AuthenticationValidationResponse {
  /**
   * Return `true` if the authentication response is valid.
   */
  "valid"?: boolean;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    valid: {
      baseName: "valid",
      type: "boolean",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return AuthenticationValidationResponse.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): AuthenticationValidationResponse {
    const res = new AuthenticationValidationResponse();

    res.valid = ObjectSerializer.deserialize(data.valid, "boolean", "");

    return res;
  }

  static serialize(data: AuthenticationValidationResponse): {
    [key: string]: any;
  } {
    const attributeTypes =
      AuthenticationValidationResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.valid = ObjectSerializer.serialize(data.valid, "boolean", "");

    return res;
  }

  public constructor() {}
}
