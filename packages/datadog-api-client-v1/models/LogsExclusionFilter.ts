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
 * Exclusion filter is defined by a query, a sampling rule, and a active/inactive toggle.
 */

export class LogsExclusionFilter {
  /**
   * Default query is `*`, meaning all logs flowing in the index would be excluded. Scope down exclusion filter to only a subset of logs with a log query.
   */
  "query"?: string;
  /**
   * Sample rate to apply to logs going through this exclusion filter, a value of 1.0 excludes all logs matching the query.
   */
  "sampleRate": number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    query: {
      baseName: "query",
      type: "string",
      format: "",
    },
    sampleRate: {
      baseName: "sample_rate",
      type: "number",
      format: "double",
    },
  };

  static getAttributeTypeMap() {
    return LogsExclusionFilter.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsExclusionFilter {
    const res = new LogsExclusionFilter();

    res.query = ObjectSerializer.deserialize(data.query, "string", "");

    if (data.sample_rate === undefined) {
      throw new TypeError(
        "missing required attribute 'sample_rate' on 'LogsExclusionFilter' object"
      );
    }
    res.sampleRate = ObjectSerializer.deserialize(
      data.sample_rate,
      "number",
      "double"
    );

    return res;
  }

  static serialize(data: LogsExclusionFilter): { [key: string]: any } {
    const attributeTypes = LogsExclusionFilter.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.query = ObjectSerializer.serialize(data.query, "string", "");

    if (data.sampleRate === undefined) {
      throw new TypeError(
        "missing required attribute 'sample_rate' on 'LogsExclusionFilter' object"
      );
    }
    res.sample_rate = ObjectSerializer.serialize(
      data.sampleRate,
      "number",
      "double"
    );

    return res;
  }

  public constructor() {}
}
