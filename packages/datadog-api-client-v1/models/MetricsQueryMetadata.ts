/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricsQueryUnit } from "./MetricsQueryUnit";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object containing all metric names returned and their associated metadata.
 */

export class MetricsQueryMetadata {
  /**
   * Aggregation type.
   */
  "aggr"?: string;
  /**
   * Display name of the metric.
   */
  "displayName"?: string;
  /**
   * End of the time window, milliseconds since Unix epoch.
   */
  "end"?: number;
  /**
   * Metric expression.
   */
  "expression"?: string;
  /**
   * Number of seconds between data samples.
   */
  "interval"?: number;
  /**
   * Number of data samples.
   */
  "length"?: number;
  /**
   * Metric name.
   */
  "metric"?: string;
  /**
   * List of points of the time series.
   */
  "pointlist"?: Array<Array<number>>;
  /**
   * The index of the series' query within the request.
   */
  "queryIndex"?: number;
  /**
   * Metric scope, comma separated list of tags.
   */
  "scope"?: string;
  /**
   * Start of the time window, milliseconds since Unix epoch.
   */
  "start"?: number;
  /**
   * Unique tags identifying this series.
   */
  "tagSet"?: Array<string>;
  /**
   * Detailed information about the metric unit. First element describes the \"primary unit\" (for example, `bytes` in `bytes per second`), second describes the \"per unit\" (for example, `second` in `bytes per second`).
   */
  "unit"?: Array<MetricsQueryUnit>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    aggr: {
      baseName: "aggr",
      type: "string",
      format: "",
    },
    displayName: {
      baseName: "display_name",
      type: "string",
      format: "",
    },
    end: {
      baseName: "end",
      type: "number",
      format: "int64",
    },
    expression: {
      baseName: "expression",
      type: "string",
      format: "",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    length: {
      baseName: "length",
      type: "number",
      format: "int64",
    },
    metric: {
      baseName: "metric",
      type: "string",
      format: "",
    },
    pointlist: {
      baseName: "pointlist",
      type: "Array<Array<number>>",
      format: "double",
    },
    queryIndex: {
      baseName: "query_index",
      type: "number",
      format: "int64",
    },
    scope: {
      baseName: "scope",
      type: "string",
      format: "",
    },
    start: {
      baseName: "start",
      type: "number",
      format: "int64",
    },
    tagSet: {
      baseName: "tag_set",
      type: "Array<string>",
      format: "",
    },
    unit: {
      baseName: "unit",
      type: "Array<MetricsQueryUnit>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricsQueryMetadata.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): MetricsQueryMetadata {
    const res = new MetricsQueryMetadata();

    res.aggr = ObjectSerializer.deserialize(data.aggr, "string", "");

    res.displayName = ObjectSerializer.deserialize(
      data.display_name,
      "string",
      ""
    );

    res.end = ObjectSerializer.deserialize(data.end, "number", "int64");

    res.expression = ObjectSerializer.deserialize(
      data.expression,
      "string",
      ""
    );

    res.interval = ObjectSerializer.deserialize(
      data.interval,
      "number",
      "int64"
    );

    res.length = ObjectSerializer.deserialize(data.length, "number", "int64");

    res.metric = ObjectSerializer.deserialize(data.metric, "string", "");

    res.pointlist = ObjectSerializer.deserialize(
      data.pointlist,
      "Array<Array<number>>",
      "double"
    );

    res.queryIndex = ObjectSerializer.deserialize(
      data.query_index,
      "number",
      "int64"
    );

    res.scope = ObjectSerializer.deserialize(data.scope, "string", "");

    res.start = ObjectSerializer.deserialize(data.start, "number", "int64");

    res.tagSet = ObjectSerializer.deserialize(
      data.tag_set,
      "Array<string>",
      ""
    );

    res.unit = ObjectSerializer.deserialize(
      data.unit,
      "Array<MetricsQueryUnit>",
      ""
    );

    return res;
  }

  static serialize(data: MetricsQueryMetadata): { [key: string]: any } {
    const attributeTypes = MetricsQueryMetadata.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.aggr = ObjectSerializer.serialize(data.aggr, "string", "");

    res.display_name = ObjectSerializer.serialize(
      data.displayName,
      "string",
      ""
    );

    res.end = ObjectSerializer.serialize(data.end, "number", "int64");

    res.expression = ObjectSerializer.serialize(data.expression, "string", "");

    res.interval = ObjectSerializer.serialize(data.interval, "number", "int64");

    res.length = ObjectSerializer.serialize(data.length, "number", "int64");

    res.metric = ObjectSerializer.serialize(data.metric, "string", "");

    res.pointlist = ObjectSerializer.serialize(
      data.pointlist,
      "Array<Array<number>>",
      "double"
    );

    res.query_index = ObjectSerializer.serialize(
      data.queryIndex,
      "number",
      "int64"
    );

    res.scope = ObjectSerializer.serialize(data.scope, "string", "");

    res.start = ObjectSerializer.serialize(data.start, "number", "int64");

    res.tag_set = ObjectSerializer.serialize(data.tagSet, "Array<string>", "");

    res.unit = ObjectSerializer.serialize(
      data.unit,
      "Array<MetricsQueryUnit>",
      ""
    );

    return res;
  }

  public constructor() {}
}
