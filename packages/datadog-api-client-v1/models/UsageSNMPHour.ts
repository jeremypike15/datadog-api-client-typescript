/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The number of SNMP devices for each hour for a given organization.
*/

export class UsageSNMPHour {
    /**
    * The hour for the usage.
    */
    'hour'?: Date;
    /**
    * Contains the number of SNMP devices.
    */
    'snmpDevices'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "hour": {
            "baseName": "hour",
            "type": "Date",
            "format": "date-time"
        },
        "snmpDevices": {
            "baseName": "snmp_devices",
            "type": "number",
            "format": "int64"
        }    };

    static getAttributeTypeMap() {
        return UsageSNMPHour.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): UsageSNMPHour {
      let res = new UsageSNMPHour();

      res.hour = ObjectSerializer.deserialize(data.hour, "Date", "date-time")

      res.snmpDevices = ObjectSerializer.deserialize(data.snmp_devices, "number", "int64")


      return res;
    }

    static serialize(data: UsageSNMPHour): {[key: string]: any} {
        let attributeTypes = UsageSNMPHour.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.hour = ObjectSerializer.serialize(data.hour, "Date", "date-time")

        res.snmp_devices = ObjectSerializer.serialize(data.snmpDevices, "number", "int64")

        return res
    }
    
    public constructor() {
    }
}



