/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IncidentIntegrationMetadataType } from './IncidentIntegrationMetadataType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* A relationship reference for an integration metadata object.
*/

export class RelationshipToIncidentIntegrationMetadataData {
    /**
    * A unique identifier that represents the integration metadata.
    */
    'id': string;
    'type': IncidentIntegrationMetadataType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "IncidentIntegrationMetadataType",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return RelationshipToIncidentIntegrationMetadataData.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): RelationshipToIncidentIntegrationMetadataData {
      let res = new RelationshipToIncidentIntegrationMetadataData();

      if (data.id === undefined) {
          throw new TypeError("missing required attribute 'id' on 'RelationshipToIncidentIntegrationMetadataData' object");
      }
      res.id = ObjectSerializer.deserialize(data.id, "string", "")

      if (data.type === undefined) {
          throw new TypeError("missing required attribute 'type' on 'RelationshipToIncidentIntegrationMetadataData' object");
      }
      if (['incident_integration_metadata', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }


      return res;
    }

    static serialize(data: RelationshipToIncidentIntegrationMetadataData): {[key: string]: any} {
        let attributeTypes = RelationshipToIncidentIntegrationMetadataData.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.id === undefined) {
            throw new TypeError("missing required attribute 'id' on 'RelationshipToIncidentIntegrationMetadataData' object");
        }
        res.id = ObjectSerializer.serialize(data.id, "string", "")

        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'RelationshipToIncidentIntegrationMetadataData' object");
        }
        if (['incident_integration_metadata', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        return res
    }
    
    public constructor() {
    }
}



