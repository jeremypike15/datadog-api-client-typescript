/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageSummaryDateOrg } from "./UsageSummaryDateOrg";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response with hourly report of all data billed by Datadog all organizations.
 */

export class UsageSummaryDate {
  /**
   * Shows the 99th percentile of all agent hosts over all hours in the current date for all organizations.
   */
  "agentHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Azure app services using APM over all hours in the current date all organizations.
   */
  "apmAzureAppServiceHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all distinct APM hosts over all hours in the current date for all organizations.
   */
  "apmHostTop99p"?: number;
  /**
   * Shows the sum of audit logs lines indexed over all hours in the current date for all organizations.
   */
  "auditLogsLinesIndexedSum"?: number;
  /**
   * Shows the 99th percentile of all AWS hosts over all hours in the current date for all organizations.
   */
  "awsHostTop99p"?: number;
  /**
   * Shows the average of the number of functions that executed 1 or more times each hour in the current date for all organizations.
   */
  "awsLambdaFuncCount"?: number;
  /**
   * Shows the sum of all AWS Lambda invocations over all hours in the current date for all organizations.
   */
  "awsLambdaInvocationsSum"?: number;
  /**
   * Shows the 99th percentile of all Azure app services over all hours in the current date for all organizations.
   */
  "azureAppServiceTop99p"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
   */
  "billableIngestedBytesSum"?: number;
  /**
   * Shows the average of all distinct containers over all hours in the current date for all organizations.
   */
  "containerAvg"?: number;
  /**
   * Shows the high-water mark of all distinct containers over all hours in the current date for all organizations.
   */
  "containerHwm"?: number;
  /**
   * Shows the average number of Cloud Security Posture Management containers over all hours in the current date for all organizations.
   */
  "cspmContainerAvg"?: number;
  /**
   * Shows the high-water mark of Cloud Security Posture Management containers over all hours in the current date for all organizations.
   */
  "cspmContainerHwm"?: number;
  /**
   * Shows the 99th percentile of all Cloud Security Posture Management hosts over all hours in the current date for all organizations.
   */
  "cspmHostTop99p"?: number;
  /**
   * Shows the average number of distinct custom metrics over all hours in the current date for all organizations.
   */
  "customTsAvg"?: number;
  /**
   * Shows the average of all distinct Cloud Workload Security containers over all hours in the current date for all organizations.
   */
  "cwsContainerCountAvg"?: number;
  /**
   * Shows the 99th percentile of all Cloud Workload Security hosts over all hours in the current date for all organizations.
   */
  "cwsHostTop99p"?: number;
  /**
   * The date for the usage.
   */
  "date"?: Date;
  /**
   * Shows the 99th percentile of all Database Monitoring hosts over all hours in the current date for all organizations.
   */
  "dbmHostTop99p"?: number;
  /**
   * Shows the average of all normalized Database Monitoring queries over all hours in the current date for all organizations.
   */
  "dbmQueriesCountAvg"?: number;
  /**
   * Shows the high-watermark of all Fargate tasks over all hours in the current date for all organizations.
   */
  "fargateTasksCountAvg"?: number;
  /**
   * Shows the average of all Fargate tasks over all hours in the current date for all organizations.
   */
  "fargateTasksCountHwm"?: number;
  /**
   * Shows the 99th percentile of all GCP hosts over all hours in the current date for all organizations.
   */
  "gcpHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all Heroku dynos over all hours in the current date for all organizations.
   */
  "herokuHostTop99p"?: number;
  /**
   * Shows the high-water mark of incident management monthly active users over all hours in the current date for all organizations.
   */
  "incidentManagementMonthlyActiveUsersHwm"?: number;
  /**
   * Shows the sum of all log events indexed over all hours in the current date for all organizations.
   */
  "indexedEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all distinct infrastructure hosts over all hours in the current date for all organizations.
   */
  "infraHostTop99p"?: number;
  /**
   * Shows the sum of all log bytes ingested over all hours in the current date for all organizations.
   */
  "ingestedEventsBytesSum"?: number;
  /**
   * Shows the sum of all IoT devices over all hours in the current date for all organizations.
   */
  "iotDeviceSum"?: number;
  /**
   * Shows the 99th percentile of all IoT devices over all hours in the current date all organizations.
   */
  "iotDeviceTop99p"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on Android over all hours in the current date for all organizations.
   */
  "mobileRumSessionCountAndroidSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions on iOS over all hours in the current date for all organizations.
   */
  "mobileRumSessionCountIosSum"?: number;
  /**
   * Shows the sum of all mobile RUM Sessions over all hours in the current date for all organizations
   */
  "mobileRumSessionCountSum"?: number;
  /**
   * Shows the sum of all Network flows indexed over all hours in the current date for all organizations.
   */
  "netflowIndexedEventsCountSum"?: number;
  /**
   * Shows the 99th percentile of all distinct Networks hosts over all hours in the current date for all organizations.
   */
  "npmHostTop99p"?: number;
  /**
   * Shows the 99th percentile of all hosts reported by the Datadog exporter for the OpenTelemetry Collector over all hours in the current date for all organizations.
   */
  "opentelemetryHostTop99p"?: number;
  /**
   * Organizations associated with a user.
   */
  "orgs"?: Array<UsageSummaryDateOrg>;
  /**
   * Shows the 99th percentile of all profiled hosts over all hours in the current date for all organizations.
   */
  "profilingHostTop99p"?: number;
  /**
   * Shows the sum of all browser RUM Sessions over all hours in the current date for all organizations
   */
  "rumSessionCountSum"?: number;
  /**
   * Shows the sum of RUM Sessions (browser and mobile) over all hours in the current date for all organizations.
   */
  "rumTotalSessionCountSum"?: number;
  /**
   * Shows the sum of all Synthetic browser tests over all hours in the current date for all organizations.
   */
  "syntheticsBrowserCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Synthetic API tests over all hours in the current date for all organizations.
   */
  "syntheticsCheckCallsCountSum"?: number;
  /**
   * Shows the sum of all Indexed Spans indexed over all hours in the current date for all organizations.
   */
  "traceSearchIndexedEventsCountSum"?: number;
  /**
   * Shows the sum of all tracing without limits bytes ingested over all hours in the current date for all organizations.
   */
  "twolIngestedEventsBytesSum"?: number;
  /**
   * Shows the 99th percentile of all vSphere hosts over all hours in the current date for all organizations.
   */
  "vsphereHostTop99p"?: number;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    agentHostTop99p: {
      baseName: "agent_host_top99p",
      type: "number",
      format: "int64",
    },
    apmAzureAppServiceHostTop99p: {
      baseName: "apm_azure_app_service_host_top99p",
      type: "number",
      format: "int64",
    },
    apmHostTop99p: {
      baseName: "apm_host_top99p",
      type: "number",
      format: "int64",
    },
    auditLogsLinesIndexedSum: {
      baseName: "audit_logs_lines_indexed_sum",
      type: "number",
      format: "int64",
    },
    awsHostTop99p: {
      baseName: "aws_host_top99p",
      type: "number",
      format: "int64",
    },
    awsLambdaFuncCount: {
      baseName: "aws_lambda_func_count",
      type: "number",
      format: "int64",
    },
    awsLambdaInvocationsSum: {
      baseName: "aws_lambda_invocations_sum",
      type: "number",
      format: "int64",
    },
    azureAppServiceTop99p: {
      baseName: "azure_app_service_top99p",
      type: "number",
      format: "int64",
    },
    billableIngestedBytesSum: {
      baseName: "billable_ingested_bytes_sum",
      type: "number",
      format: "int64",
    },
    containerAvg: {
      baseName: "container_avg",
      type: "number",
      format: "int64",
    },
    containerHwm: {
      baseName: "container_hwm",
      type: "number",
      format: "int64",
    },
    cspmContainerAvg: {
      baseName: "cspm_container_avg",
      type: "number",
      format: "int64",
    },
    cspmContainerHwm: {
      baseName: "cspm_container_hwm",
      type: "number",
      format: "int64",
    },
    cspmHostTop99p: {
      baseName: "cspm_host_top99p",
      type: "number",
      format: "int64",
    },
    customTsAvg: {
      baseName: "custom_ts_avg",
      type: "number",
      format: "int64",
    },
    cwsContainerCountAvg: {
      baseName: "cws_container_count_avg",
      type: "number",
      format: "int64",
    },
    cwsHostTop99p: {
      baseName: "cws_host_top99p",
      type: "number",
      format: "int64",
    },
    date: {
      baseName: "date",
      type: "Date",
      format: "date-time",
    },
    dbmHostTop99p: {
      baseName: "dbm_host_top99p",
      type: "number",
      format: "int64",
    },
    dbmQueriesCountAvg: {
      baseName: "dbm_queries_count_avg",
      type: "number",
      format: "int64",
    },
    fargateTasksCountAvg: {
      baseName: "fargate_tasks_count_avg",
      type: "number",
      format: "int64",
    },
    fargateTasksCountHwm: {
      baseName: "fargate_tasks_count_hwm",
      type: "number",
      format: "int64",
    },
    gcpHostTop99p: {
      baseName: "gcp_host_top99p",
      type: "number",
      format: "int64",
    },
    herokuHostTop99p: {
      baseName: "heroku_host_top99p",
      type: "number",
      format: "int64",
    },
    incidentManagementMonthlyActiveUsersHwm: {
      baseName: "incident_management_monthly_active_users_hwm",
      type: "number",
      format: "int64",
    },
    indexedEventsCountSum: {
      baseName: "indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    infraHostTop99p: {
      baseName: "infra_host_top99p",
      type: "number",
      format: "int64",
    },
    ingestedEventsBytesSum: {
      baseName: "ingested_events_bytes_sum",
      type: "number",
      format: "int64",
    },
    iotDeviceSum: {
      baseName: "iot_device_sum",
      type: "number",
      format: "int64",
    },
    iotDeviceTop99p: {
      baseName: "iot_device_top99p",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountAndroidSum: {
      baseName: "mobile_rum_session_count_android_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountIosSum: {
      baseName: "mobile_rum_session_count_ios_sum",
      type: "number",
      format: "int64",
    },
    mobileRumSessionCountSum: {
      baseName: "mobile_rum_session_count_sum",
      type: "number",
      format: "int64",
    },
    netflowIndexedEventsCountSum: {
      baseName: "netflow_indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    npmHostTop99p: {
      baseName: "npm_host_top99p",
      type: "number",
      format: "int64",
    },
    opentelemetryHostTop99p: {
      baseName: "opentelemetry_host_top99p",
      type: "number",
      format: "int64",
    },
    orgs: {
      baseName: "orgs",
      type: "Array<UsageSummaryDateOrg>",
      format: "",
    },
    profilingHostTop99p: {
      baseName: "profiling_host_top99p",
      type: "number",
      format: "int64",
    },
    rumSessionCountSum: {
      baseName: "rum_session_count_sum",
      type: "number",
      format: "int64",
    },
    rumTotalSessionCountSum: {
      baseName: "rum_total_session_count_sum",
      type: "number",
      format: "int64",
    },
    syntheticsBrowserCheckCallsCountSum: {
      baseName: "synthetics_browser_check_calls_count_sum",
      type: "number",
      format: "int64",
    },
    syntheticsCheckCallsCountSum: {
      baseName: "synthetics_check_calls_count_sum",
      type: "number",
      format: "int64",
    },
    traceSearchIndexedEventsCountSum: {
      baseName: "trace_search_indexed_events_count_sum",
      type: "number",
      format: "int64",
    },
    twolIngestedEventsBytesSum: {
      baseName: "twol_ingested_events_bytes_sum",
      type: "number",
      format: "int64",
    },
    vsphereHostTop99p: {
      baseName: "vsphere_host_top99p",
      type: "number",
      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageSummaryDate.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UsageSummaryDate {
    const res = new UsageSummaryDate();

    res.agentHostTop99p = ObjectSerializer.deserialize(
      data.agent_host_top99p,
      "number",
      "int64"
    );

    res.apmAzureAppServiceHostTop99p = ObjectSerializer.deserialize(
      data.apm_azure_app_service_host_top99p,
      "number",
      "int64"
    );

    res.apmHostTop99p = ObjectSerializer.deserialize(
      data.apm_host_top99p,
      "number",
      "int64"
    );

    res.auditLogsLinesIndexedSum = ObjectSerializer.deserialize(
      data.audit_logs_lines_indexed_sum,
      "number",
      "int64"
    );

    res.awsHostTop99p = ObjectSerializer.deserialize(
      data.aws_host_top99p,
      "number",
      "int64"
    );

    res.awsLambdaFuncCount = ObjectSerializer.deserialize(
      data.aws_lambda_func_count,
      "number",
      "int64"
    );

    res.awsLambdaInvocationsSum = ObjectSerializer.deserialize(
      data.aws_lambda_invocations_sum,
      "number",
      "int64"
    );

    res.azureAppServiceTop99p = ObjectSerializer.deserialize(
      data.azure_app_service_top99p,
      "number",
      "int64"
    );

    res.billableIngestedBytesSum = ObjectSerializer.deserialize(
      data.billable_ingested_bytes_sum,
      "number",
      "int64"
    );

    res.containerAvg = ObjectSerializer.deserialize(
      data.container_avg,
      "number",
      "int64"
    );

    res.containerHwm = ObjectSerializer.deserialize(
      data.container_hwm,
      "number",
      "int64"
    );

    res.cspmContainerAvg = ObjectSerializer.deserialize(
      data.cspm_container_avg,
      "number",
      "int64"
    );

    res.cspmContainerHwm = ObjectSerializer.deserialize(
      data.cspm_container_hwm,
      "number",
      "int64"
    );

    res.cspmHostTop99p = ObjectSerializer.deserialize(
      data.cspm_host_top99p,
      "number",
      "int64"
    );

    res.customTsAvg = ObjectSerializer.deserialize(
      data.custom_ts_avg,
      "number",
      "int64"
    );

    res.cwsContainerCountAvg = ObjectSerializer.deserialize(
      data.cws_container_count_avg,
      "number",
      "int64"
    );

    res.cwsHostTop99p = ObjectSerializer.deserialize(
      data.cws_host_top99p,
      "number",
      "int64"
    );

    res.date = ObjectSerializer.deserialize(data.date, "Date", "date-time");

    res.dbmHostTop99p = ObjectSerializer.deserialize(
      data.dbm_host_top99p,
      "number",
      "int64"
    );

    res.dbmQueriesCountAvg = ObjectSerializer.deserialize(
      data.dbm_queries_count_avg,
      "number",
      "int64"
    );

    res.fargateTasksCountAvg = ObjectSerializer.deserialize(
      data.fargate_tasks_count_avg,
      "number",
      "int64"
    );

    res.fargateTasksCountHwm = ObjectSerializer.deserialize(
      data.fargate_tasks_count_hwm,
      "number",
      "int64"
    );

    res.gcpHostTop99p = ObjectSerializer.deserialize(
      data.gcp_host_top99p,
      "number",
      "int64"
    );

    res.herokuHostTop99p = ObjectSerializer.deserialize(
      data.heroku_host_top99p,
      "number",
      "int64"
    );

    res.incidentManagementMonthlyActiveUsersHwm = ObjectSerializer.deserialize(
      data.incident_management_monthly_active_users_hwm,
      "number",
      "int64"
    );

    res.indexedEventsCountSum = ObjectSerializer.deserialize(
      data.indexed_events_count_sum,
      "number",
      "int64"
    );

    res.infraHostTop99p = ObjectSerializer.deserialize(
      data.infra_host_top99p,
      "number",
      "int64"
    );

    res.ingestedEventsBytesSum = ObjectSerializer.deserialize(
      data.ingested_events_bytes_sum,
      "number",
      "int64"
    );

    res.iotDeviceSum = ObjectSerializer.deserialize(
      data.iot_device_sum,
      "number",
      "int64"
    );

    res.iotDeviceTop99p = ObjectSerializer.deserialize(
      data.iot_device_top99p,
      "number",
      "int64"
    );

    res.mobileRumSessionCountAndroidSum = ObjectSerializer.deserialize(
      data.mobile_rum_session_count_android_sum,
      "number",
      "int64"
    );

    res.mobileRumSessionCountIosSum = ObjectSerializer.deserialize(
      data.mobile_rum_session_count_ios_sum,
      "number",
      "int64"
    );

    res.mobileRumSessionCountSum = ObjectSerializer.deserialize(
      data.mobile_rum_session_count_sum,
      "number",
      "int64"
    );

    res.netflowIndexedEventsCountSum = ObjectSerializer.deserialize(
      data.netflow_indexed_events_count_sum,
      "number",
      "int64"
    );

    res.npmHostTop99p = ObjectSerializer.deserialize(
      data.npm_host_top99p,
      "number",
      "int64"
    );

    res.opentelemetryHostTop99p = ObjectSerializer.deserialize(
      data.opentelemetry_host_top99p,
      "number",
      "int64"
    );

    res.orgs = ObjectSerializer.deserialize(
      data.orgs,
      "Array<UsageSummaryDateOrg>",
      ""
    );

    res.profilingHostTop99p = ObjectSerializer.deserialize(
      data.profiling_host_top99p,
      "number",
      "int64"
    );

    res.rumSessionCountSum = ObjectSerializer.deserialize(
      data.rum_session_count_sum,
      "number",
      "int64"
    );

    res.rumTotalSessionCountSum = ObjectSerializer.deserialize(
      data.rum_total_session_count_sum,
      "number",
      "int64"
    );

    res.syntheticsBrowserCheckCallsCountSum = ObjectSerializer.deserialize(
      data.synthetics_browser_check_calls_count_sum,
      "number",
      "int64"
    );

    res.syntheticsCheckCallsCountSum = ObjectSerializer.deserialize(
      data.synthetics_check_calls_count_sum,
      "number",
      "int64"
    );

    res.traceSearchIndexedEventsCountSum = ObjectSerializer.deserialize(
      data.trace_search_indexed_events_count_sum,
      "number",
      "int64"
    );

    res.twolIngestedEventsBytesSum = ObjectSerializer.deserialize(
      data.twol_ingested_events_bytes_sum,
      "number",
      "int64"
    );

    res.vsphereHostTop99p = ObjectSerializer.deserialize(
      data.vsphere_host_top99p,
      "number",
      "int64"
    );

    return res;
  }

  static serialize(data: UsageSummaryDate): { [key: string]: any } {
    const attributeTypes = UsageSummaryDate.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.agent_host_top99p = ObjectSerializer.serialize(
      data.agentHostTop99p,
      "number",
      "int64"
    );

    res.apm_azure_app_service_host_top99p = ObjectSerializer.serialize(
      data.apmAzureAppServiceHostTop99p,
      "number",
      "int64"
    );

    res.apm_host_top99p = ObjectSerializer.serialize(
      data.apmHostTop99p,
      "number",
      "int64"
    );

    res.audit_logs_lines_indexed_sum = ObjectSerializer.serialize(
      data.auditLogsLinesIndexedSum,
      "number",
      "int64"
    );

    res.aws_host_top99p = ObjectSerializer.serialize(
      data.awsHostTop99p,
      "number",
      "int64"
    );

    res.aws_lambda_func_count = ObjectSerializer.serialize(
      data.awsLambdaFuncCount,
      "number",
      "int64"
    );

    res.aws_lambda_invocations_sum = ObjectSerializer.serialize(
      data.awsLambdaInvocationsSum,
      "number",
      "int64"
    );

    res.azure_app_service_top99p = ObjectSerializer.serialize(
      data.azureAppServiceTop99p,
      "number",
      "int64"
    );

    res.billable_ingested_bytes_sum = ObjectSerializer.serialize(
      data.billableIngestedBytesSum,
      "number",
      "int64"
    );

    res.container_avg = ObjectSerializer.serialize(
      data.containerAvg,
      "number",
      "int64"
    );

    res.container_hwm = ObjectSerializer.serialize(
      data.containerHwm,
      "number",
      "int64"
    );

    res.cspm_container_avg = ObjectSerializer.serialize(
      data.cspmContainerAvg,
      "number",
      "int64"
    );

    res.cspm_container_hwm = ObjectSerializer.serialize(
      data.cspmContainerHwm,
      "number",
      "int64"
    );

    res.cspm_host_top99p = ObjectSerializer.serialize(
      data.cspmHostTop99p,
      "number",
      "int64"
    );

    res.custom_ts_avg = ObjectSerializer.serialize(
      data.customTsAvg,
      "number",
      "int64"
    );

    res.cws_container_count_avg = ObjectSerializer.serialize(
      data.cwsContainerCountAvg,
      "number",
      "int64"
    );

    res.cws_host_top99p = ObjectSerializer.serialize(
      data.cwsHostTop99p,
      "number",
      "int64"
    );

    res.date = ObjectSerializer.serialize(data.date, "Date", "date-time");

    res.dbm_host_top99p = ObjectSerializer.serialize(
      data.dbmHostTop99p,
      "number",
      "int64"
    );

    res.dbm_queries_count_avg = ObjectSerializer.serialize(
      data.dbmQueriesCountAvg,
      "number",
      "int64"
    );

    res.fargate_tasks_count_avg = ObjectSerializer.serialize(
      data.fargateTasksCountAvg,
      "number",
      "int64"
    );

    res.fargate_tasks_count_hwm = ObjectSerializer.serialize(
      data.fargateTasksCountHwm,
      "number",
      "int64"
    );

    res.gcp_host_top99p = ObjectSerializer.serialize(
      data.gcpHostTop99p,
      "number",
      "int64"
    );

    res.heroku_host_top99p = ObjectSerializer.serialize(
      data.herokuHostTop99p,
      "number",
      "int64"
    );

    res.incident_management_monthly_active_users_hwm =
      ObjectSerializer.serialize(
        data.incidentManagementMonthlyActiveUsersHwm,
        "number",
        "int64"
      );

    res.indexed_events_count_sum = ObjectSerializer.serialize(
      data.indexedEventsCountSum,
      "number",
      "int64"
    );

    res.infra_host_top99p = ObjectSerializer.serialize(
      data.infraHostTop99p,
      "number",
      "int64"
    );

    res.ingested_events_bytes_sum = ObjectSerializer.serialize(
      data.ingestedEventsBytesSum,
      "number",
      "int64"
    );

    res.iot_device_sum = ObjectSerializer.serialize(
      data.iotDeviceSum,
      "number",
      "int64"
    );

    res.iot_device_top99p = ObjectSerializer.serialize(
      data.iotDeviceTop99p,
      "number",
      "int64"
    );

    res.mobile_rum_session_count_android_sum = ObjectSerializer.serialize(
      data.mobileRumSessionCountAndroidSum,
      "number",
      "int64"
    );

    res.mobile_rum_session_count_ios_sum = ObjectSerializer.serialize(
      data.mobileRumSessionCountIosSum,
      "number",
      "int64"
    );

    res.mobile_rum_session_count_sum = ObjectSerializer.serialize(
      data.mobileRumSessionCountSum,
      "number",
      "int64"
    );

    res.netflow_indexed_events_count_sum = ObjectSerializer.serialize(
      data.netflowIndexedEventsCountSum,
      "number",
      "int64"
    );

    res.npm_host_top99p = ObjectSerializer.serialize(
      data.npmHostTop99p,
      "number",
      "int64"
    );

    res.opentelemetry_host_top99p = ObjectSerializer.serialize(
      data.opentelemetryHostTop99p,
      "number",
      "int64"
    );

    res.orgs = ObjectSerializer.serialize(
      data.orgs,
      "Array<UsageSummaryDateOrg>",
      ""
    );

    res.profiling_host_top99p = ObjectSerializer.serialize(
      data.profilingHostTop99p,
      "number",
      "int64"
    );

    res.rum_session_count_sum = ObjectSerializer.serialize(
      data.rumSessionCountSum,
      "number",
      "int64"
    );

    res.rum_total_session_count_sum = ObjectSerializer.serialize(
      data.rumTotalSessionCountSum,
      "number",
      "int64"
    );

    res.synthetics_browser_check_calls_count_sum = ObjectSerializer.serialize(
      data.syntheticsBrowserCheckCallsCountSum,
      "number",
      "int64"
    );

    res.synthetics_check_calls_count_sum = ObjectSerializer.serialize(
      data.syntheticsCheckCallsCountSum,
      "number",
      "int64"
    );

    res.trace_search_indexed_events_count_sum = ObjectSerializer.serialize(
      data.traceSearchIndexedEventsCountSum,
      "number",
      "int64"
    );

    res.twol_ingested_events_bytes_sum = ObjectSerializer.serialize(
      data.twolIngestedEventsBytesSum,
      "number",
      "int64"
    );

    res.vsphere_host_top99p = ObjectSerializer.serialize(
      data.vsphereHostTop99p,
      "number",
      "int64"
    );

    return res;
  }

  public constructor() {}
}
