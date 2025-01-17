/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WidgetLiveSpan } from "./WidgetLiveSpan";

export class WidgetTime {
  "liveSpan"?: WidgetLiveSpan;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    liveSpan: {
      baseName: "live_span",
      type: "WidgetLiveSpan",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return WidgetTime.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): WidgetTime {
    const res = new WidgetTime();

    if (
      [
        "1m",
        "5m",
        "10m",
        "15m",
        "30m",
        "1h",
        "4h",
        "1d",
        "2d",
        "1w",
        "1mo",
        "3mo",
        "6mo",
        "1y",
        "alert",
        undefined,
      ].includes(data.live_span)
    ) {
      res.liveSpan = data.live_span;
    } else {
      const raw = new WidgetTime();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: WidgetTime): { [key: string]: any } {
    const attributeTypes = WidgetTime.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (
      [
        "1m",
        "5m",
        "10m",
        "15m",
        "30m",
        "1h",
        "4h",
        "1d",
        "2d",
        "1w",
        "1mo",
        "3mo",
        "6mo",
        "1y",
        "alert",
        undefined,
      ].includes(data.liveSpan)
    ) {
      res.live_span = data.liveSpan;
    } else {
      throw TypeError(`invalid enum value ${data.liveSpan} for liveSpan`);
    }

    return res;
  }

  public constructor() {}
}
