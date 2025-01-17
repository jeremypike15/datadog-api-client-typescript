/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOHistoryMetricsSeries } from "./SLOHistoryMetricsSeries";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A `metric` based SLO history response.  This is not included in responses for `monitor` based SLOs.
 */

export class SLOHistoryMetrics {
  "denominator": SLOHistoryMetricsSeries;
  /**
   * The aggregated query interval for the series data. It's implicit based on the query time window.
   */
  "interval": number;
  /**
   * Optional message if there are specific query issues/warnings.
   */
  "message"?: string;
  "numerator": SLOHistoryMetricsSeries;
  /**
   * The combined numerator and denominator query CSV.
   */
  "query": string;
  /**
   * The series result type. This mimics `batch_query` response type.
   */
  "resType": string;
  /**
   * The series response version type. This mimics `batch_query` response type.
   */
  "respVersion": number;
  /**
   * An array of query timestamps in EPOCH milliseconds
   */
  "times": Array<number>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    denominator: {
      baseName: "denominator",
      type: "SLOHistoryMetricsSeries",
      format: "",
    },
    interval: {
      baseName: "interval",
      type: "number",
      format: "int64",
    },
    message: {
      baseName: "message",
      type: "string",
      format: "",
    },
    numerator: {
      baseName: "numerator",
      type: "SLOHistoryMetricsSeries",
      format: "",
    },
    query: {
      baseName: "query",
      type: "string",
      format: "",
    },
    resType: {
      baseName: "res_type",
      type: "string",
      format: "",
    },
    respVersion: {
      baseName: "resp_version",
      type: "number",
      format: "int64",
    },
    times: {
      baseName: "times",
      type: "Array<number>",
      format: "double",
    },
  };

  static getAttributeTypeMap() {
    return SLOHistoryMetrics.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SLOHistoryMetrics {
    const res = new SLOHistoryMetrics();

    if (data.denominator === undefined) {
      throw new TypeError(
        "missing required attribute 'denominator' on 'SLOHistoryMetrics' object"
      );
    }
    res.denominator = ObjectSerializer.deserialize(
      data.denominator,
      "SLOHistoryMetricsSeries",
      ""
    );

    if (data.interval === undefined) {
      throw new TypeError(
        "missing required attribute 'interval' on 'SLOHistoryMetrics' object"
      );
    }
    res.interval = ObjectSerializer.deserialize(
      data.interval,
      "number",
      "int64"
    );

    res.message = ObjectSerializer.deserialize(data.message, "string", "");

    if (data.numerator === undefined) {
      throw new TypeError(
        "missing required attribute 'numerator' on 'SLOHistoryMetrics' object"
      );
    }
    res.numerator = ObjectSerializer.deserialize(
      data.numerator,
      "SLOHistoryMetricsSeries",
      ""
    );

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'SLOHistoryMetrics' object"
      );
    }
    res.query = ObjectSerializer.deserialize(data.query, "string", "");

    if (data.res_type === undefined) {
      throw new TypeError(
        "missing required attribute 'res_type' on 'SLOHistoryMetrics' object"
      );
    }
    res.resType = ObjectSerializer.deserialize(data.res_type, "string", "");

    if (data.resp_version === undefined) {
      throw new TypeError(
        "missing required attribute 'resp_version' on 'SLOHistoryMetrics' object"
      );
    }
    res.respVersion = ObjectSerializer.deserialize(
      data.resp_version,
      "number",
      "int64"
    );

    if (data.times === undefined) {
      throw new TypeError(
        "missing required attribute 'times' on 'SLOHistoryMetrics' object"
      );
    }
    res.times = ObjectSerializer.deserialize(
      data.times,
      "Array<number>",
      "double"
    );

    return res;
  }

  static serialize(data: SLOHistoryMetrics): { [key: string]: any } {
    const attributeTypes = SLOHistoryMetrics.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.denominator === undefined) {
      throw new TypeError(
        "missing required attribute 'denominator' on 'SLOHistoryMetrics' object"
      );
    }
    res.denominator = ObjectSerializer.serialize(
      data.denominator,
      "SLOHistoryMetricsSeries",
      ""
    );

    if (data.interval === undefined) {
      throw new TypeError(
        "missing required attribute 'interval' on 'SLOHistoryMetrics' object"
      );
    }
    res.interval = ObjectSerializer.serialize(data.interval, "number", "int64");

    res.message = ObjectSerializer.serialize(data.message, "string", "");

    if (data.numerator === undefined) {
      throw new TypeError(
        "missing required attribute 'numerator' on 'SLOHistoryMetrics' object"
      );
    }
    res.numerator = ObjectSerializer.serialize(
      data.numerator,
      "SLOHistoryMetricsSeries",
      ""
    );

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'SLOHistoryMetrics' object"
      );
    }
    res.query = ObjectSerializer.serialize(data.query, "string", "");

    if (data.resType === undefined) {
      throw new TypeError(
        "missing required attribute 'res_type' on 'SLOHistoryMetrics' object"
      );
    }
    res.res_type = ObjectSerializer.serialize(data.resType, "string", "");

    if (data.respVersion === undefined) {
      throw new TypeError(
        "missing required attribute 'resp_version' on 'SLOHistoryMetrics' object"
      );
    }
    res.resp_version = ObjectSerializer.serialize(
      data.respVersion,
      "number",
      "int64"
    );

    if (data.times === undefined) {
      throw new TypeError(
        "missing required attribute 'times' on 'SLOHistoryMetrics' object"
      );
    }
    res.times = ObjectSerializer.serialize(
      data.times,
      "Array<number>",
      "double"
    );

    return res;
  }

  public constructor() {}
}
