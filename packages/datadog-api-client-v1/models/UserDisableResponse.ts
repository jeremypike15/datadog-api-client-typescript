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
* Array of user disabled for a given organization.
*/

export class UserDisableResponse {
    /**
    * Information pertaining to a user disabled for a given organization.
    */
    'message'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "message": {
            "baseName": "message",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return UserDisableResponse.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): UserDisableResponse {
      let res = new UserDisableResponse();

      res.message = ObjectSerializer.deserialize(data.message, "string", "")


      return res;
    }

    static serialize(data: UserDisableResponse): {[key: string]: any} {
        let attributeTypes = UserDisableResponse.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.message = ObjectSerializer.serialize(data.message, "string", "")

        return res
    }
    
    public constructor() {
    }
}



