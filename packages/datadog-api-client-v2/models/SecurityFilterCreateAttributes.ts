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
 * Object containing the attributes of the security filter to be created.
 */

export class SecurityFilterCreateAttributes {
  /**
   * Exclusion filters to exclude some logs from the security filter.
   */
  "exclusionFilters": Array<SecurityFilterExclusionFilter>;
  "filteredDataType": SecurityFilterFilteredDataType;
  /**
   * Whether the security filter is enabled.
   */
  "isEnabled": boolean;
  /**
   * The name of the security filter.
   */
  "name": string;
  /**
   * The query of the security filter.
   */
  "query": string;

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
  };

  static getAttributeTypeMap() {
    return SecurityFilterCreateAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SecurityFilterCreateAttributes {
    const res = new SecurityFilterCreateAttributes();

    if (data.exclusion_filters === undefined) {
      throw new TypeError(
        "missing required attribute 'exclusion_filters' on 'SecurityFilterCreateAttributes' object"
      );
    }
    res.exclusionFilters = ObjectSerializer.deserialize(
      data.exclusion_filters,
      "Array<SecurityFilterExclusionFilter>",
      ""
    );

    if (data.filtered_data_type === undefined) {
      throw new TypeError(
        "missing required attribute 'filtered_data_type' on 'SecurityFilterCreateAttributes' object"
      );
    }
    if (["logs", undefined].includes(data.filtered_data_type)) {
      res.filteredDataType = data.filtered_data_type;
    } else {
      const raw = new SecurityFilterCreateAttributes();
      raw.unparsedObject = data;
      return raw;
    }

    if (data.is_enabled === undefined) {
      throw new TypeError(
        "missing required attribute 'is_enabled' on 'SecurityFilterCreateAttributes' object"
      );
    }
    res.isEnabled = ObjectSerializer.deserialize(
      data.is_enabled,
      "boolean",
      ""
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'SecurityFilterCreateAttributes' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'SecurityFilterCreateAttributes' object"
      );
    }
    res.query = ObjectSerializer.deserialize(data.query, "string", "");

    return res;
  }

  static serialize(data: SecurityFilterCreateAttributes): {
    [key: string]: any;
  } {
    const attributeTypes = SecurityFilterCreateAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.exclusionFilters === undefined) {
      throw new TypeError(
        "missing required attribute 'exclusion_filters' on 'SecurityFilterCreateAttributes' object"
      );
    }
    res.exclusion_filters = ObjectSerializer.serialize(
      data.exclusionFilters,
      "Array<SecurityFilterExclusionFilter>",
      ""
    );

    if (data.filteredDataType === undefined) {
      throw new TypeError(
        "missing required attribute 'filtered_data_type' on 'SecurityFilterCreateAttributes' object"
      );
    }
    if (["logs", undefined].includes(data.filteredDataType)) {
      res.filtered_data_type = data.filteredDataType;
    } else {
      throw TypeError(
        `invalid enum value ${data.filteredDataType} for filteredDataType`
      );
    }

    if (data.isEnabled === undefined) {
      throw new TypeError(
        "missing required attribute 'is_enabled' on 'SecurityFilterCreateAttributes' object"
      );
    }
    res.is_enabled = ObjectSerializer.serialize(data.isEnabled, "boolean", "");

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'SecurityFilterCreateAttributes' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (data.query === undefined) {
      throw new TypeError(
        "missing required attribute 'query' on 'SecurityFilterCreateAttributes' object"
      );
    }
    res.query = ObjectSerializer.serialize(data.query, "string", "");

    return res;
  }

  public constructor() {}
}
