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
 * JSON object containing all log attributes and their associated values.
 */

export class LogAttributes {
  /**
   * JSON object of attributes from your log.
   */
  "attributes"?: { [key: string]: any };
  /**
   * Name of the machine from where the logs are being sent.
   */
  "host"?: string;
  /**
   * The message [reserved attribute](https://docs.datadoghq.com/logs/log_collection/#reserved-attributes) of your log. By default, Datadog ingests the value of the message attribute as the body of the log entry. That value is then highlighted and displayed in the Logstream, where it is indexed for full text search.
   */
  "message"?: string;
  /**
   * The name of the application or service generating the log events. It is used to switch from Logs to APM, so make sure you define the same value when you use both products.
   */
  "service"?: string;
  /**
   * Status of the message associated with your log.
   */
  "status"?: string;
  /**
   * Array of tags associated with your log.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp of your log.
   */
  "timestamp"?: Date;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "{ [key: string]: any; }",
      format: "",
    },
    host: {
      baseName: "host",
      type: "string",
      format: "",
    },
    message: {
      baseName: "message",
      type: "string",
      format: "",
    },
    service: {
      baseName: "service",
      type: "string",
      format: "",
    },
    status: {
      baseName: "status",
      type: "string",
      format: "",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      format: "date-time",
    },
  };

  static getAttributeTypeMap() {
    return LogAttributes.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogAttributes {
    const res = new LogAttributes();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "{ [key: string]: any; }",
      ""
    );

    res.host = ObjectSerializer.deserialize(data.host, "string", "");

    res.message = ObjectSerializer.deserialize(data.message, "string", "");

    res.service = ObjectSerializer.deserialize(data.service, "string", "");

    res.status = ObjectSerializer.deserialize(data.status, "string", "");

    res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "");

    res.timestamp = ObjectSerializer.deserialize(
      data.timestamp,
      "Date",
      "date-time"
    );

    return res;
  }

  static serialize(data: LogAttributes): { [key: string]: any } {
    const attributeTypes = LogAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "{ [key: string]: any; }",
      ""
    );

    res.host = ObjectSerializer.serialize(data.host, "string", "");

    res.message = ObjectSerializer.serialize(data.message, "string", "");

    res.service = ObjectSerializer.serialize(data.service, "string", "");

    res.status = ObjectSerializer.serialize(data.status, "string", "");

    res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "");

    res.timestamp = ObjectSerializer.serialize(
      data.timestamp,
      "Date",
      "date-time"
    );

    return res;
  }

  public constructor() {}
}
