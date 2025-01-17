/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GroupWidgetDefinitionType } from "./GroupWidgetDefinitionType";
import { Widget } from "./Widget";
import { WidgetLayoutType } from "./WidgetLayoutType";
import { WidgetTextAlign } from "./WidgetTextAlign";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The groups widget allows you to keep similar graphs together on your timeboard. Each group has a custom header, can hold one to many graphs, and is collapsible.
 */

export class GroupWidgetDefinition {
  /**
   * Background color of the group title.
   */
  "backgroundColor"?: string;
  /**
   * URL of image to display as a banner for the group.
   */
  "bannerImg"?: string;
  "layoutType": WidgetLayoutType;
  /**
   * Whether to show the title or not.
   */
  "showTitle"?: boolean;
  /**
   * Title of the widget.
   */
  "title"?: string;
  "titleAlign"?: WidgetTextAlign;
  "type": GroupWidgetDefinitionType;
  /**
   * List of widget groups.
   */
  "widgets": Array<Widget>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    backgroundColor: {
      baseName: "background_color",
      type: "string",
      format: "",
    },
    bannerImg: {
      baseName: "banner_img",
      type: "string",
      format: "",
    },
    layoutType: {
      baseName: "layout_type",
      type: "WidgetLayoutType",
      format: "",
    },
    showTitle: {
      baseName: "show_title",
      type: "boolean",
      format: "",
    },
    title: {
      baseName: "title",
      type: "string",
      format: "",
    },
    titleAlign: {
      baseName: "title_align",
      type: "WidgetTextAlign",
      format: "",
    },
    type: {
      baseName: "type",
      type: "GroupWidgetDefinitionType",
      format: "",
    },
    widgets: {
      baseName: "widgets",
      type: "Array<Widget>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return GroupWidgetDefinition.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): GroupWidgetDefinition {
    const res = new GroupWidgetDefinition();

    res.backgroundColor = ObjectSerializer.deserialize(
      data.background_color,
      "string",
      ""
    );

    res.bannerImg = ObjectSerializer.deserialize(data.banner_img, "string", "");

    if (data.layout_type === undefined) {
      throw new TypeError(
        "missing required attribute 'layout_type' on 'GroupWidgetDefinition' object"
      );
    }
    if (["ordered", undefined].includes(data.layout_type)) {
      res.layoutType = data.layout_type;
    } else {
      const raw = new GroupWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    res.showTitle = ObjectSerializer.deserialize(
      data.show_title,
      "boolean",
      ""
    );

    res.title = ObjectSerializer.deserialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.title_align)) {
      res.titleAlign = data.title_align;
    } else {
      const raw = new GroupWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'GroupWidgetDefinition' object"
      );
    }
    if (["group", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new GroupWidgetDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    if (data.widgets === undefined) {
      throw new TypeError(
        "missing required attribute 'widgets' on 'GroupWidgetDefinition' object"
      );
    }
    res.widgets = ObjectSerializer.deserialize(
      data.widgets,
      "Array<Widget>",
      ""
    );

    return res;
  }

  static serialize(data: GroupWidgetDefinition): { [key: string]: any } {
    const attributeTypes = GroupWidgetDefinition.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.background_color = ObjectSerializer.serialize(
      data.backgroundColor,
      "string",
      ""
    );

    res.banner_img = ObjectSerializer.serialize(data.bannerImg, "string", "");

    if (data.layoutType === undefined) {
      throw new TypeError(
        "missing required attribute 'layout_type' on 'GroupWidgetDefinition' object"
      );
    }
    if (["ordered", undefined].includes(data.layoutType)) {
      res.layout_type = data.layoutType;
    } else {
      throw TypeError(`invalid enum value ${data.layoutType} for layoutType`);
    }

    res.show_title = ObjectSerializer.serialize(data.showTitle, "boolean", "");

    res.title = ObjectSerializer.serialize(data.title, "string", "");

    if (["center", "left", "right", undefined].includes(data.titleAlign)) {
      res.title_align = data.titleAlign;
    } else {
      throw TypeError(`invalid enum value ${data.titleAlign} for titleAlign`);
    }

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'GroupWidgetDefinition' object"
      );
    }
    if (["group", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    if (data.widgets === undefined) {
      throw new TypeError(
        "missing required attribute 'widgets' on 'GroupWidgetDefinition' object"
      );
    }
    res.widgets = ObjectSerializer.serialize(data.widgets, "Array<Widget>", "");

    return res;
  }

  public constructor() {}
}
