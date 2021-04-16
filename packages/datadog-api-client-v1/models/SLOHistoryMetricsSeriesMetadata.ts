/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOHistoryMetricsSeriesMetadataUnit } from './SLOHistoryMetricsSeriesMetadataUnit';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Query metadata.
*/

export class SLOHistoryMetricsSeriesMetadata {
    /**
    * Query aggregator function.
    */
    'aggr'?: string;
    /**
    * Query expression.
    */
    'expression'?: string;
    /**
    * Query metric used.
    */
    'metric'?: string;
    /**
    * Query index from original combined query.
    */
    'queryIndex'?: number;
    /**
    * Query scope.
    */
    'scope'?: string;
    /**
    * An array of metric units that contains up to two unit objects. For example, bytes represents one unit object and bytes per second represents two unit objects. If a metric query only has one unit object, the second array element is null.
    */
    'unit'?: Array<SLOHistoryMetricsSeriesMetadataUnit>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "aggr": {
            "baseName": "aggr",
            "type": "string",
            "format": ""
        },
        "expression": {
            "baseName": "expression",
            "type": "string",
            "format": ""
        },
        "metric": {
            "baseName": "metric",
            "type": "string",
            "format": ""
        },
        "queryIndex": {
            "baseName": "query_index",
            "type": "number",
            "format": "int64"
        },
        "scope": {
            "baseName": "scope",
            "type": "string",
            "format": ""
        },
        "unit": {
            "baseName": "unit",
            "type": "Array<SLOHistoryMetricsSeriesMetadataUnit>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SLOHistoryMetricsSeriesMetadata.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SLOHistoryMetricsSeriesMetadata {
      let res = new SLOHistoryMetricsSeriesMetadata();

      res.aggr = ObjectSerializer.deserialize(data.aggr, "string", "")

      res.expression = ObjectSerializer.deserialize(data.expression, "string", "")

      res.metric = ObjectSerializer.deserialize(data.metric, "string", "")

      res.queryIndex = ObjectSerializer.deserialize(data.query_index, "number", "int64")

      res.scope = ObjectSerializer.deserialize(data.scope, "string", "")

      res.unit = ObjectSerializer.deserialize(data.unit, "Array<SLOHistoryMetricsSeriesMetadataUnit>", "")


      return res;
    }

    static serialize(data: SLOHistoryMetricsSeriesMetadata): {[key: string]: any} {
        let attributeTypes = SLOHistoryMetricsSeriesMetadata.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.aggr = ObjectSerializer.serialize(data.aggr, "string", "")

        res.expression = ObjectSerializer.serialize(data.expression, "string", "")

        res.metric = ObjectSerializer.serialize(data.metric, "string", "")

        res.query_index = ObjectSerializer.serialize(data.queryIndex, "number", "int64")

        res.scope = ObjectSerializer.serialize(data.scope, "string", "")

        res.unit = ObjectSerializer.serialize(data.unit, "Array<SLOHistoryMetricsSeriesMetadataUnit>", "")

        return res
    }
    
    public constructor() {
    }
}



