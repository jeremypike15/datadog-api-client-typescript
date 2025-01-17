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
 * The view of the world that the map should render.
 */

export class GeomapWidgetDefinitionView {
  /**
   * The 2-letter ISO code of a country to focus the map on. Or `WORLD`.
   */
  "focus": string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    focus: {
      baseName: "focus",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return GeomapWidgetDefinitionView.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): GeomapWidgetDefinitionView {
    const res = new GeomapWidgetDefinitionView();

    if (data.focus === undefined) {
      throw new TypeError(
        "missing required attribute 'focus' on 'GeomapWidgetDefinitionView' object"
      );
    }
    res.focus = ObjectSerializer.deserialize(data.focus, "string", "");

    return res;
  }

  static serialize(data: GeomapWidgetDefinitionView): { [key: string]: any } {
    const attributeTypes = GeomapWidgetDefinitionView.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.focus === undefined) {
      throw new TypeError(
        "missing required attribute 'focus' on 'GeomapWidgetDefinitionView' object"
      );
    }
    res.focus = ObjectSerializer.serialize(data.focus, "string", "");

    return res;
  }

  public constructor() {}
}
