export * from "./http/http";
export * from "./auth/auth";
export { createConfiguration } from "./configuration";
export { Configuration } from "./configuration";
export * from "./apis/exception";
export * from "./servers";
import { operationServers, server1 } from "./servers";

export { PromiseMiddleware as Middleware } from "./middleware";
export {
  DashboardListsApiCreateDashboardListItemsRequest,
  DashboardListsApiDeleteDashboardListItemsRequest,
  DashboardListsApiGetDashboardListItemsRequest,
  DashboardListsApiUpdateDashboardListItemsRequest,
  ObjectDashboardListsApi as DashboardListsApi,
  IncidentServicesApiCreateIncidentServiceRequest,
  IncidentServicesApiDeleteIncidentServiceRequest,
  IncidentServicesApiGetIncidentServiceRequest,
  IncidentServicesApiListIncidentServicesRequest,
  IncidentServicesApiUpdateIncidentServiceRequest,
  ObjectIncidentServicesApi as IncidentServicesApi,
  IncidentTeamsApiCreateIncidentTeamRequest,
  IncidentTeamsApiDeleteIncidentTeamRequest,
  IncidentTeamsApiGetIncidentTeamRequest,
  IncidentTeamsApiListIncidentTeamsRequest,
  IncidentTeamsApiUpdateIncidentTeamRequest,
  ObjectIncidentTeamsApi as IncidentTeamsApi,
  IncidentsApiCreateIncidentRequest,
  IncidentsApiDeleteIncidentRequest,
  IncidentsApiGetIncidentRequest,
  IncidentsApiListIncidentsRequest,
  IncidentsApiUpdateIncidentRequest,
  ObjectIncidentsApi as IncidentsApi,
  KeyManagementApiCreateAPIKeyRequest,
  KeyManagementApiCreateCurrentUserApplicationKeyRequest,
  KeyManagementApiDeleteAPIKeyRequest,
  KeyManagementApiDeleteApplicationKeyRequest,
  KeyManagementApiDeleteCurrentUserApplicationKeyRequest,
  KeyManagementApiGetAPIKeyRequest,
  KeyManagementApiGetApplicationKeyRequest,
  KeyManagementApiGetCurrentUserApplicationKeyRequest,
  KeyManagementApiListAPIKeysRequest,
  KeyManagementApiListApplicationKeysRequest,
  KeyManagementApiListCurrentUserApplicationKeysRequest,
  KeyManagementApiUpdateAPIKeyRequest,
  KeyManagementApiUpdateApplicationKeyRequest,
  KeyManagementApiUpdateCurrentUserApplicationKeyRequest,
  ObjectKeyManagementApi as KeyManagementApi,
  LogsApiAggregateLogsRequest,
  LogsApiListLogsRequest,
  LogsApiListLogsGetRequest,
  ObjectLogsApi as LogsApi,
  LogsArchivesApiAddReadRoleToArchiveRequest,
  LogsArchivesApiCreateLogsArchiveRequest,
  LogsArchivesApiDeleteLogsArchiveRequest,
  LogsArchivesApiGetLogsArchiveRequest,
  LogsArchivesApiListArchiveReadRolesRequest,
  LogsArchivesApiRemoveRoleFromArchiveRequest,
  LogsArchivesApiUpdateLogsArchiveRequest,
  LogsArchivesApiUpdateLogsArchiveOrderRequest,
  ObjectLogsArchivesApi as LogsArchivesApi,
  LogsMetricsApiCreateLogsMetricRequest,
  LogsMetricsApiDeleteLogsMetricRequest,
  LogsMetricsApiGetLogsMetricRequest,
  LogsMetricsApiUpdateLogsMetricRequest,
  ObjectLogsMetricsApi as LogsMetricsApi,
  MetricsApiCreateTagConfigurationRequest,
  MetricsApiDeleteTagConfigurationRequest,
  MetricsApiListTagConfigurationByNameRequest,
  MetricsApiListTagConfigurationsRequest,
  MetricsApiListTagsByMetricNameRequest,
  MetricsApiListVolumesByMetricNameRequest,
  MetricsApiUpdateTagConfigurationRequest,
  ObjectMetricsApi as MetricsApi,
  ProcessesApiListProcessesRequest,
  ObjectProcessesApi as ProcessesApi,
  RolesApiAddPermissionToRoleRequest,
  RolesApiAddUserToRoleRequest,
  RolesApiCreateRoleRequest,
  RolesApiDeleteRoleRequest,
  RolesApiGetRoleRequest,
  RolesApiListRolePermissionsRequest,
  RolesApiListRoleUsersRequest,
  RolesApiListRolesRequest,
  RolesApiRemovePermissionFromRoleRequest,
  RolesApiRemoveUserFromRoleRequest,
  RolesApiUpdateRoleRequest,
  ObjectRolesApi as RolesApi,
  SecurityMonitoringApiCreateSecurityFilterRequest,
  SecurityMonitoringApiCreateSecurityMonitoringRuleRequest,
  SecurityMonitoringApiDeleteSecurityFilterRequest,
  SecurityMonitoringApiDeleteSecurityMonitoringRuleRequest,
  SecurityMonitoringApiGetSecurityFilterRequest,
  SecurityMonitoringApiGetSecurityMonitoringRuleRequest,
  SecurityMonitoringApiListSecurityMonitoringRulesRequest,
  SecurityMonitoringApiListSecurityMonitoringSignalsRequest,
  SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest,
  SecurityMonitoringApiUpdateSecurityFilterRequest,
  SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest,
  ObjectSecurityMonitoringApi as SecurityMonitoringApi,
  ServiceAccountsApiCreateServiceAccountApplicationKeyRequest,
  ServiceAccountsApiDeleteServiceAccountApplicationKeyRequest,
  ServiceAccountsApiGetServiceAccountApplicationKeyRequest,
  ServiceAccountsApiListServiceAccountApplicationKeysRequest,
  ServiceAccountsApiUpdateServiceAccountApplicationKeyRequest,
  ObjectServiceAccountsApi as ServiceAccountsApi,
  UsersApiCreateServiceAccountRequest,
  UsersApiCreateUserRequest,
  UsersApiDisableUserRequest,
  UsersApiGetInvitationRequest,
  UsersApiGetUserRequest,
  UsersApiListUserOrganizationsRequest,
  UsersApiListUserPermissionsRequest,
  UsersApiListUsersRequest,
  UsersApiSendInvitationsRequest,
  UsersApiUpdateUserRequest,
  ObjectUsersApi as UsersApi,
} from "./types/ObjectParamAPI";

/**
 * Sets the server variables.
 * site attribute only support the following values: "datadoghq.com", "us3.datadoghq.com", "datadoghq.eu", "ddog-gov.com".
 *
 * @param serverVariables key/value object representing the server variables (site, name, protocol, ...)
 */
export function setServerVariables(serverVariables: { [key: string]: string }) {
  const serverConf = server1.getConfiguration();

  server1.setVariables(serverVariables as typeof serverConf);

  for (const op in operationServers) {
    (operationServers[op][0] as any).setVariables(serverVariables);
  }
}
