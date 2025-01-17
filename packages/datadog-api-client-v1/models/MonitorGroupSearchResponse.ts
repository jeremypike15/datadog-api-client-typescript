/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MonitorGroupSearchResponseCounts } from "./MonitorGroupSearchResponseCounts";
import { MonitorGroupSearchResult } from "./MonitorGroupSearchResult";
import { MonitorSearchResponseMetadata } from "./MonitorSearchResponseMetadata";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The response of a monitor group search.
 */

export class MonitorGroupSearchResponse {
  "counts"?: MonitorGroupSearchResponseCounts;
  /**
   * The list of found monitor groups.
   */
  "groups"?: Array<MonitorGroupSearchResult>;
  "metadata"?: MonitorSearchResponseMetadata;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    counts: {
      baseName: "counts",
      type: "MonitorGroupSearchResponseCounts",
      format: "",
    },
    groups: {
      baseName: "groups",
      type: "Array<MonitorGroupSearchResult>",
      format: "",
    },
    metadata: {
      baseName: "metadata",
      type: "MonitorSearchResponseMetadata",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MonitorGroupSearchResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): MonitorGroupSearchResponse {
    const res = new MonitorGroupSearchResponse();

    res.counts = ObjectSerializer.deserialize(
      data.counts,
      "MonitorGroupSearchResponseCounts",
      ""
    );

    res.groups = ObjectSerializer.deserialize(
      data.groups,
      "Array<MonitorGroupSearchResult>",
      ""
    );

    res.metadata = ObjectSerializer.deserialize(
      data.metadata,
      "MonitorSearchResponseMetadata",
      ""
    );

    return res;
  }

  static serialize(data: MonitorGroupSearchResponse): { [key: string]: any } {
    const attributeTypes = MonitorGroupSearchResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.counts = ObjectSerializer.serialize(
      data.counts,
      "MonitorGroupSearchResponseCounts",
      ""
    );

    res.groups = ObjectSerializer.serialize(
      data.groups,
      "Array<MonitorGroupSearchResult>",
      ""
    );

    res.metadata = ObjectSerializer.serialize(
      data.metadata,
      "MonitorSearchResponseMetadata",
      ""
    );

    return res;
  }

  public constructor() {}
}
