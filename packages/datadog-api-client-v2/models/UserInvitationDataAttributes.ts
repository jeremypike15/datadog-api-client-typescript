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
* Attributes of a user invitation.
*/

export class UserInvitationDataAttributes {
    /**
    * Creation time of the user invitation.
    */
    'createdAt'?: Date;
    /**
    * Time of invitation expiration.
    */
    'expiresAt'?: Date;
    /**
    * Type of invitation.
    */
    'inviteType'?: string;
    /**
    * UUID of the user invitation.
    */
    'uuid'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "createdAt": {
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        "expiresAt": {
            "baseName": "expires_at",
            "type": "Date",
            "format": "date-time"
        },
        "inviteType": {
            "baseName": "invite_type",
            "type": "string",
            "format": ""
        },
        "uuid": {
            "baseName": "uuid",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return UserInvitationDataAttributes.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): UserInvitationDataAttributes {
      let res = new UserInvitationDataAttributes();

      res.createdAt = ObjectSerializer.deserialize(data.created_at, "Date", "date-time")

      res.expiresAt = ObjectSerializer.deserialize(data.expires_at, "Date", "date-time")

      res.inviteType = ObjectSerializer.deserialize(data.invite_type, "string", "")

      res.uuid = ObjectSerializer.deserialize(data.uuid, "string", "")


      return res;
    }

    static serialize(data: UserInvitationDataAttributes): {[key: string]: any} {
        let attributeTypes = UserInvitationDataAttributes.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.created_at = ObjectSerializer.serialize(data.createdAt, "Date", "date-time")

        res.expires_at = ObjectSerializer.serialize(data.expiresAt, "Date", "date-time")

        res.invite_type = ObjectSerializer.serialize(data.inviteType, "string", "")

        res.uuid = ObjectSerializer.serialize(data.uuid, "string", "")

        return res
    }
    
    public constructor() {
    }
}



