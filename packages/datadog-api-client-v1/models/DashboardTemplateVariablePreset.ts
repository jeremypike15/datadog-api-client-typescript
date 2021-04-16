/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardTemplateVariablePresetValue } from './DashboardTemplateVariablePresetValue';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Template variables saved views.
*/

export class DashboardTemplateVariablePreset {
    /**
    * The name of the variable.
    */
    'name'?: string;
    /**
    * List of variables.
    */
    'templateVariables'?: Array<DashboardTemplateVariablePresetValue>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "templateVariables": {
            "baseName": "template_variables",
            "type": "Array<DashboardTemplateVariablePresetValue>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return DashboardTemplateVariablePreset.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): DashboardTemplateVariablePreset {
      let res = new DashboardTemplateVariablePreset();

      res.name = ObjectSerializer.deserialize(data.name, "string", "")

      res.templateVariables = ObjectSerializer.deserialize(data.template_variables, "Array<DashboardTemplateVariablePresetValue>", "")


      return res;
    }

    static serialize(data: DashboardTemplateVariablePreset): {[key: string]: any} {
        let attributeTypes = DashboardTemplateVariablePreset.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.name = ObjectSerializer.serialize(data.name, "string", "")

        res.template_variables = ObjectSerializer.serialize(data.templateVariables, "Array<DashboardTemplateVariablePresetValue>", "")

        return res
    }
    
    public constructor() {
    }
}



