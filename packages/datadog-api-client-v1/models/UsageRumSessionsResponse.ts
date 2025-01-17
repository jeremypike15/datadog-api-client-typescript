/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageRumSessionsHour } from "./UsageRumSessionsHour";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response containing the number of RUM Sessions for each hour for a given organization.
 */

export class UsageRumSessionsResponse {
  /**
   * Get hourly usage for RUM Sessions.
   */
  "usage"?: Array<UsageRumSessionsHour>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    usage: {
      baseName: "usage",
      type: "Array<UsageRumSessionsHour>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UsageRumSessionsResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageRumSessionsResponse {
    const res = new UsageRumSessionsResponse();

    res.usage = ObjectSerializer.deserialize(
      data.usage,
      "Array<UsageRumSessionsHour>",
      ""
    );

    return res;
  }

  static serialize(data: UsageRumSessionsResponse): { [key: string]: any } {
    const attributeTypes = UsageRumSessionsResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.usage = ObjectSerializer.serialize(
      data.usage,
      "Array<UsageRumSessionsHour>",
      ""
    );

    return res;
  }

  public constructor() {}
}
