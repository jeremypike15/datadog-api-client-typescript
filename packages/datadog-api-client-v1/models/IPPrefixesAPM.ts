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
 * Available prefix information for the APM endpoints.
 */

export class IPPrefixesAPM {
  /**
   * List of IPv4 prefixes.
   */
  "prefixesIpv4"?: Array<string>;
  /**
   * List of IPv6 prefixes.
   */
  "prefixesIpv6"?: Array<string>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    prefixesIpv4: {
      baseName: "prefixes_ipv4",
      type: "Array<string>",
      format: "",
    },
    prefixesIpv6: {
      baseName: "prefixes_ipv6",
      type: "Array<string>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return IPPrefixesAPM.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): IPPrefixesAPM {
    const res = new IPPrefixesAPM();

    res.prefixesIpv4 = ObjectSerializer.deserialize(
      data.prefixes_ipv4,
      "Array<string>",
      ""
    );

    res.prefixesIpv6 = ObjectSerializer.deserialize(
      data.prefixes_ipv6,
      "Array<string>",
      ""
    );

    return res;
  }

  static serialize(data: IPPrefixesAPM): { [key: string]: any } {
    const attributeTypes = IPPrefixesAPM.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.prefixes_ipv4 = ObjectSerializer.serialize(
      data.prefixesIpv4,
      "Array<string>",
      ""
    );

    res.prefixes_ipv6 = ObjectSerializer.serialize(
      data.prefixesIpv6,
      "Array<string>",
      ""
    );

    return res;
  }

  public constructor() {}
}
