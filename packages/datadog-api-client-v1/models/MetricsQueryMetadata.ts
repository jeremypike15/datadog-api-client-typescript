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

import { MetricsQueryUnit } from './MetricsQueryUnit';
import { HttpFile } from '../http/http';

/**
* Object containing all metric names returned and their associated metadata.
*/
export class MetricsQueryMetadata {
    /**
    * Aggregation type.
    */
    'aggr'?: string;
    /**
    * Display name of the metric.
    */
    'displayName'?: string;
    /**
    * End of the time window, milliseconds since Unix epoch.
    */
    'end'?: number;
    /**
    * Metric expression.
    */
    'expression'?: string;
    /**
    * Number of seconds between data samples.
    */
    'interval'?: number;
    /**
    * Number of data samples.
    */
    'length'?: number;
    /**
    * Metric name.
    */
    'metric'?: string;
    /**
    * List of points of the time series.
    */
    'pointlist'?: Array<Array<number>>;
    /**
    * Metric scope, comma separated list of tags.
    */
    'scope'?: string;
    /**
    * Start of the time window, milliseconds since Unix epoch.
    */
    'start'?: number;
    /**
    * Detailed information about the metric unit. First element describes the \"primary unit\" (for example, `bytes` in `bytes per second`), second describes the \"per unit\" (for example, `second` in `bytes per second`).
    */
    'unit'?: Array<MetricsQueryUnit>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "aggr",
            "baseName": "aggr",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayName",
            "baseName": "display_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "expression",
            "baseName": "expression",
            "type": "string",
            "format": ""
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "length",
            "baseName": "length",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "metric",
            "baseName": "metric",
            "type": "string",
            "format": ""
        },
        {
            "name": "pointlist",
            "baseName": "pointlist",
            "type": "Array<Array<number>>",
            "format": "double"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string",
            "format": ""
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "Array<MetricsQueryUnit>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricsQueryMetadata.attributeTypeMap;
    }
    
    public constructor() {
    }
}

