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
* The event query.
*/

export class EventQueryDefinition {
    /**
    * The query being made on the event.
    */
    'search': string;
    /**
    * The execution method for multi-value filters. Can be either and or or.
    */
    'tagsExecution': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "search": {
            "baseName": "search",
            "type": "string",
            "format": ""
        },
        "tagsExecution": {
            "baseName": "tags_execution",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return EventQueryDefinition.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): EventQueryDefinition {
      let res = new EventQueryDefinition();

      if (data.search === undefined) {
          throw new TypeError("missing required attribute 'search' on 'EventQueryDefinition' object");
      }
      res.search = ObjectSerializer.deserialize(data.search, "string", "")

      if (data.tags_execution === undefined) {
          throw new TypeError("missing required attribute 'tags_execution' on 'EventQueryDefinition' object");
      }
      res.tagsExecution = ObjectSerializer.deserialize(data.tags_execution, "string", "")


      return res;
    }

    static serialize(data: EventQueryDefinition): {[key: string]: any} {
        let attributeTypes = EventQueryDefinition.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.search === undefined) {
            throw new TypeError("missing required attribute 'search' on 'EventQueryDefinition' object");
        }
        res.search = ObjectSerializer.serialize(data.search, "string", "")

        if (data.tagsExecution === undefined) {
            throw new TypeError("missing required attribute 'tags_execution' on 'EventQueryDefinition' object");
        }
        res.tags_execution = ObjectSerializer.serialize(data.tagsExecution, "string", "")

        return res
    }
    
    public constructor() {
    }
}



