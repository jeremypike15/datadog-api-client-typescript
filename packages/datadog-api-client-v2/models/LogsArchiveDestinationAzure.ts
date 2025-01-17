/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArchiveDestinationAzureType } from "./LogsArchiveDestinationAzureType";
import { LogsArchiveIntegrationAzure } from "./LogsArchiveIntegrationAzure";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The Azure archive destination.
 */

export class LogsArchiveDestinationAzure {
  /**
   * The container where the archive will be stored.
   */
  "container": string;
  "integration": LogsArchiveIntegrationAzure;
  /**
   * The archive path.
   */
  "path"?: string;
  /**
   * The region where the archive will be stored.
   */
  "region"?: string;
  /**
   * The associated storage account.
   */
  "storageAccount": string;
  "type": LogsArchiveDestinationAzureType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    container: {
      baseName: "container",
      type: "string",
      format: "",
    },
    integration: {
      baseName: "integration",
      type: "LogsArchiveIntegrationAzure",
      format: "",
    },
    path: {
      baseName: "path",
      type: "string",
      format: "",
    },
    region: {
      baseName: "region",
      type: "string",
      format: "",
    },
    storageAccount: {
      baseName: "storage_account",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "LogsArchiveDestinationAzureType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsArchiveDestinationAzure.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): LogsArchiveDestinationAzure {
    const res = new LogsArchiveDestinationAzure();

    if (data.container === undefined) {
      throw new TypeError(
        "missing required attribute 'container' on 'LogsArchiveDestinationAzure' object"
      );
    }
    res.container = ObjectSerializer.deserialize(data.container, "string", "");

    if (data.integration === undefined) {
      throw new TypeError(
        "missing required attribute 'integration' on 'LogsArchiveDestinationAzure' object"
      );
    }
    res.integration = ObjectSerializer.deserialize(
      data.integration,
      "LogsArchiveIntegrationAzure",
      ""
    );

    res.path = ObjectSerializer.deserialize(data.path, "string", "");

    res.region = ObjectSerializer.deserialize(data.region, "string", "");

    if (data.storage_account === undefined) {
      throw new TypeError(
        "missing required attribute 'storage_account' on 'LogsArchiveDestinationAzure' object"
      );
    }
    res.storageAccount = ObjectSerializer.deserialize(
      data.storage_account,
      "string",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsArchiveDestinationAzure' object"
      );
    }
    if (["azure", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new LogsArchiveDestinationAzure();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: LogsArchiveDestinationAzure): { [key: string]: any } {
    const attributeTypes = LogsArchiveDestinationAzure.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.container === undefined) {
      throw new TypeError(
        "missing required attribute 'container' on 'LogsArchiveDestinationAzure' object"
      );
    }
    res.container = ObjectSerializer.serialize(data.container, "string", "");

    if (data.integration === undefined) {
      throw new TypeError(
        "missing required attribute 'integration' on 'LogsArchiveDestinationAzure' object"
      );
    }
    res.integration = ObjectSerializer.serialize(
      data.integration,
      "LogsArchiveIntegrationAzure",
      ""
    );

    res.path = ObjectSerializer.serialize(data.path, "string", "");

    res.region = ObjectSerializer.serialize(data.region, "string", "");

    if (data.storageAccount === undefined) {
      throw new TypeError(
        "missing required attribute 'storage_account' on 'LogsArchiveDestinationAzure' object"
      );
    }
    res.storage_account = ObjectSerializer.serialize(
      data.storageAccount,
      "string",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsArchiveDestinationAzure' object"
      );
    }
    if (["azure", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
