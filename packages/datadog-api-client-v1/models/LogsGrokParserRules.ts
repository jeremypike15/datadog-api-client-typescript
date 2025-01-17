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
 * Set of rules for the grok parser.
 */

export class LogsGrokParserRules {
  /**
   * List of match rules for the grok parser, separated by a new line.
   */
  "matchRules": string;
  /**
   * List of support rules for the grok parser, separated by a new line.
   */
  "supportRules"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    matchRules: {
      baseName: "match_rules",
      type: "string",
      format: "",
    },
    supportRules: {
      baseName: "support_rules",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsGrokParserRules.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsGrokParserRules {
    const res = new LogsGrokParserRules();

    if (data.match_rules === undefined) {
      throw new TypeError(
        "missing required attribute 'match_rules' on 'LogsGrokParserRules' object"
      );
    }
    res.matchRules = ObjectSerializer.deserialize(
      data.match_rules,
      "string",
      ""
    );

    res.supportRules = ObjectSerializer.deserialize(
      data.support_rules,
      "string",
      ""
    );

    return res;
  }

  static serialize(data: LogsGrokParserRules): { [key: string]: any } {
    const attributeTypes = LogsGrokParserRules.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.matchRules === undefined) {
      throw new TypeError(
        "missing required attribute 'match_rules' on 'LogsGrokParserRules' object"
      );
    }
    res.match_rules = ObjectSerializer.serialize(data.matchRules, "string", "");

    res.support_rules = ObjectSerializer.serialize(
      data.supportRules,
      "string",
      ""
    );

    return res;
  }

  public constructor() {}
}
