/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentFieldAttributesValueType } from './IncidentFieldAttributesValueType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* A field with potentially multiple values selected.
*/

export class IncidentFieldAttributesMultipleValue {
    'type'?: IncidentFieldAttributesValueType;
    /**
    * The multiple values selected for this field.
    */
    'value'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "type": {
            "baseName": "type",
            "type": "IncidentFieldAttributesValueType",
            "format": ""
        },
        "value": {
            "baseName": "value",
            "type": "Array<string>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return IncidentFieldAttributesMultipleValue.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): IncidentFieldAttributesMultipleValue {
      let res = new IncidentFieldAttributesMultipleValue();

      if (['multiselect', 'textarray', 'metrictag', 'autocomplete', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }

      res.value = ObjectSerializer.deserialize(data.value, "Array<string>", "")


      return res;
    }

    static serialize(data: IncidentFieldAttributesMultipleValue): {[key: string]: any} {
        let attributeTypes = IncidentFieldAttributesMultipleValue.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (['multiselect', 'textarray', 'metrictag', 'autocomplete', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        res.value = ObjectSerializer.serialize(data.value, "Array<string>", "")

        return res
    }
    
    public constructor() {
    }
}



