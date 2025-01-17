/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Creator } from "./Creator";
import { MonitorOptions } from "./MonitorOptions";
import { MonitorOverallStates } from "./MonitorOverallStates";
import { MonitorState } from "./MonitorState";
import { MonitorType } from "./MonitorType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object describing a monitor update request.
 */

export class MonitorUpdateRequest {
  /**
   * Timestamp of the monitor creation.
   */
  "created"?: Date;
  "creator"?: Creator;
  /**
   * Whether or not the monitor is deleted. (Always `null`)
   */
  "deleted"?: Date;
  /**
   * ID of this monitor.
   */
  "id"?: number;
  /**
   * A message to include with notifications for this monitor.
   */
  "message"?: string;
  /**
   * Last timestamp when the monitor was edited.
   */
  "modified"?: Date;
  /**
   * Whether or not the monitor is broken down on different groups.
   */
  "multi"?: boolean;
  /**
   * The monitor name.
   */
  "name"?: string;
  "options"?: MonitorOptions;
  "overallState"?: MonitorOverallStates;
  /**
   * Integer from 1 (high) to 5 (low) indicating alert severity.
   */
  "priority"?: number;
  /**
   * The monitor query.
   */
  "query"?: string;
  /**
   * A list of role identifiers that can be pulled from the Roles API. Cannot be used with `locked` option.
   */
  "restrictedRoles"?: Array<string>;
  "state"?: MonitorState;
  /**
   * Tags associated to your monitor.
   */
  "tags"?: Array<string>;
  "type"?: MonitorType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    created: {
      baseName: "created",
      type: "Date",
      format: "date-time",
    },
    creator: {
      baseName: "creator",
      type: "Creator",
      format: "",
    },
    deleted: {
      baseName: "deleted",
      type: "Date",
      format: "date-time",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    message: {
      baseName: "message",
      type: "string",
      format: "",
    },
    modified: {
      baseName: "modified",
      type: "Date",
      format: "date-time",
    },
    multi: {
      baseName: "multi",
      type: "boolean",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    options: {
      baseName: "options",
      type: "MonitorOptions",
      format: "",
    },
    overallState: {
      baseName: "overall_state",
      type: "MonitorOverallStates",
      format: "",
    },
    priority: {
      baseName: "priority",
      type: "number",
      format: "int64",
    },
    query: {
      baseName: "query",
      type: "string",
      format: "",
    },
    restrictedRoles: {
      baseName: "restricted_roles",
      type: "Array<string>",
      format: "",
    },
    state: {
      baseName: "state",
      type: "MonitorState",
      format: "",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
    type: {
      baseName: "type",
      type: "MonitorType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MonitorUpdateRequest.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): MonitorUpdateRequest {
    const res = new MonitorUpdateRequest();

    res.created = ObjectSerializer.deserialize(
      data.created,
      "Date",
      "date-time"
    );

    res.creator = ObjectSerializer.deserialize(data.creator, "Creator", "");

    res.deleted = ObjectSerializer.deserialize(
      data.deleted,
      "Date",
      "date-time"
    );

    res.id = ObjectSerializer.deserialize(data.id, "number", "int64");

    res.message = ObjectSerializer.deserialize(data.message, "string", "");

    res.modified = ObjectSerializer.deserialize(
      data.modified,
      "Date",
      "date-time"
    );

    res.multi = ObjectSerializer.deserialize(data.multi, "boolean", "");

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.options = ObjectSerializer.deserialize(
      data.options,
      "MonitorOptions",
      ""
    );

    if (
      [
        "Alert",
        "Ignored",
        "No Data",
        "OK",
        "Skipped",
        "Unknown",
        "Warn",
        undefined,
      ].includes(data.overall_state)
    ) {
      res.overallState = data.overall_state;
    } else {
      const raw = new MonitorUpdateRequest();
      raw.unparsedObject = data;
      return raw;
    }

    res.priority = ObjectSerializer.deserialize(
      data.priority,
      "number",
      "int64"
    );

    res.query = ObjectSerializer.deserialize(data.query, "string", "");

    res.restrictedRoles = ObjectSerializer.deserialize(
      data.restricted_roles,
      "Array<string>",
      ""
    );

    res.state = ObjectSerializer.deserialize(data.state, "MonitorState", "");

    res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "");

    if (
      [
        "composite",
        "event alert",
        "log alert",
        "metric alert",
        "process alert",
        "query alert",
        "rum alert",
        "service check",
        "synthetics alert",
        "trace-analytics alert",
        "slo alert",
        "event-v2 alert",
        "audit alert",
        undefined,
      ].includes(data.type)
    ) {
      res.type = data.type;
    } else {
      const raw = new MonitorUpdateRequest();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: MonitorUpdateRequest): { [key: string]: any } {
    const attributeTypes = MonitorUpdateRequest.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.created = ObjectSerializer.serialize(data.created, "Date", "date-time");

    res.creator = ObjectSerializer.serialize(data.creator, "Creator", "");

    res.deleted = ObjectSerializer.serialize(data.deleted, "Date", "date-time");

    res.id = ObjectSerializer.serialize(data.id, "number", "int64");

    res.message = ObjectSerializer.serialize(data.message, "string", "");

    res.modified = ObjectSerializer.serialize(
      data.modified,
      "Date",
      "date-time"
    );

    res.multi = ObjectSerializer.serialize(data.multi, "boolean", "");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.options = ObjectSerializer.serialize(
      data.options,
      "MonitorOptions",
      ""
    );

    if (
      [
        "Alert",
        "Ignored",
        "No Data",
        "OK",
        "Skipped",
        "Unknown",
        "Warn",
        undefined,
      ].includes(data.overallState)
    ) {
      res.overall_state = data.overallState;
    } else {
      throw TypeError(
        `invalid enum value ${data.overallState} for overallState`
      );
    }

    res.priority = ObjectSerializer.serialize(data.priority, "number", "int64");

    res.query = ObjectSerializer.serialize(data.query, "string", "");

    res.restricted_roles = ObjectSerializer.serialize(
      data.restrictedRoles,
      "Array<string>",
      ""
    );

    res.state = ObjectSerializer.serialize(data.state, "MonitorState", "");

    res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "");

    if (
      [
        "composite",
        "event alert",
        "log alert",
        "metric alert",
        "process alert",
        "query alert",
        "rum alert",
        "service check",
        "synthetics alert",
        "trace-analytics alert",
        "slo alert",
        "event-v2 alert",
        "audit alert",
        undefined,
      ].includes(data.type)
    ) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
