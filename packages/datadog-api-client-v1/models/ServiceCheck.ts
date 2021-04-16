/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ServiceCheckStatus } from './ServiceCheckStatus';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* An object containing service check and status.
*/

export class ServiceCheck {
    /**
    * The check.
    */
    'check': string;
    /**
    * The host name correlated with the check.
    */
    'hostName': string;
    /**
    * Message containing check status.
    */
    'message'?: string;
    'status': ServiceCheckStatus;
    /**
    * Tags related to a check.
    */
    'tags': Array<string>;
    /**
    * Time of check.
    */
    'timestamp'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "check": {
            "baseName": "check",
            "type": "string",
            "format": ""
        },
        "hostName": {
            "baseName": "host_name",
            "type": "string",
            "format": ""
        },
        "message": {
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        "status": {
            "baseName": "status",
            "type": "ServiceCheckStatus",
            "format": ""
        },
        "tags": {
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        "timestamp": {
            "baseName": "timestamp",
            "type": "number",
            "format": "int64"
        }    };

    static getAttributeTypeMap() {
        return ServiceCheck.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): ServiceCheck {
      let res = new ServiceCheck();

      if (data.check === undefined) {
          throw new TypeError("missing required attribute 'check' on 'ServiceCheck' object");
      }
      res.check = ObjectSerializer.deserialize(data.check, "string", "")

      if (data.host_name === undefined) {
          throw new TypeError("missing required attribute 'host_name' on 'ServiceCheck' object");
      }
      res.hostName = ObjectSerializer.deserialize(data.host_name, "string", "")

      res.message = ObjectSerializer.deserialize(data.message, "string", "")

      if (data.status === undefined) {
          throw new TypeError("missing required attribute 'status' on 'ServiceCheck' object");
      }
      if ([0, 1, 2, 3, undefined].includes(data.status)) {
          res.status = data.status;
      } else {
          throw TypeError(`invalid enum value ${ data.status } for status`);
      }

      if (data.tags === undefined) {
          throw new TypeError("missing required attribute 'tags' on 'ServiceCheck' object");
      }
      res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "")

      res.timestamp = ObjectSerializer.deserialize(data.timestamp, "number", "int64")


      return res;
    }

    static serialize(data: ServiceCheck): {[key: string]: any} {
        let attributeTypes = ServiceCheck.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.check === undefined) {
            throw new TypeError("missing required attribute 'check' on 'ServiceCheck' object");
        }
        res.check = ObjectSerializer.serialize(data.check, "string", "")

        if (data.hostName === undefined) {
            throw new TypeError("missing required attribute 'host_name' on 'ServiceCheck' object");
        }
        res.host_name = ObjectSerializer.serialize(data.hostName, "string", "")

        res.message = ObjectSerializer.serialize(data.message, "string", "")

        if (data.status === undefined) {
            throw new TypeError("missing required attribute 'status' on 'ServiceCheck' object");
        }
        if ([0, 1, 2, 3, undefined].includes(data.status)) {
            res.status = data.status;
        } else {
            throw TypeError(`invalid enum value ${ data.status } for status`);
        }

        if (data.tags === undefined) {
            throw new TypeError("missing required attribute 'tags' on 'ServiceCheck' object");
        }
        res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "")

        res.timestamp = ObjectSerializer.serialize(data.timestamp, "number", "int64")

        return res
    }
    
    public constructor() {
    }
}



