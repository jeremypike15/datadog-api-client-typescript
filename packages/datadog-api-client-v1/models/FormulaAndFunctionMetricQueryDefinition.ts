/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionMetricAggregation } from "./FormulaAndFunctionMetricAggregation";
import { FormulaAndFunctionMetricDataSource } from "./FormulaAndFunctionMetricDataSource";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A formula and functions metrics query.
 */

export class FormulaAndFunctionMetricQueryDefinition {
  "aggregator"?: FormulaAndFunctionMetricAggregation;
  "dataSource": FormulaAndFunctionMetricDataSource;
  /**
   * Name of the query for use in formulas.
   */
  "name": string;
  /**
   * Metrics query definition.
   */
  "query": string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    aggregator: {
      baseName: "aggregator",
      type: "FormulaAndFunctionMetricAggregation",
      format: "",
    },
    dataSource: {
      baseName: "data_source",
      type: "FormulaAndFunctionMetricDataSource",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    query: {
      baseName: "query",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return FormulaAndFunctionMetricQueryDefinition.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): FormulaAndFunctionMetricQueryDefinition {
    const res = new FormulaAndFunctionMetricQueryDefinition();

    if (
      [
        "avg",
        "min",
        "max",
        "sum",
        "last",
        "area",
        "l2norm",
        "percentile",
        undefined,
      ].includes(data.aggregator)
    ) {
      res.aggregator = data.aggregator;
    } else {
      const raw = new FormulaAndFunctionMetricQueryDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    if (data.data_source === undefined) {
      throw new TypeError(
        "missing required attribute 'data_source' on 'FormulaAndFunctionMetricQueryDefinition' object"
      );
    }
    if (["metrics", undefined].includes(data.data_source)) {
      res.dataSource = data.data_source;
    } else {
      const raw = new FormulaAndFunctionMetricQueryDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'FormulaAndFunctionMetricQueryDefinition' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'FormulaAndFunctionMetricQueryDefinition' object"
      );
    }
    res.query = ObjectSerializer.deserialize(data.query, "string", "");

    return res;
  }

  static serialize(data: FormulaAndFunctionMetricQueryDefinition): {
    [key: string]: any;
  } {
    const attributeTypes =
      FormulaAndFunctionMetricQueryDefinition.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (
      [
        "avg",
        "min",
        "max",
        "sum",
        "last",
        "area",
        "l2norm",
        "percentile",
        undefined,
      ].includes(data.aggregator)
    ) {
      res.aggregator = data.aggregator;
    } else {
      throw TypeError(`invalid enum value ${data.aggregator} for aggregator`);
    }

    if (data.dataSource === undefined) {
      throw new TypeError(
        "missing required attribute 'data_source' on 'FormulaAndFunctionMetricQueryDefinition' object"
      );
    }
    if (["metrics", undefined].includes(data.dataSource)) {
      res.data_source = data.dataSource;
    } else {
      throw TypeError(`invalid enum value ${data.dataSource} for dataSource`);
    }

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'FormulaAndFunctionMetricQueryDefinition' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'FormulaAndFunctionMetricQueryDefinition' object"
      );
    }
    res.query = ObjectSerializer.serialize(data.query, "string", "");

    return res;
  }

  public constructor() {}
}
