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
 * The number of indexed logs for each hour for a given organization broken down by retention period.
 */

export class UsageLogsByRetentionHour {
  /**
   * Total logs indexed with this retention period during a given hour.
   */
  "indexedEventsCount"?: number;
  /**
   * Live logs indexed with this retention period during a given hour.
   */
  "liveIndexedEventsCount"?: number;
  /**
   * Rehydrated logs indexed with this retention period during a given hour.
   */
  "rehydratedIndexedEventsCount"?: number;
  /**
   * The retention period in days or \"custom\" for all custom retention usage.
   */
  "retention"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    indexedEventsCount: {
      baseName: "indexed_events_count",
      type: "number",
      format: "int64",
    },
    liveIndexedEventsCount: {
      baseName: "live_indexed_events_count",
      type: "number",
      format: "int64",
    },
    rehydratedIndexedEventsCount: {
      baseName: "rehydrated_indexed_events_count",
      type: "number",
      format: "int64",
    },
    retention: {
      baseName: "retention",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageLogsByRetentionHour.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageLogsByRetentionHour {
    const res = new UsageLogsByRetentionHour();

    res.indexedEventsCount = ObjectSerializer.deserialize(
      data.indexed_events_count,
      "number",
      "int64"
    );

    res.liveIndexedEventsCount = ObjectSerializer.deserialize(
      data.live_indexed_events_count,
      "number",
      "int64"
    );

    res.rehydratedIndexedEventsCount = ObjectSerializer.deserialize(
      data.rehydrated_indexed_events_count,
      "number",
      "int64"
    );

    res.retention = ObjectSerializer.deserialize(data.retention, "string", "");

    return res;
  }

  static serialize(data: UsageLogsByRetentionHour): { [key: string]: any } {
    const attributeTypes = UsageLogsByRetentionHour.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.indexed_events_count = ObjectSerializer.serialize(
      data.indexedEventsCount,
      "number",
      "int64"
    );

    res.live_indexed_events_count = ObjectSerializer.serialize(
      data.liveIndexedEventsCount,
      "number",
      "int64"
    );

    res.rehydrated_indexed_events_count = ObjectSerializer.serialize(
      data.rehydratedIndexedEventsCount,
      "number",
      "int64"
    );

    res.retention = ObjectSerializer.serialize(data.retention, "string", "");

    return res;
  }

  public constructor() {}
}
