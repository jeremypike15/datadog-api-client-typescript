/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentFieldAttributes } from './IncidentFieldAttributes';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The incident's attributes for an update request.
*/

export class IncidentUpdateAttributes {
    /**
    * Timestamp when customers were no longer impacted by the incident.
    */
    'customerImpactEnd'?: Date;
    /**
    * A summary of the impact customers experienced during the incident.
    */
    'customerImpactScope'?: string;
    /**
    * Timestamp when customers began being impacted by the incident.
    */
    'customerImpactStart'?: Date;
    /**
    * A flag indicating whether the incident caused customer impact.
    */
    'customerImpacted'?: boolean;
    /**
    * Timestamp when the incident was detected.
    */
    'detected'?: Date;
    /**
    * A condensed view of the user-defined fields for which to update selections.
    */
    'fields'?: { [key: string]: IncidentFieldAttributes; };
    /**
    * Notification handles that will be notified of the incident during update.
    */
    'notificationHandles'?: Array<string>;
    /**
    * Timestamp when the incident's state was set to resolved.
    */
    'resolved'?: Date;
    /**
    * The title of the incident, which summarizes what happened.
    */
    'title'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "customerImpactEnd": {
            "baseName": "customer_impact_end",
            "type": "Date",
            "format": "date-time"
        },
        "customerImpactScope": {
            "baseName": "customer_impact_scope",
            "type": "string",
            "format": ""
        },
        "customerImpactStart": {
            "baseName": "customer_impact_start",
            "type": "Date",
            "format": "date-time"
        },
        "customerImpacted": {
            "baseName": "customer_impacted",
            "type": "boolean",
            "format": ""
        },
        "detected": {
            "baseName": "detected",
            "type": "Date",
            "format": "date-time"
        },
        "fields": {
            "baseName": "fields",
            "type": "{ [key: string]: IncidentFieldAttributes; }",
            "format": ""
        },
        "notificationHandles": {
            "baseName": "notification_handles",
            "type": "Array<string>",
            "format": ""
        },
        "resolved": {
            "baseName": "resolved",
            "type": "Date",
            "format": "date-time"
        },
        "title": {
            "baseName": "title",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return IncidentUpdateAttributes.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): IncidentUpdateAttributes {
      let res = new IncidentUpdateAttributes();

      res.customerImpactEnd = ObjectSerializer.deserialize(data.customer_impact_end, "Date", "date-time")

      res.customerImpactScope = ObjectSerializer.deserialize(data.customer_impact_scope, "string", "")

      res.customerImpactStart = ObjectSerializer.deserialize(data.customer_impact_start, "Date", "date-time")

      res.customerImpacted = ObjectSerializer.deserialize(data.customer_impacted, "boolean", "")

      res.detected = ObjectSerializer.deserialize(data.detected, "Date", "date-time")

      res.fields = ObjectSerializer.deserialize(data.fields, "{ [key: string]: IncidentFieldAttributes; }", "")

      res.notificationHandles = ObjectSerializer.deserialize(data.notification_handles, "Array<string>", "")

      res.resolved = ObjectSerializer.deserialize(data.resolved, "Date", "date-time")

      res.title = ObjectSerializer.deserialize(data.title, "string", "")


      return res;
    }

    static serialize(data: IncidentUpdateAttributes): {[key: string]: any} {
        let attributeTypes = IncidentUpdateAttributes.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.customer_impact_end = ObjectSerializer.serialize(data.customerImpactEnd, "Date", "date-time")

        res.customer_impact_scope = ObjectSerializer.serialize(data.customerImpactScope, "string", "")

        res.customer_impact_start = ObjectSerializer.serialize(data.customerImpactStart, "Date", "date-time")

        res.customer_impacted = ObjectSerializer.serialize(data.customerImpacted, "boolean", "")

        res.detected = ObjectSerializer.serialize(data.detected, "Date", "date-time")

        res.fields = ObjectSerializer.serialize(data.fields, "{ [key: string]: IncidentFieldAttributes; }", "")

        res.notification_handles = ObjectSerializer.serialize(data.notificationHandles, "Array<string>", "")

        res.resolved = ObjectSerializer.serialize(data.resolved, "Date", "date-time")

        res.title = ObjectSerializer.serialize(data.title, "string", "")

        return res
    }
    
    public constructor() {
    }
}



