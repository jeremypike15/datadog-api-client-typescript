/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentServiceRelationships } from "./IncidentServiceRelationships";
import { IncidentServiceResponseAttributes } from "./IncidentServiceResponseAttributes";
import { IncidentServiceType } from "./IncidentServiceType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Incident Service data from responses.
 */

export class IncidentServiceResponseData {
  "attributes"?: IncidentServiceResponseAttributes;
  /**
   * The incident service's ID.
   */
  "id": string;
  "relationships"?: IncidentServiceRelationships;
  "type": IncidentServiceType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "IncidentServiceResponseAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentServiceRelationships",
      format: "",
    },
    type: {
      baseName: "type",
      type: "IncidentServiceType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return IncidentServiceResponseData.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): IncidentServiceResponseData {
    const res = new IncidentServiceResponseData();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "IncidentServiceResponseAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'IncidentServiceResponseData' object"
      );
    }
    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    res.relationships = ObjectSerializer.deserialize(
      data.relationships,
      "IncidentServiceRelationships",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'IncidentServiceResponseData' object"
      );
    }
    if (["services", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new IncidentServiceResponseData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: IncidentServiceResponseData): { [key: string]: any } {
    const attributeTypes = IncidentServiceResponseData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "IncidentServiceResponseAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'IncidentServiceResponseData' object"
      );
    }
    res.id = ObjectSerializer.serialize(data.id, "string", "");

    res.relationships = ObjectSerializer.serialize(
      data.relationships,
      "IncidentServiceRelationships",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'IncidentServiceResponseData' object"
      );
    }
    if (["services", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
