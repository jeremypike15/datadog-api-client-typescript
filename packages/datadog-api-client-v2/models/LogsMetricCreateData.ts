/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricCreateAttributes } from "./LogsMetricCreateAttributes";
import { LogsMetricType } from "./LogsMetricType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The new log-based metric properties.
 */

export class LogsMetricCreateData {
  "attributes": LogsMetricCreateAttributes;
  /**
   * The name of the log-based metric.
   */
  "id": string;
  "type": LogsMetricType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "LogsMetricCreateAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "LogsMetricType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsMetricCreateData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsMetricCreateData {
    const res = new LogsMetricCreateData();

    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'LogsMetricCreateData' object"
      );
    }
    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "LogsMetricCreateAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'LogsMetricCreateData' object"
      );
    }
    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsMetricCreateData' object"
      );
    }
    if (["logs_metrics", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new LogsMetricCreateData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: LogsMetricCreateData): { [key: string]: any } {
    const attributeTypes = LogsMetricCreateData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'LogsMetricCreateData' object"
      );
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "LogsMetricCreateAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'LogsMetricCreateData' object"
      );
    }
    res.id = ObjectSerializer.serialize(data.id, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsMetricCreateData' object"
      );
    }
    if (["logs_metrics", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
