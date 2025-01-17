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
 * Event overlay control options.  See the dedicated [Events JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/widget_json/#events-schema) to learn how to build the `<EVENTS_SCHEMA>`.
 */

export class WidgetEvent {
  /**
   * Query definition.
   */
  "q": string;
  /**
   * The execution method for multi-value filters.
   */
  "tagsExecution"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    q: {
      baseName: "q",
      type: "string",
      format: "",
    },
    tagsExecution: {
      baseName: "tags_execution",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return WidgetEvent.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): WidgetEvent {
    const res = new WidgetEvent();

    if (data.q === undefined) {
      throw new TypeError(
        "missing required attribute 'q' on 'WidgetEvent' object"
      );
    }
    res.q = ObjectSerializer.deserialize(data.q, "string", "");

    res.tagsExecution = ObjectSerializer.deserialize(
      data.tags_execution,
      "string",
      ""
    );

    return res;
  }

  static serialize(data: WidgetEvent): { [key: string]: any } {
    const attributeTypes = WidgetEvent.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.q === undefined) {
      throw new TypeError(
        "missing required attribute 'q' on 'WidgetEvent' object"
      );
    }
    res.q = ObjectSerializer.serialize(data.q, "string", "");

    res.tags_execution = ObjectSerializer.serialize(
      data.tagsExecution,
      "string",
      ""
    );

    return res;
  }

  public constructor() {}
}
