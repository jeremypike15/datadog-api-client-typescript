/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsConfigVariableType } from './SyntheticsConfigVariableType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Object defining a variable that can be used in your test configuration.
*/

export class SyntheticsConfigVariable {
    /**
    * Example for the variable.
    */
    'example': string;
    /**
    * Name of the variable.
    */
    'name': string;
    /**
    * Pattern of the variable.
    */
    'pattern'?: string;
    'type': SyntheticsConfigVariableType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "example": {
            "baseName": "example",
            "type": "string",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "pattern": {
            "baseName": "pattern",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "SyntheticsConfigVariableType",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SyntheticsConfigVariable.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SyntheticsConfigVariable {
      let res = new SyntheticsConfigVariable();

      if (data.example === undefined) {
          throw new TypeError("missing required attribute 'example' on 'SyntheticsConfigVariable' object");
      }
      res.example = ObjectSerializer.deserialize(data.example, "string", "")

      if (data.name === undefined) {
          throw new TypeError("missing required attribute 'name' on 'SyntheticsConfigVariable' object");
      }
      res.name = ObjectSerializer.deserialize(data.name, "string", "")

      res.pattern = ObjectSerializer.deserialize(data.pattern, "string", "")

      if (data.type === undefined) {
          throw new TypeError("missing required attribute 'type' on 'SyntheticsConfigVariable' object");
      }
      if (['text', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }


      return res;
    }

    static serialize(data: SyntheticsConfigVariable): {[key: string]: any} {
        let attributeTypes = SyntheticsConfigVariable.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.example === undefined) {
            throw new TypeError("missing required attribute 'example' on 'SyntheticsConfigVariable' object");
        }
        res.example = ObjectSerializer.serialize(data.example, "string", "")

        if (data.name === undefined) {
            throw new TypeError("missing required attribute 'name' on 'SyntheticsConfigVariable' object");
        }
        res.name = ObjectSerializer.serialize(data.name, "string", "")

        res.pattern = ObjectSerializer.serialize(data.pattern, "string", "")

        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'SyntheticsConfigVariable' object");
        }
        if (['text', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        return res
    }
    
    public constructor() {
    }
}



