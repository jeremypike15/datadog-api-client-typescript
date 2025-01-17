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
 * Cloud Workload Security usage for a given organization for a given hour.
 */

export class UsageCWSHour {
  /**
   * The total number of Cloud Workload Security container hours from the start of the given hour’s month until the given hour.
   */
  "cwsContainerCount"?: number;
  /**
   * The total number of Cloud Workload Security host hours from the start of the given hour’s month until the given hour.
   */
  "cwsHostCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    cwsContainerCount: {
      baseName: "cws_container_count",
      type: "number",
      format: "int64",
    },
    cwsHostCount: {
      baseName: "cws_host_count",
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
    return UsageCWSHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageCWSHour {
    const res = new UsageCWSHour();

    res.cwsContainerCount = ObjectSerializer.deserialize(
      data.cws_container_count,
      "number",
      "int64"
    );

    res.cwsHostCount = ObjectSerializer.deserialize(
      data.cws_host_count,
      "number",
      "int64"
    );

    res.hour = ObjectSerializer.deserialize(data.hour, "Date", "date-time");

    return res;
  }

  static serialize(data: UsageCWSHour): { [key: string]: any } {
    const attributeTypes = UsageCWSHour.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.cws_container_count = ObjectSerializer.serialize(
      data.cwsContainerCount,
      "number",
      "int64"
    );

    res.cws_host_count = ObjectSerializer.serialize(
      data.cwsHostCount,
      "number",
      "int64"
    );

    res.hour = ObjectSerializer.serialize(data.hour, "Date", "date-time");

    return res;
  }

  public constructor() {}
}
