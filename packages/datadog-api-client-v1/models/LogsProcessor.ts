/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArithmeticProcessor } from "./LogsArithmeticProcessor";
import { LogsAttributeRemapper } from "./LogsAttributeRemapper";
import { LogsCategoryProcessor } from "./LogsCategoryProcessor";
import { LogsDateRemapper } from "./LogsDateRemapper";
import { LogsGeoIPParser } from "./LogsGeoIPParser";
import { LogsGrokParser } from "./LogsGrokParser";
import { LogsLookupProcessor } from "./LogsLookupProcessor";
import { LogsMessageRemapper } from "./LogsMessageRemapper";
import { LogsPipelineProcessor } from "./LogsPipelineProcessor";
import { LogsServiceRemapper } from "./LogsServiceRemapper";
import { LogsStatusRemapper } from "./LogsStatusRemapper";
import { LogsStringBuilderProcessor } from "./LogsStringBuilderProcessor";
import { LogsTraceRemapper } from "./LogsTraceRemapper";
import { LogsURLParser } from "./LogsURLParser";
import { LogsUserAgentParser } from "./LogsUserAgentParser";
import { UnparsedObject } from "./ObjectSerializer";

/**
 * Definition of a logs processor.
 */

export type LogsProcessor =
  | LogsArithmeticProcessor
  | LogsAttributeRemapper
  | LogsCategoryProcessor
  | LogsDateRemapper
  | LogsGeoIPParser
  | LogsGrokParser
  | LogsLookupProcessor
  | LogsMessageRemapper
  | LogsPipelineProcessor
  | LogsServiceRemapper
  | LogsStatusRemapper
  | LogsStringBuilderProcessor
  | LogsTraceRemapper
  | LogsURLParser
  | LogsUserAgentParser
  | UnparsedObject;
