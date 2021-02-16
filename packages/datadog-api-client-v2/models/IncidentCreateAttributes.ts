/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentFieldAttributes } from './IncidentFieldAttributes';
import { IncidentTimelineCellCreateAttributes } from './IncidentTimelineCellCreateAttributes';
import { HttpFile } from '../http/http';

/**
* The incident's attributes for a create request.
*/
export class IncidentCreateAttributes {
    /**
    * A flag indicating whether the incident caused customer impact.
    */
    'customerImpacted': boolean;
    /**
    * A condensed view of the user-defined fields for which to create initial selections.
    */
    'fields'?: { [key: string]: IncidentFieldAttributes; };
    /**
    * An array of initial timeline cells to be placed at the beginning of the incident timeline.
    */
    'initialTimelineCells'?: Array<IncidentTimelineCellCreateAttributes>;
    /**
    * Notification handles that will be notified of the incident at creation.
    */
    'notificationHandles'?: Array<string>;
    /**
    * The title of the incident, which summarizes what happened.
    */
    'title': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customerImpacted",
            "baseName": "customer_impacted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "{ [key: string]: IncidentFieldAttributes; }",
            "format": ""
        },
        {
            "name": "initialTimelineCells",
            "baseName": "initial_timeline_cells",
            "type": "Array<IncidentTimelineCellCreateAttributes>",
            "format": ""
        },
        {
            "name": "notificationHandles",
            "baseName": "notification_handles",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IncidentCreateAttributes.attributeTypeMap;
    }
    
    public constructor() {
    }
}
