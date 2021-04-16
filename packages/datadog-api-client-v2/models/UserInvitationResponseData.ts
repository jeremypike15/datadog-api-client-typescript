/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserInvitationDataAttributes } from './UserInvitationDataAttributes';
import { UserInvitationsType } from './UserInvitationsType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Object of a user invitation returned by the API.
*/

export class UserInvitationResponseData {
    'attributes'?: UserInvitationDataAttributes;
    /**
    * ID of the user invitation.
    */
    'id'?: string;
    'type'?: UserInvitationsType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "attributes": {
            "baseName": "attributes",
            "type": "UserInvitationDataAttributes",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "UserInvitationsType",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return UserInvitationResponseData.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): UserInvitationResponseData {
      let res = new UserInvitationResponseData();

      res.attributes = ObjectSerializer.deserialize(data.attributes, "UserInvitationDataAttributes", "")

      res.id = ObjectSerializer.deserialize(data.id, "string", "")

      if (['user_invitations', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }


      return res;
    }

    static serialize(data: UserInvitationResponseData): {[key: string]: any} {
        let attributeTypes = UserInvitationResponseData.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.attributes = ObjectSerializer.serialize(data.attributes, "UserInvitationDataAttributes", "")

        res.id = ObjectSerializer.serialize(data.id, "string", "")

        if (['user_invitations', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        return res
    }
    
    public constructor() {
    }
}



