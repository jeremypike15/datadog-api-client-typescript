/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationKey } from './ApplicationKey';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* An application key response.
*/

export class ApplicationKeyListResponse {
    /**
    * Array of application keys.
    */
    'applicationKeys'?: Array<ApplicationKey>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "applicationKeys": {
            "baseName": "application_keys",
            "type": "Array<ApplicationKey>",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return ApplicationKeyListResponse.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): ApplicationKeyListResponse {
      let res = new ApplicationKeyListResponse();

      res.applicationKeys = ObjectSerializer.deserialize(data.application_keys, "Array<ApplicationKey>", "")


      return res;
    }

    static serialize(data: ApplicationKeyListResponse): {[key: string]: any} {
        let attributeTypes = ApplicationKeyListResponse.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.application_keys = ObjectSerializer.serialize(data.applicationKeys, "Array<ApplicationKey>", "")

        return res
    }
    
    public constructor() {
    }
}



