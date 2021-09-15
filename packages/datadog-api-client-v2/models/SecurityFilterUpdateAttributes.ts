/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SecurityFilterExclusionFilter } from "./SecurityFilterExclusionFilter";
import { SecurityFilterFilteredDataType } from "./SecurityFilterFilteredDataType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The security filters properties to be updated.
 */

export class SecurityFilterUpdateAttributes {
  /**
   * Exclusion filters to exclude some logs from the security filter.
   */
  "exclusionFilters"?: Array<SecurityFilterExclusionFilter>;
  "filteredDataType"?: SecurityFilterFilteredDataType;
  /**
   * Whether the security filter is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * The name of the security filter.
   */
  "name"?: string;
  /**
   * The query of the security filter.
   */
  "query"?: string;
  /**
   * The version of the security filter to update.
   */
  "version"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    exclusionFilters: {
      baseName: "exclusion_filters",
      type: "Array<SecurityFilterExclusionFilter>",
      format: "",
    },
    filteredDataType: {
      baseName: "filtered_data_type",
      type: "SecurityFilterFilteredDataType",
      format: "",
    },
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
    query: {
      baseName: "query",
      type: "string",
      format: "",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int32",
    },
  };

  static getAttributeTypeMap() {
    return SecurityFilterUpdateAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SecurityFilterUpdateAttributes {
    const res = new SecurityFilterUpdateAttributes();

    res.exclusionFilters = ObjectSerializer.deserialize(
      data.exclusion_filters,
      "Array<SecurityFilterExclusionFilter>",
      ""
    );

    if (["logs", undefined].includes(data.filtered_data_type)) {
      res.filteredDataType = data.filtered_data_type;
    } else {
      const raw = new SecurityFilterUpdateAttributes();
      raw.unparsedObject = data;
      return raw;
    }

    res.isEnabled = ObjectSerializer.deserialize(
      data.is_enabled,
      "boolean",
      ""
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.query = ObjectSerializer.deserialize(data.query, "string", "");

    res.version = ObjectSerializer.deserialize(data.version, "number", "int32");

    return res;
  }

  static serialize(data: SecurityFilterUpdateAttributes): {
    [key: string]: any;
  } {
    const attributeTypes = SecurityFilterUpdateAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.exclusion_filters = ObjectSerializer.serialize(
      data.exclusionFilters,
      "Array<SecurityFilterExclusionFilter>",
      ""
    );

    if (["logs", undefined].includes(data.filteredDataType)) {
      res.filtered_data_type = data.filteredDataType;
    } else {
      throw TypeError(
        `invalid enum value ${data.filteredDataType} for filteredDataType`
      );
    }

    res.is_enabled = ObjectSerializer.serialize(data.isEnabled, "boolean", "");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.query = ObjectSerializer.serialize(data.query, "string", "");

    res.version = ObjectSerializer.serialize(data.version, "number", "int32");

    return res;
  }

  public constructor() {}
}
