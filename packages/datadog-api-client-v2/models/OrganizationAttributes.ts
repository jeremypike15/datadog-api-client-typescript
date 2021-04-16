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
* Attributes of the organization.
*/

export class OrganizationAttributes {
    /**
    * Creation time of the organization.
    */
    'createdAt'?: Date;
    /**
    * Description of the organization.
    */
    'description'?: string;
    /**
    * Whether or not the organization is disabled.
    */
    'disabled'?: boolean;
    /**
    * Time of last organization modification.
    */
    'modifiedAt'?: Date;
    /**
    * Name of the organization.
    */
    'name'?: string;
    /**
    * Public ID of the organization.
    */
    'publicId'?: string;
    /**
    * Sharing type of the organization.
    */
    'sharing'?: string;
    /**
    * URL of the site that this organization exists at.
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "createdAt": {
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        "description": {
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        "disabled": {
            "baseName": "disabled",
            "type": "boolean",
            "format": ""
        },
        "modifiedAt": {
            "baseName": "modified_at",
            "type": "Date",
            "format": "date-time"
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "publicId": {
            "baseName": "public_id",
            "type": "string",
            "format": ""
        },
        "sharing": {
            "baseName": "sharing",
            "type": "string",
            "format": ""
        },
        "url": {
            "baseName": "url",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return OrganizationAttributes.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): OrganizationAttributes {
      let res = new OrganizationAttributes();

      res.createdAt = ObjectSerializer.deserialize(data.created_at, "Date", "date-time")

      res.description = ObjectSerializer.deserialize(data.description, "string", "")

      res.disabled = ObjectSerializer.deserialize(data.disabled, "boolean", "")

      res.modifiedAt = ObjectSerializer.deserialize(data.modified_at, "Date", "date-time")

      res.name = ObjectSerializer.deserialize(data.name, "string", "")

      res.publicId = ObjectSerializer.deserialize(data.public_id, "string", "")

      res.sharing = ObjectSerializer.deserialize(data.sharing, "string", "")

      res.url = ObjectSerializer.deserialize(data.url, "string", "")


      return res;
    }

    static serialize(data: OrganizationAttributes): {[key: string]: any} {
        let attributeTypes = OrganizationAttributes.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.created_at = ObjectSerializer.serialize(data.createdAt, "Date", "date-time")

        res.description = ObjectSerializer.serialize(data.description, "string", "")

        res.disabled = ObjectSerializer.serialize(data.disabled, "boolean", "")

        res.modified_at = ObjectSerializer.serialize(data.modifiedAt, "Date", "date-time")

        res.name = ObjectSerializer.serialize(data.name, "string", "")

        res.public_id = ObjectSerializer.serialize(data.publicId, "string", "")

        res.sharing = ObjectSerializer.serialize(data.sharing, "string", "")

        res.url = ObjectSerializer.serialize(data.url, "string", "")

        return res
    }
    
    public constructor() {
    }
}



