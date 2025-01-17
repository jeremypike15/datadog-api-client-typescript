/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArchiveCreateRequestDestination } from "./LogsArchiveCreateRequestDestination";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The attributes associated with the archive.
 */

export class LogsArchiveCreateRequestAttributes {
  "destination": LogsArchiveCreateRequestDestination;
  /**
   * To store the tags in the archive, set the value \"true\". If it is set to \"false\", the tags will be deleted when the logs are sent to the archive.
   */
  "includeTags"?: boolean;
  /**
   * The archive name.
   */
  "name": string;
  /**
   * The archive query/filter. Logs matching this query are included in the archive.
   */
  "query": string;
  /**
   * An array of tags to add to rehydrated logs from an archive.
   */
  "rehydrationTags"?: Array<string>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    destination: {
      baseName: "destination",
      type: "LogsArchiveCreateRequestDestination",
      format: "",
    },
    includeTags: {
      baseName: "include_tags",
      type: "boolean",
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
    rehydrationTags: {
      baseName: "rehydration_tags",
      type: "Array<string>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsArchiveCreateRequestAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): LogsArchiveCreateRequestAttributes {
    const res = new LogsArchiveCreateRequestAttributes();

    if (data.destination === undefined) {
      throw new TypeError(
        "missing required attribute 'destination' on 'LogsArchiveCreateRequestAttributes' object"
      );
    }
    res.destination = ObjectSerializer.deserialize(
      data.destination,
      "LogsArchiveCreateRequestDestination",
      ""
    );

    res.includeTags = ObjectSerializer.deserialize(
      data.include_tags,
      "boolean",
      ""
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'LogsArchiveCreateRequestAttributes' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'LogsArchiveCreateRequestAttributes' object"
      );
    }
    res.query = ObjectSerializer.deserialize(data.query, "string", "");

    res.rehydrationTags = ObjectSerializer.deserialize(
      data.rehydration_tags,
      "Array<string>",
      ""
    );

    return res;
  }

  static serialize(data: LogsArchiveCreateRequestAttributes): {
    [key: string]: any;
  } {
    const attributeTypes =
      LogsArchiveCreateRequestAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.destination === undefined) {
      throw new TypeError(
        "missing required attribute 'destination' on 'LogsArchiveCreateRequestAttributes' object"
      );
    }
    res.destination = ObjectSerializer.serialize(
      data.destination,
      "LogsArchiveCreateRequestDestination",
      ""
    );

    res.include_tags = ObjectSerializer.serialize(
      data.includeTags,
      "boolean",
      ""
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'LogsArchiveCreateRequestAttributes' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'LogsArchiveCreateRequestAttributes' object"
      );
    }
    res.query = ObjectSerializer.serialize(data.query, "string", "");

    res.rehydration_tags = ObjectSerializer.serialize(
      data.rehydrationTags,
      "Array<string>",
      ""
    );

    return res;
  }

  public constructor() {}
}
