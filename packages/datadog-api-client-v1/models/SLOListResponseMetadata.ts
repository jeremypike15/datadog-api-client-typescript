/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOListResponseMetadataPage } from "./SLOListResponseMetadataPage";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The metadata object containing additional information about the list of SLOs.
 */

export class SLOListResponseMetadata {
  "page"?: SLOListResponseMetadataPage;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    page: {
      baseName: "page",
      type: "SLOListResponseMetadataPage",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SLOListResponseMetadata.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SLOListResponseMetadata {
    const res = new SLOListResponseMetadata();

    res.page = ObjectSerializer.deserialize(
      data.page,
      "SLOListResponseMetadataPage",
      ""
    );

    return res;
  }

  static serialize(data: SLOListResponseMetadata): { [key: string]: any } {
    const attributeTypes = SLOListResponseMetadata.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.page = ObjectSerializer.serialize(
      data.page,
      "SLOListResponseMetadataPage",
      ""
    );

    return res;
  }

  public constructor() {}
}
