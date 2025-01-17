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
 * Audit logs usage for a given organization for a given hour.
 */

export class UsageAuditLogsHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * The total number of audit logs lines indexed during a given hour.
   */
  "linesIndexed"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
    linesIndexed: {
      baseName: "lines_indexed",
      type: "number",
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageAuditLogsHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageAuditLogsHour {
    const res = new UsageAuditLogsHour();

    res.hour = ObjectSerializer.deserialize(data.hour, "Date", "date-time");

    res.linesIndexed = ObjectSerializer.deserialize(
      data.lines_indexed,
      "number",
      "int64"
    );

    return res;
  }

  static serialize(data: UsageAuditLogsHour): { [key: string]: any } {
    const attributeTypes = UsageAuditLogsHour.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.hour = ObjectSerializer.serialize(data.hour, "Date", "date-time");

    res.lines_indexed = ObjectSerializer.serialize(
      data.linesIndexed,
      "number",
      "int64"
    );

    return res;
  }

  public constructor() {}
}
