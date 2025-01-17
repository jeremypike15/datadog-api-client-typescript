/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsTestPauseStatus } from "./SyntheticsTestPauseStatus";

export class SyntheticsUpdateTestPauseStatusPayload {
  "newStatus"?: SyntheticsTestPauseStatus;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    newStatus: {
      baseName: "new_status",
      type: "SyntheticsTestPauseStatus",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsUpdateTestPauseStatusPayload.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsUpdateTestPauseStatusPayload {
    const res = new SyntheticsUpdateTestPauseStatusPayload();

    if (["live", "paused", undefined].includes(data.new_status)) {
      res.newStatus = data.new_status;
    } else {
      const raw = new SyntheticsUpdateTestPauseStatusPayload();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: SyntheticsUpdateTestPauseStatusPayload): {
    [key: string]: any;
  } {
    const attributeTypes =
      SyntheticsUpdateTestPauseStatusPayload.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (["live", "paused", undefined].includes(data.newStatus)) {
      res.new_status = data.newStatus;
    } else {
      throw TypeError(`invalid enum value ${data.newStatus} for newStatus`);
    }

    return res;
  }

  public constructor() {}
}
