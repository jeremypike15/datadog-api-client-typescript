/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsGlobalVariableParseTestOptionsType } from './SyntheticsGlobalVariableParseTestOptionsType';
import { SyntheticsVariableParser } from './SyntheticsVariableParser';
import { HttpFile } from '../http/http';

/**
* Parsing options for variables to extract.
*/
export class SyntheticsParsingOptions {
    /**
    * When type is `http_header`, name of the header to use to extract the value.
    */
    'field'?: string;
    /**
    * Name of the variable to extract.
    */
    'name'?: string;
    'parser'?: SyntheticsVariableParser;
    'type'?: SyntheticsGlobalVariableParseTestOptionsType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "parser",
            "baseName": "parser",
            "type": "SyntheticsVariableParser",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SyntheticsGlobalVariableParseTestOptionsType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsParsingOptions.attributeTypeMap;
    }
    
    public constructor() {
    }
}
