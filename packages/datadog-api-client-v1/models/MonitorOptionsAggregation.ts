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
 * Type of aggregation performed in the monitor query.
 */

export class MonitorOptionsAggregation {
  /**
   * Group to break down the monitor on.
   */
  "groupBy"?: string;
  /**
   * Metric name used in the monitor.
   */
  "metric"?: string;
  /**
   * Metric type used in the monitor.
   */
  "type"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    groupBy: {
      baseName: "group_by",
      type: "string",
      format: "",
    },
    metric: {
      baseName: "metric",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MonitorOptionsAggregation.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): MonitorOptionsAggregation {
    const res = new MonitorOptionsAggregation();

    res.groupBy = ObjectSerializer.deserialize(data.group_by, "string", "");

    res.metric = ObjectSerializer.deserialize(data.metric, "string", "");

    res.type = ObjectSerializer.deserialize(data.type, "string", "");

    return res;
  }

  static serialize(data: MonitorOptionsAggregation): { [key: string]: any } {
    const attributeTypes = MonitorOptionsAggregation.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.group_by = ObjectSerializer.serialize(data.groupBy, "string", "");

    res.metric = ObjectSerializer.serialize(data.metric, "string", "");

    res.type = ObjectSerializer.serialize(data.type, "string", "");

    return res;
  }

  public constructor() {}
}
