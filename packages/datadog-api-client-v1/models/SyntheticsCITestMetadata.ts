/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsCITestMetadataCi } from "./SyntheticsCITestMetadataCi";
import { SyntheticsCITestMetadataGit } from "./SyntheticsCITestMetadataGit";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Metadata for the Synthetics tests run
 */

export class SyntheticsCITestMetadata {
  "ci"?: SyntheticsCITestMetadataCi;
  "git"?: SyntheticsCITestMetadataGit;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    ci: {
      baseName: "ci",
      type: "SyntheticsCITestMetadataCi",
      format: "",
    },
    git: {
      baseName: "git",
      type: "SyntheticsCITestMetadataGit",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsCITestMetadata.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SyntheticsCITestMetadata {
    const res = new SyntheticsCITestMetadata();

    res.ci = ObjectSerializer.deserialize(
      data.ci,
      "SyntheticsCITestMetadataCi",
      ""
    );

    res.git = ObjectSerializer.deserialize(
      data.git,
      "SyntheticsCITestMetadataGit",
      ""
    );

    return res;
  }

  static serialize(data: SyntheticsCITestMetadata): { [key: string]: any } {
    const attributeTypes = SyntheticsCITestMetadata.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.ci = ObjectSerializer.serialize(
      data.ci,
      "SyntheticsCITestMetadataCi",
      ""
    );

    res.git = ObjectSerializer.serialize(
      data.git,
      "SyntheticsCITestMetadataGit",
      ""
    );

    return res;
  }

  public constructor() {}
}
