/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TableWidgetCellDisplayMode } from "./TableWidgetCellDisplayMode";
import { WidgetSort } from "./WidgetSort";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Column properties.
 */

export class ApmStatsQueryColumnType {
  /**
   * A user-assigned alias for the column.
   */
  "alias"?: string;
  "cellDisplayMode"?: TableWidgetCellDisplayMode;
  /**
   * Column name.
   */
  "name": string;
  "order"?: WidgetSort;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    alias: {
      baseName: "alias",
      type: "string",
      format: "",
    },
    cellDisplayMode: {
      baseName: "cell_display_mode",
      type: "TableWidgetCellDisplayMode",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ApmStatsQueryColumnType.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): ApmStatsQueryColumnType {
    const res = new ApmStatsQueryColumnType();

    res.alias = ObjectSerializer.deserialize(data.alias, "string", "");

    if (["number", "bar", undefined].includes(data.cell_display_mode)) {
      res.cellDisplayMode = data.cell_display_mode;
    } else {
      const raw = new ApmStatsQueryColumnType();
      raw.unparsedObject = data;
      return raw;
    }

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'ApmStatsQueryColumnType' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    if (["asc", "desc", undefined].includes(data.order)) {
      res.order = data.order;
    } else {
      const raw = new ApmStatsQueryColumnType();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: ApmStatsQueryColumnType): { [key: string]: any } {
    const attributeTypes = ApmStatsQueryColumnType.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.alias = ObjectSerializer.serialize(data.alias, "string", "");

    if (["number", "bar", undefined].includes(data.cellDisplayMode)) {
      res.cell_display_mode = data.cellDisplayMode;
    } else {
      throw TypeError(
        `invalid enum value ${data.cellDisplayMode} for cellDisplayMode`
      );
    }

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'ApmStatsQueryColumnType' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    if (["asc", "desc", undefined].includes(data.order)) {
      res.order = data.order;
    } else {
      throw TypeError(`invalid enum value ${data.order} for order`);
    }

    return res;
  }

  public constructor() {}
}
