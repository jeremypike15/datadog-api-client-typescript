/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBatchResult } from "./SyntheticsBatchResult";
import { SyntheticsCIBatchMetadata } from "./SyntheticsCIBatchMetadata";
import { SyntheticsStatus } from "./SyntheticsStatus";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Wrapper object that contains the details of a batch.
 */

export class SyntheticsBatchDetailsData {
  "metadata"?: SyntheticsCIBatchMetadata;
  /**
   * List of results for the batch.
   */
  "results"?: Array<SyntheticsBatchResult>;
  "status"?: SyntheticsStatus;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    metadata: {
      baseName: "metadata",
      type: "SyntheticsCIBatchMetadata",
      format: "",
    },
    results: {
      baseName: "results",
      type: "Array<SyntheticsBatchResult>",
      format: "",
    },
    status: {
      baseName: "status",
      type: "SyntheticsStatus",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBatchDetailsData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SyntheticsBatchDetailsData {
    const res = new SyntheticsBatchDetailsData();

    res.metadata = ObjectSerializer.deserialize(
      data.metadata,
      "SyntheticsCIBatchMetadata",
      ""
    );

    res.results = ObjectSerializer.deserialize(
      data.results,
      "Array<SyntheticsBatchResult>",
      ""
    );

    if (["passed", "skipped", "failed", undefined].includes(data.status)) {
      res.status = data.status;
    } else {
      const raw = new SyntheticsBatchDetailsData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: SyntheticsBatchDetailsData): { [key: string]: any } {
    const attributeTypes = SyntheticsBatchDetailsData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.metadata = ObjectSerializer.serialize(
      data.metadata,
      "SyntheticsCIBatchMetadata",
      ""
    );

    res.results = ObjectSerializer.serialize(
      data.results,
      "Array<SyntheticsBatchResult>",
      ""
    );

    if (["passed", "skipped", "failed", undefined].includes(data.status)) {
      res.status = data.status;
    } else {
      throw TypeError(`invalid enum value ${data.status} for status`);
    }

    return res;
  }

  public constructor() {}
}