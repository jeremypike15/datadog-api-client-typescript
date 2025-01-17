/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsServiceRemapperType } from "./LogsServiceRemapperType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Use this processor if you want to assign one or more attributes as the official service.  **Note:** If multiple service remapper processors can be applied to a given log, only the first one (according to the pipeline order) is taken into account.
 */

export class LogsServiceRemapper {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Array of source attributes.
   */
  "sources": Array<string>;
  "type": LogsServiceRemapperType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
      format: "",
    },
    type: {
      baseName: "type",
      type: "LogsServiceRemapperType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsServiceRemapper.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsServiceRemapper {
    const res = new LogsServiceRemapper();

    res.isEnabled = ObjectSerializer.deserialize(
      data.is_enabled,
      "boolean",
      ""
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (data.sources === undefined) {
      throw new TypeError(
        "missing required attribute 'sources' on 'LogsServiceRemapper' object"
      );
    }
    res.sources = ObjectSerializer.deserialize(
      data.sources,
      "Array<string>",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsServiceRemapper' object"
      );
    }
    if (["service-remapper", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new LogsServiceRemapper();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: LogsServiceRemapper): { [key: string]: any } {
    const attributeTypes = LogsServiceRemapper.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.is_enabled = ObjectSerializer.serialize(data.isEnabled, "boolean", "");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (data.sources === undefined) {
      throw new TypeError(
        "missing required attribute 'sources' on 'LogsServiceRemapper' object"
      );
    }
    res.sources = ObjectSerializer.serialize(data.sources, "Array<string>", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsServiceRemapper' object"
      );
    }
    if (["service-remapper", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
