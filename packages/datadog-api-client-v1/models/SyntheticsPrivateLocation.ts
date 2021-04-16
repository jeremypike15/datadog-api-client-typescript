/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsPrivateLocationSecrets } from './SyntheticsPrivateLocationSecrets';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Object containing information about the private location to create.
*/

export class SyntheticsPrivateLocation {
    /**
    * Description of the private location.
    */
    'description': string;
    /**
    * Unique identifier of the private location.
    */
    'id'?: string;
    /**
    * Name of the private location.
    */
    'name': string;
    'secrets'?: SyntheticsPrivateLocationSecrets;
    /**
    * Array of tags attached to the private location.
    */
    'tags': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "description": {
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "secrets": {
            "baseName": "secrets",
            "type": "SyntheticsPrivateLocationSecrets",
            "format": ""
        },
        "tags": {
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SyntheticsPrivateLocation.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SyntheticsPrivateLocation {
      let res = new SyntheticsPrivateLocation();

      if (data.description === undefined) {
          throw new TypeError("missing required attribute 'description' on 'SyntheticsPrivateLocation' object");
      }
      res.description = ObjectSerializer.deserialize(data.description, "string", "")

      res.id = ObjectSerializer.deserialize(data.id, "string", "")

      if (data.name === undefined) {
          throw new TypeError("missing required attribute 'name' on 'SyntheticsPrivateLocation' object");
      }
      res.name = ObjectSerializer.deserialize(data.name, "string", "")

      res.secrets = ObjectSerializer.deserialize(data.secrets, "SyntheticsPrivateLocationSecrets", "")

      if (data.tags === undefined) {
          throw new TypeError("missing required attribute 'tags' on 'SyntheticsPrivateLocation' object");
      }
      res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "")


      return res;
    }

    static serialize(data: SyntheticsPrivateLocation): {[key: string]: any} {
        let attributeTypes = SyntheticsPrivateLocation.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.description === undefined) {
            throw new TypeError("missing required attribute 'description' on 'SyntheticsPrivateLocation' object");
        }
        res.description = ObjectSerializer.serialize(data.description, "string", "")

        res.id = ObjectSerializer.serialize(data.id, "string", "")

        if (data.name === undefined) {
            throw new TypeError("missing required attribute 'name' on 'SyntheticsPrivateLocation' object");
        }
        res.name = ObjectSerializer.serialize(data.name, "string", "")

        res.secrets = ObjectSerializer.serialize(data.secrets, "SyntheticsPrivateLocationSecrets", "")

        if (data.tags === undefined) {
            throw new TypeError("missing required attribute 'tags' on 'SyntheticsPrivateLocation' object");
        }
        res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "")

        return res
    }
    
    public constructor() {
    }
}



