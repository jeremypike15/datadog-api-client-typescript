/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricFilter } from './LogsMetricFilter';
import { LogsMetricGroupBy } from './LogsMetricGroupBy';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The log-based metric properties that will be updated.
*/

export class LogsMetricUpdateAttributes {
    'filter'?: LogsMetricFilter;
    /**
    * The rules for the group by.
    */
    'groupBy'?: Array<LogsMetricGroupBy>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "filter": {
            "baseName": "filter",
            "type": "LogsMetricFilter",
            "format": ""
        },
        "groupBy": {
            "baseName": "group_by",
            "type": "Array<LogsMetricGroupBy>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return LogsMetricUpdateAttributes.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): LogsMetricUpdateAttributes {
      let res = new LogsMetricUpdateAttributes();

      res.filter = ObjectSerializer.deserialize(data.filter, "LogsMetricFilter", "")

      res.groupBy = ObjectSerializer.deserialize(data.group_by, "Array<LogsMetricGroupBy>", "")


      return res;
    }

    static serialize(data: LogsMetricUpdateAttributes): {[key: string]: any} {
        let attributeTypes = LogsMetricUpdateAttributes.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.filter = ObjectSerializer.serialize(data.filter, "LogsMetricFilter", "")

        res.group_by = ObjectSerializer.serialize(data.groupBy, "Array<LogsMetricGroupBy>", "")

        return res
    }
    
    public constructor() {
    }
}



