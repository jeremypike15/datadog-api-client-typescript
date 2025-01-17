/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsAPIError } from "./LogsAPIError";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response returned by the Logs API when errors occur.
 */

export class LogsAPIErrorResponse {
  "error"?: LogsAPIError;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    error: {
      baseName: "error",
      type: "LogsAPIError",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsAPIErrorResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsAPIErrorResponse {
    const res = new LogsAPIErrorResponse();

    res.error = ObjectSerializer.deserialize(data.error, "LogsAPIError", "");

    return res;
  }

  static serialize(data: LogsAPIErrorResponse): { [key: string]: any } {
    const attributeTypes = LogsAPIErrorResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.error = ObjectSerializer.serialize(data.error, "LogsAPIError", "");

    return res;
  }

  public constructor() {}
}
