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
 * The number of profiled hosts for each hour for a given organization.
 */

export class UsageProfilingHour {
  /**
   * Get average number of container agents for that hour.
   */
  "avgContainerAgentCount"?: number;
  /**
   * Contains the total number of profiled hosts reporting during a given hour.
   */
  "hostCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    avgContainerAgentCount: {
      baseName: "avg_container_agent_count",
      type: "number",
      format: "int64",
    },
    hostCount: {
      baseName: "host_count",
      type: "number",
      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",
      format: "date-time",
    },
  };

  static getAttributeTypeMap() {
    return UsageProfilingHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageProfilingHour {
    const res = new UsageProfilingHour();

    res.avgContainerAgentCount = ObjectSerializer.deserialize(
      data.avg_container_agent_count,
      "number",
      "int64"
    );

    res.hostCount = ObjectSerializer.deserialize(
      data.host_count,
      "number",
      "int64"
    );

    res.hour = ObjectSerializer.deserialize(data.hour, "Date", "date-time");

    return res;
  }

  static serialize(data: UsageProfilingHour): { [key: string]: any } {
    const attributeTypes = UsageProfilingHour.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.avg_container_agent_count = ObjectSerializer.serialize(
      data.avgContainerAgentCount,
      "number",
      "int64"
    );

    res.host_count = ObjectSerializer.serialize(
      data.hostCount,
      "number",
      "int64"
    );

    res.hour = ObjectSerializer.serialize(data.hour, "Date", "date-time");

    return res;
  }

  public constructor() {}
}
