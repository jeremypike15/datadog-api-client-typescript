/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* The layout for a widget on a free dashboard.
*/
export class WidgetLayout {
    /**
    * The height of the widget. Should be a non-negative integer.
    */
    'height': number;
    /**
    * The width of the widget. Should be a non-negative integer.
    */
    'width': number;
    /**
    * The position of the widget on the x (horizontal) axis. Should be a non-negative integer.
    */
    'x': number;
    /**
    * The position of the widget on the y (vertical) axis. Should be a non-negative integer.
    */
    'y': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "x",
            "baseName": "x",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "y",
            "baseName": "y",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return WidgetLayout.attributeTypeMap;
    }
    
    public constructor() {
    }
}

