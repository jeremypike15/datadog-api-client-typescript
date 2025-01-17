/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentResponseAttributes } from "./IncidentResponseAttributes";
import { IncidentResponseRelationships } from "./IncidentResponseRelationships";
import { IncidentType } from "./IncidentType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Incident data from a response.
 */

export class IncidentResponseData {
  "attributes"?: IncidentResponseAttributes;
  /**
   * The incident's ID.
   */
  "id": string;
  "relationships"?: IncidentResponseRelationships;
  "type": IncidentType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "IncidentResponseAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    relationships: {
      baseName: "relationships",
      type: "IncidentResponseRelationships",
      format: "",
    },
    type: {
      baseName: "type",
      type: "IncidentType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return IncidentResponseData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): IncidentResponseData {
    const res = new IncidentResponseData();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "IncidentResponseAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'IncidentResponseData' object"
      );
    }
    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    res.relationships = ObjectSerializer.deserialize(
      data.relationships,
      "IncidentResponseRelationships",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'IncidentResponseData' object"
      );
    }
    if (["incidents", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new IncidentResponseData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: IncidentResponseData): { [key: string]: any } {
    const attributeTypes = IncidentResponseData.getAttributeTypeMap();
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
      "IncidentResponseAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'IncidentResponseData' object"
      );
    }
    res.id = ObjectSerializer.serialize(data.id, "string", "");

    res.relationships = ObjectSerializer.serialize(
      data.relationships,
      "IncidentResponseRelationships",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'IncidentResponseData' object"
      );
    }
    if (["incidents", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
