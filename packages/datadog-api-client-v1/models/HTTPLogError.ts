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
 * Invalid query performed.
 */

export class HTTPLogError {
  /**
   * Error code.
   */
  "code": number;
  /**
   * Error message.
   */
  "message": string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    code: {
      baseName: "code",
      type: "number",
      format: "int32",
    },
    message: {
      baseName: "message",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return HTTPLogError.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): HTTPLogError {
    const res = new HTTPLogError();

    if (data.code === undefined) {
      throw new TypeError(
        "missing required attribute 'code' on 'HTTPLogError' object"
      );
    }
    res.code = ObjectSerializer.deserialize(data.code, "number", "int32");

    if (data.message === undefined) {
      throw new TypeError(
        "missing required attribute 'message' on 'HTTPLogError' object"
      );
    }
    res.message = ObjectSerializer.deserialize(data.message, "string", "");

    return res;
  }

  static serialize(data: HTTPLogError): { [key: string]: any } {
    const attributeTypes = HTTPLogError.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.code === undefined) {
      throw new TypeError(
        "missing required attribute 'code' on 'HTTPLogError' object"
      );
    }
    res.code = ObjectSerializer.serialize(data.code, "number", "int32");

    if (data.message === undefined) {
      throw new TypeError(
        "missing required attribute 'message' on 'HTTPLogError' object"
      );
    }
    res.message = ObjectSerializer.serialize(data.message, "string", "");

    return res;
  }

  public constructor() {}
}
