/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsRetentionSumUsage } from "./LogsRetentionSumUsage";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object containing a summary of indexed logs usage by retention period for a single month.
 */

export class LogsByRetentionMonthlyUsage {
  /**
   * The month for the usage.
   */
  "date"?: string;
  /**
   * Indexed logs usage for each active retention for the month.
   */
  "usage"?: Array<LogsRetentionSumUsage>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    date: {
      baseName: "date",
      type: "string",
      format: "datetime",
    },
    usage: {
      baseName: "usage",
      type: "Array<LogsRetentionSumUsage>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsByRetentionMonthlyUsage.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): LogsByRetentionMonthlyUsage {
    const res = new LogsByRetentionMonthlyUsage();

    res.date = ObjectSerializer.deserialize(data.date, "string", "datetime");

    res.usage = ObjectSerializer.deserialize(
      data.usage,
      "Array<LogsRetentionSumUsage>",
      ""
    );

    return res;
  }

  static serialize(data: LogsByRetentionMonthlyUsage): { [key: string]: any } {
    const attributeTypes = LogsByRetentionMonthlyUsage.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.date = ObjectSerializer.serialize(data.date, "string", "datetime");

    res.usage = ObjectSerializer.serialize(
      data.usage,
      "Array<LogsRetentionSumUsage>",
      ""
    );

    return res;
  }

  public constructor() {}
}
