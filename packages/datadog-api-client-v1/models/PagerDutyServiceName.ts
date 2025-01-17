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
 * PagerDuty service object name.
 */

export class PagerDutyServiceName {
  /**
   * Your service name associated service key in PagerDuty.
   */
  "serviceName": string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    serviceName: {
      baseName: "service_name",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return PagerDutyServiceName.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): PagerDutyServiceName {
    const res = new PagerDutyServiceName();

    if (data.service_name === undefined) {
      throw new TypeError(
        "missing required attribute 'service_name' on 'PagerDutyServiceName' object"
      );
    }
    res.serviceName = ObjectSerializer.deserialize(
      data.service_name,
      "string",
      ""
    );

    return res;
  }

  static serialize(data: PagerDutyServiceName): { [key: string]: any } {
    const attributeTypes = PagerDutyServiceName.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.serviceName === undefined) {
      throw new TypeError(
        "missing required attribute 'service_name' on 'PagerDutyServiceName' object"
      );
    }
    res.service_name = ObjectSerializer.serialize(
      data.serviceName,
      "string",
      ""
    );

    return res;
  }

  public constructor() {}
}
