/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionApmResourceStatName } from "./FormulaAndFunctionApmResourceStatName";
import { FormulaAndFunctionApmResourceStatsDataSource } from "./FormulaAndFunctionApmResourceStatsDataSource";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * APM resource stats query using formulas and functions.
 */

export class FormulaAndFunctionApmResourceStatsQueryDefinition {
  "dataSource": FormulaAndFunctionApmResourceStatsDataSource;
  /**
   * APM environment.
   */
  "env": string;
  /**
   * Array of fields to group results by.
   */
  "groupBy"?: Array<string>;
  /**
   * Name of this query to use in formulas.
   */
  "name": string;
  /**
   * Name of operation on service.
   */
  "operationName"?: string;
  /**
   * Name of the second primary tag used within APM. Required when `primary_tag_value` is specified. See https://docs.datadoghq.com/tracing/guide/setting_primary_tags_to_scope/#add-a-second-primary-tag-in-datadog
   */
  "primaryTagName"?: string;
  /**
   * Value of the second primary tag by which to filter APM data. `primary_tag_name` must also be specified.
   */
  "primaryTagValue"?: string;
  /**
   * APM resource name.
   */
  "resourceName"?: string;
  /**
   * APM service name.
   */
  "service": string;
  "stat": FormulaAndFunctionApmResourceStatName;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionApmResourceStatsDataSource",
      format: "",
    },
    env: {
      baseName: "env",
      type: "string",
      format: "",
    },
    groupBy: {
      baseName: "group_by",
      type: "Array<string>",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    operationName: {
      baseName: "operation_name",
      type: "string",
      format: "",
    },
    primaryTagName: {
      baseName: "primary_tag_name",
      type: "string",
      format: "",
    },
    primaryTagValue: {
      baseName: "primary_tag_value",
      type: "string",
      format: "",
    },
    resourceName: {
      baseName: "resource_name",
      type: "string",
      format: "",
    },
    service: {
      baseName: "service",
      type: "string",
      format: "",
    },
    stat: {
      baseName: "stat",
      type: "FormulaAndFunctionApmResourceStatName",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return FormulaAndFunctionApmResourceStatsQueryDefinition.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): FormulaAndFunctionApmResourceStatsQueryDefinition {
    const res = new FormulaAndFunctionApmResourceStatsQueryDefinition();

    if (data.data_source === undefined) {
      throw new TypeError(
        "missing required attribute 'data_source' on 'FormulaAndFunctionApmResourceStatsQueryDefinition' object"
      );
    }
    if (["apm_resource_stats", undefined].includes(data.data_source)) {
      res.dataSource = data.data_source;
    } else {
      const raw = new FormulaAndFunctionApmResourceStatsQueryDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    if (data.env === undefined) {
      throw new TypeError(
        "missing required attribute 'env' on 'FormulaAndFunctionApmResourceStatsQueryDefinition' object"
      );
    }
    res.env = ObjectSerializer.deserialize(data.env, "string", "");

    res.groupBy = ObjectSerializer.deserialize(
      data.group_by,
      "Array<string>",
      ""
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'FormulaAndFunctionApmResourceStatsQueryDefinition' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.operationName = ObjectSerializer.deserialize(
      data.operation_name,
      "string",
      ""
    );

    res.primaryTagName = ObjectSerializer.deserialize(
      data.primary_tag_name,
      "string",
      ""
    );

    res.primaryTagValue = ObjectSerializer.deserialize(
      data.primary_tag_value,
      "string",
      ""
    );

    res.resourceName = ObjectSerializer.deserialize(
      data.resource_name,
      "string",
      ""
    );

    if (data.service === undefined) {
      throw new TypeError(
        "missing required attribute 'service' on 'FormulaAndFunctionApmResourceStatsQueryDefinition' object"
      );
    }
    res.service = ObjectSerializer.deserialize(data.service, "string", "");

    if (data.stat === undefined) {
      throw new TypeError(
        "missing required attribute 'stat' on 'FormulaAndFunctionApmResourceStatsQueryDefinition' object"
      );
    }
    if (
      [
        "errors",
        "error_rate",
        "hits",
        "latency_avg",
        "latency_max",
        "latency_p50",
        "latency_p75",
        "latency_p90",
        "latency_p95",
        "latency_p99",
        undefined,
      ].includes(data.stat)
    ) {
      res.stat = data.stat;
    } else {
      const raw = new FormulaAndFunctionApmResourceStatsQueryDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: FormulaAndFunctionApmResourceStatsQueryDefinition): {
    [key: string]: any;
  } {
    const attributeTypes =
      FormulaAndFunctionApmResourceStatsQueryDefinition.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.dataSource === undefined) {
      throw new TypeError(
        "missing required attribute 'data_source' on 'FormulaAndFunctionApmResourceStatsQueryDefinition' object"
      );
    }
    if (["apm_resource_stats", undefined].includes(data.dataSource)) {
      res.data_source = data.dataSource;
    } else {
      throw TypeError(`invalid enum value ${data.dataSource} for dataSource`);
    }

    if (data.env === undefined) {
      throw new TypeError(
        "missing required attribute 'env' on 'FormulaAndFunctionApmResourceStatsQueryDefinition' object"
      );
    }
    res.env = ObjectSerializer.serialize(data.env, "string", "");

    res.group_by = ObjectSerializer.serialize(
      data.groupBy,
      "Array<string>",
      ""
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'FormulaAndFunctionApmResourceStatsQueryDefinition' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.operation_name = ObjectSerializer.serialize(
      data.operationName,
      "string",
      ""
    );

    res.primary_tag_name = ObjectSerializer.serialize(
      data.primaryTagName,
      "string",
      ""
    );

    res.primary_tag_value = ObjectSerializer.serialize(
      data.primaryTagValue,
      "string",
      ""
    );

    res.resource_name = ObjectSerializer.serialize(
      data.resourceName,
      "string",
      ""
    );

    if (data.service === undefined) {
      throw new TypeError(
        "missing required attribute 'service' on 'FormulaAndFunctionApmResourceStatsQueryDefinition' object"
      );
    }
    res.service = ObjectSerializer.serialize(data.service, "string", "");

    if (data.stat === undefined) {
      throw new TypeError(
        "missing required attribute 'stat' on 'FormulaAndFunctionApmResourceStatsQueryDefinition' object"
      );
    }
    if (
      [
        "errors",
        "error_rate",
        "hits",
        "latency_avg",
        "latency_max",
        "latency_p50",
        "latency_p75",
        "latency_p90",
        "latency_p95",
        "latency_p99",
        undefined,
      ].includes(data.stat)
    ) {
      res.stat = data.stat;
    } else {
      throw TypeError(`invalid enum value ${data.stat} for stat`);
    }

    return res;
  }

  public constructor() {}
}
