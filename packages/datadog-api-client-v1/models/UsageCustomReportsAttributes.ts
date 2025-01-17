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
 * The response containing attributes for custom reports.
 */

export class UsageCustomReportsAttributes {
  /**
   * The date the specified custom report was computed.
   */
  "computedOn"?: string;
  /**
   * The ending date of custom report.
   */
  "endDate"?: string;
  /**
   * size
   */
  "size"?: number;
  /**
   * The starting date of custom report.
   */
  "startDate"?: string;
  /**
   * A list of tags to apply to custom reports.
   */
  "tags"?: Array<string>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    computedOn: {
      baseName: "computed_on",
      type: "string",
      format: "",
    },
    endDate: {
      baseName: "end_date",
      type: "string",
      format: "",
    },
    size: {
      baseName: "size",
      type: "number",
      format: "int64",
    },
    startDate: {
      baseName: "start_date",
      type: "string",
      format: "",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageCustomReportsAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): UsageCustomReportsAttributes {
    const res = new UsageCustomReportsAttributes();

    res.computedOn = ObjectSerializer.deserialize(
      data.computed_on,
      "string",
      ""
    );

    res.endDate = ObjectSerializer.deserialize(data.end_date, "string", "");

    res.size = ObjectSerializer.deserialize(data.size, "number", "int64");

    res.startDate = ObjectSerializer.deserialize(data.start_date, "string", "");

    res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "");

    return res;
  }

  static serialize(data: UsageCustomReportsAttributes): { [key: string]: any } {
    const attributeTypes = UsageCustomReportsAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.computed_on = ObjectSerializer.serialize(data.computedOn, "string", "");

    res.end_date = ObjectSerializer.serialize(data.endDate, "string", "");

    res.size = ObjectSerializer.serialize(data.size, "number", "int64");

    res.start_date = ObjectSerializer.serialize(data.startDate, "string", "");

    res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "");

    return res;
  }

  public constructor() {}
}
