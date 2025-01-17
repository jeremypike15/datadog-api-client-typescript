/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AWSLogsLambda } from "./AWSLogsLambda";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A list of all Datadog-AWS logs integrations available in your Datadog organization.
 */

export class AWSLogsListResponse {
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId"?: string;
  /**
   * List of ARNs configured in your Datadog account.
   */
  "lambdas"?: Array<AWSLogsLambda>;
  /**
   * Array of services IDs.
   */
  "services"?: Array<string>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    accountId: {
      baseName: "account_id",
      type: "string",
      format: "",
    },
    lambdas: {
      baseName: "lambdas",
      type: "Array<AWSLogsLambda>",
      format: "",
    },
    services: {
      baseName: "services",
      type: "Array<string>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return AWSLogsListResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): AWSLogsListResponse {
    const res = new AWSLogsListResponse();

    res.accountId = ObjectSerializer.deserialize(data.account_id, "string", "");

    res.lambdas = ObjectSerializer.deserialize(
      data.lambdas,
      "Array<AWSLogsLambda>",
      ""
    );

    res.services = ObjectSerializer.deserialize(
      data.services,
      "Array<string>",
      ""
    );

    return res;
  }

  static serialize(data: AWSLogsListResponse): { [key: string]: any } {
    const attributeTypes = AWSLogsListResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.account_id = ObjectSerializer.serialize(data.accountId, "string", "");

    res.lambdas = ObjectSerializer.serialize(
      data.lambdas,
      "Array<AWSLogsLambda>",
      ""
    );

    res.services = ObjectSerializer.serialize(
      data.services,
      "Array<string>",
      ""
    );

    return res;
  }

  public constructor() {}
}
