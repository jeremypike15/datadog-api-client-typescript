/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookResourceType } from "./NotebookResourceType";
import { NotebooksResponseDataAttributes } from "./NotebooksResponseDataAttributes";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The data for a notebook in get all response.
 */

export class NotebooksResponseData {
  "attributes": NotebooksResponseDataAttributes;
  /**
   * Unique notebook ID, assigned when you create the notebook.
   */
  "id": number;
  "type": NotebookResourceType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "NotebooksResponseDataAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "NotebookResourceType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return NotebooksResponseData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): NotebooksResponseData {
    const res = new NotebooksResponseData();

    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'NotebooksResponseData' object"
      );
    }
    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "NotebooksResponseDataAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'NotebooksResponseData' object"
      );
    }
    res.id = ObjectSerializer.deserialize(data.id, "number", "int64");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'NotebooksResponseData' object"
      );
    }
    if (["notebooks", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new NotebooksResponseData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: NotebooksResponseData): { [key: string]: any } {
    const attributeTypes = NotebooksResponseData.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'NotebooksResponseData' object"
      );
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "NotebooksResponseDataAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'NotebooksResponseData' object"
      );
    }
    res.id = ObjectSerializer.serialize(data.id, "number", "int64");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'NotebooksResponseData' object"
      );
    }
    if (["notebooks", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
