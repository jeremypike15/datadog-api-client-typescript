/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MonitorOverallStates } from './MonitorOverallStates';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Monitor state for a single group.
*/

export class MonitorStateGroup {
    /**
    * Latest timestamp the monitor was in NO_DATA state.
    */
    'lastNodataTs'?: number;
    /**
    * Latest timestamp of the notification sent for this monitor group.
    */
    'lastNotifiedTs'?: number;
    /**
    * Latest timestamp the monitor group was resolved.
    */
    'lastResolvedTs'?: number;
    /**
    * Latest timestamp the monitor group triggered.
    */
    'lastTriggeredTs'?: number;
    /**
    * The name of the monitor.
    */
    'name'?: string;
    'status'?: MonitorOverallStates;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "lastNodataTs": {
            "baseName": "last_nodata_ts",
            "type": "number",
            "format": "int64"
        },
        "lastNotifiedTs": {
            "baseName": "last_notified_ts",
            "type": "number",
            "format": "int64"
        },
        "lastResolvedTs": {
            "baseName": "last_resolved_ts",
            "type": "number",
            "format": "int64"
        },
        "lastTriggeredTs": {
            "baseName": "last_triggered_ts",
            "type": "number",
            "format": "int64"
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "status": {
            "baseName": "status",
            "type": "MonitorOverallStates",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return MonitorStateGroup.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): MonitorStateGroup {
      let res = new MonitorStateGroup();

      res.lastNodataTs = ObjectSerializer.deserialize(data.last_nodata_ts, "number", "int64")

      res.lastNotifiedTs = ObjectSerializer.deserialize(data.last_notified_ts, "number", "int64")

      res.lastResolvedTs = ObjectSerializer.deserialize(data.last_resolved_ts, "number", "int64")

      res.lastTriggeredTs = ObjectSerializer.deserialize(data.last_triggered_ts, "number", "int64")

      res.name = ObjectSerializer.deserialize(data.name, "string", "")

      if (['Alert', 'Ignored', 'No Data', 'OK', 'Skipped', 'Unknown', 'Warn', undefined].includes(data.status)) {
          res.status = data.status;
      } else {
          throw TypeError(`invalid enum value ${ data.status } for status`);
      }


      return res;
    }

    static serialize(data: MonitorStateGroup): {[key: string]: any} {
        let attributeTypes = MonitorStateGroup.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.last_nodata_ts = ObjectSerializer.serialize(data.lastNodataTs, "number", "int64")

        res.last_notified_ts = ObjectSerializer.serialize(data.lastNotifiedTs, "number", "int64")

        res.last_resolved_ts = ObjectSerializer.serialize(data.lastResolvedTs, "number", "int64")

        res.last_triggered_ts = ObjectSerializer.serialize(data.lastTriggeredTs, "number", "int64")

        res.name = ObjectSerializer.serialize(data.name, "string", "")

        if (['Alert', 'Ignored', 'No Data', 'OK', 'Skipped', 'Unknown', 'Warn', undefined].includes(data.status)) {
            res.status = data.status;
        } else {
            throw TypeError(`invalid enum value ${ data.status } for status`);
        }

        return res
    }
    
    public constructor() {
    }
}



