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
 * An object describing the error with error type and error message.
 */

export class SLOHistoryResponseErrorWithType {
  /**
   * A message with more details about the error.
   */
  "errorMessage": string;
  /**
   * Type of the error.
   */
  "errorType": string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    errorMessage: {
      baseName: "error_message",
      type: "string",
      format: "",
    },
    errorType: {
      baseName: "error_type",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SLOHistoryResponseErrorWithType.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SLOHistoryResponseErrorWithType {
    const res = new SLOHistoryResponseErrorWithType();

    if (data.error_message === undefined) {
      throw new TypeError(
        "missing required attribute 'error_message' on 'SLOHistoryResponseErrorWithType' object"
      );
    }
    res.errorMessage = ObjectSerializer.deserialize(
      data.error_message,
      "string",
      ""
    );

    if (data.error_type === undefined) {
      throw new TypeError(
        "missing required attribute 'error_type' on 'SLOHistoryResponseErrorWithType' object"
      );
    }
    res.errorType = ObjectSerializer.deserialize(data.error_type, "string", "");

    return res;
  }

  static serialize(data: SLOHistoryResponseErrorWithType): {
    [key: string]: any;
  } {
    const attributeTypes =
      SLOHistoryResponseErrorWithType.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.errorMessage === undefined) {
      throw new TypeError(
        "missing required attribute 'error_message' on 'SLOHistoryResponseErrorWithType' object"
      );
    }
    res.error_message = ObjectSerializer.serialize(
      data.errorMessage,
      "string",
      ""
    );

    if (data.errorType === undefined) {
      throw new TypeError(
        "missing required attribute 'error_type' on 'SLOHistoryResponseErrorWithType' object"
      );
    }
    res.error_type = ObjectSerializer.serialize(data.errorType, "string", "");

    return res;
  }

  public constructor() {}
}
