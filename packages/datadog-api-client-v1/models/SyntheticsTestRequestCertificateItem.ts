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
 * Define a request certificate.
 */

export class SyntheticsTestRequestCertificateItem {
  /**
   * Content of the certificate or key.
   */
  "content"?: string;
  /**
   * File name for the certificate or key.
   */
  "filename"?: string;
  /**
   * Date of update of the certificate or key, ISO format.
   */
  "updatedAt"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    content: {
      baseName: "content",
      type: "string",
      format: "",
    },
    filename: {
      baseName: "filename",
      type: "string",
      format: "",
    },
    updatedAt: {
      baseName: "updatedAt",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsTestRequestCertificateItem.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsTestRequestCertificateItem {
    const res = new SyntheticsTestRequestCertificateItem();

    res.content = ObjectSerializer.deserialize(data.content, "string", "");

    res.filename = ObjectSerializer.deserialize(data.filename, "string", "");

    res.updatedAt = ObjectSerializer.deserialize(data.updatedAt, "string", "");

    return res;
  }

  static serialize(data: SyntheticsTestRequestCertificateItem): {
    [key: string]: any;
  } {
    const attributeTypes =
      SyntheticsTestRequestCertificateItem.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.content = ObjectSerializer.serialize(data.content, "string", "");

    res.filename = ObjectSerializer.serialize(data.filename, "string", "");

    res.updatedAt = ObjectSerializer.serialize(data.updatedAt, "string", "");

    return res;
  }

  public constructor() {}
}
