/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

/**
 * An object defining the recurrence of the downtime.
 */

export class DowntimeRecurrence {
  /**
   * How often to repeat as an integer. For example, to repeat every 3 days, select a type of `days` and a period of `3`.
   */
  "period"?: number;
  /**
   * The `RRULE` standard for defining recurring events (**requires to set \"type\" to rrule**) For example, to have a recurring event on the first day of each month, set the type to `rrule` and set the `FREQ` to `MONTHLY` and `BYMONTHDAY` to `1`. Most common `rrule` options from the [iCalendar Spec](https://tools.ietf.org/html/rfc5545) are supported.  **Note**: Attributes specifying the duration in `RRULE` are not supported (for example, `DTSTART`, `DTEND`, `DURATION`). More examples available in this [downtime guide](https://docs.datadoghq.com/monitors/guide/suppress-alert-with-downtimes/?tab=api)
   */
  "rrule"?: string;
  /**
   * The type of recurrence. Choose from `days`, `weeks`, `months`, `years`, `rrule`.
   */
  "type"?: string;
  /**
   * The date at which the recurrence should end as a POSIX timestamp. `until_occurences` and `until_date` are mutually exclusive.
   */
  "untilDate"?: number;
  /**
   * How many times the downtime is rescheduled. `until_occurences` and `until_date` are mutually exclusive.
   */
  "untilOccurrences"?: number;
  /**
   * A list of week days to repeat on. Choose from `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat` or `Sun`. Only applicable when type is weeks. First letter must be capitalized.
   */
  "weekDays"?: Array<string>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    period: {
      baseName: "period",
      type: "number",
      format: "int32",
    },
    rrule: {
      baseName: "rrule",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "string",
      format: "",
    },
    untilDate: {
      baseName: "until_date",
      type: "number",
      format: "int64",
    },
    untilOccurrences: {
      baseName: "until_occurrences",
      type: "number",
      format: "int32",
    },
    weekDays: {
      baseName: "week_days",
      type: "Array<string>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return DowntimeRecurrence.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): DowntimeRecurrence {
    const res = new DowntimeRecurrence();

    res.period = ObjectSerializer.deserialize(data.period, "number", "int32");

    res.rrule = ObjectSerializer.deserialize(data.rrule, "string", "");

    res.type = ObjectSerializer.deserialize(data.type, "string", "");

    res.untilDate = ObjectSerializer.deserialize(
      data.until_date,
      "number",
      "int64"
    );

    res.untilOccurrences = ObjectSerializer.deserialize(
      data.until_occurrences,
      "number",
      "int32"
    );

    res.weekDays = ObjectSerializer.deserialize(
      data.week_days,
      "Array<string>",
      ""
    );

    return res;
  }

  static serialize(data: DowntimeRecurrence): { [key: string]: any } {
    const attributeTypes = DowntimeRecurrence.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.period = ObjectSerializer.serialize(data.period, "number", "int32");

    res.rrule = ObjectSerializer.serialize(data.rrule, "string", "");

    res.type = ObjectSerializer.serialize(data.type, "string", "");

    res.until_date = ObjectSerializer.serialize(
      data.untilDate,
      "number",
      "int64"
    );

    res.until_occurrences = ObjectSerializer.serialize(
      data.untilOccurrences,
      "number",
      "int32"
    );

    res.week_days = ObjectSerializer.serialize(
      data.weekDays,
      "Array<string>",
      ""
    );

    return res;
  }

  public constructor() {}
}
