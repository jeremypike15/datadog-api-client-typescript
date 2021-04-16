/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AlertGraphWidgetDefinitionType } from './AlertGraphWidgetDefinitionType';
import { WidgetTextAlign } from './WidgetTextAlign';
import { WidgetTime } from './WidgetTime';
import { WidgetVizType } from './WidgetVizType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Alert graphs are timeseries graphs showing the current status of any monitor defined on your system.
*/

export class AlertGraphWidgetDefinition {
    /**
    * ID of the alert to use in the widget.
    */
    'alertId': string;
    'time'?: WidgetTime;
    /**
    * The title of the widget.
    */
    'title'?: string;
    'titleAlign'?: WidgetTextAlign;
    /**
    * Size of the title.
    */
    'titleSize'?: string;
    'type': AlertGraphWidgetDefinitionType;
    'vizType': WidgetVizType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "alertId": {
            "baseName": "alert_id",
            "type": "string",
            "format": ""
        },
        "time": {
            "baseName": "time",
            "type": "WidgetTime",
            "format": ""
        },
        "title": {
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        "titleAlign": {
            "baseName": "title_align",
            "type": "WidgetTextAlign",
            "format": ""
        },
        "titleSize": {
            "baseName": "title_size",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "AlertGraphWidgetDefinitionType",
            "format": ""
        },
        "vizType": {
            "baseName": "viz_type",
            "type": "WidgetVizType",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return AlertGraphWidgetDefinition.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): AlertGraphWidgetDefinition {
      let res = new AlertGraphWidgetDefinition();

      if (data.alert_id === undefined) {
          throw new TypeError("missing required attribute 'alert_id' on 'AlertGraphWidgetDefinition' object");
      }
      res.alertId = ObjectSerializer.deserialize(data.alert_id, "string", "")

      res.time = ObjectSerializer.deserialize(data.time, "WidgetTime", "")

      res.title = ObjectSerializer.deserialize(data.title, "string", "")

      if (['center', 'left', 'right', undefined].includes(data.title_align)) {
          res.titleAlign = data.title_align;
      } else {
          throw TypeError(`invalid enum value ${ data.title_align } for title_align`);
      }

      res.titleSize = ObjectSerializer.deserialize(data.title_size, "string", "")

      if (data.type === undefined) {
          throw new TypeError("missing required attribute 'type' on 'AlertGraphWidgetDefinition' object");
      }
      if (['alert_graph', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }

      if (data.viz_type === undefined) {
          throw new TypeError("missing required attribute 'viz_type' on 'AlertGraphWidgetDefinition' object");
      }
      if (['timeseries', 'toplist', undefined].includes(data.viz_type)) {
          res.vizType = data.viz_type;
      } else {
          throw TypeError(`invalid enum value ${ data.viz_type } for viz_type`);
      }


      return res;
    }

    static serialize(data: AlertGraphWidgetDefinition): {[key: string]: any} {
        let attributeTypes = AlertGraphWidgetDefinition.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.alertId === undefined) {
            throw new TypeError("missing required attribute 'alert_id' on 'AlertGraphWidgetDefinition' object");
        }
        res.alert_id = ObjectSerializer.serialize(data.alertId, "string", "")

        res.time = ObjectSerializer.serialize(data.time, "WidgetTime", "")

        res.title = ObjectSerializer.serialize(data.title, "string", "")

        if (['center', 'left', 'right', undefined].includes(data.titleAlign)) {
            res.title_align = data.titleAlign;
        } else {
            throw TypeError(`invalid enum value ${ data.titleAlign } for titleAlign`);
        }

        res.title_size = ObjectSerializer.serialize(data.titleSize, "string", "")

        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'AlertGraphWidgetDefinition' object");
        }
        if (['alert_graph', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        if (data.vizType === undefined) {
            throw new TypeError("missing required attribute 'viz_type' on 'AlertGraphWidgetDefinition' object");
        }
        if (['timeseries', 'toplist', undefined].includes(data.vizType)) {
            res.viz_type = data.vizType;
        } else {
            throw TypeError(`invalid enum value ${ data.vizType } for vizType`);
        }

        return res
    }
    
    public constructor() {
    }
}



