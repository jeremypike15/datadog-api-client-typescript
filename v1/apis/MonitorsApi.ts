// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { APIErrorResponse } from '../models/APIErrorResponse';
import { CheckCanDeleteMonitorResponse } from '../models/CheckCanDeleteMonitorResponse';
import { DeletedMonitor } from '../models/DeletedMonitor';
import { Monitor } from '../models/Monitor';
import { MonitorUpdateRequest } from '../models/MonitorUpdateRequest';

/**
 * no description
 */
export class MonitorsApiRequestFactory extends BaseAPIRequestFactory {
	
    /**
     * Check if the given monitors can be deleted.
     * Check if a monitor can be deleted
     * @param monitorIds The IDs of the monitor to check.
     */
    public async checkCanDeleteMonitor(monitorIds: Array<number>, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'monitorIds' is not null or undefined
        if (monitorIds === null || monitorIds === undefined) {
            throw new RequiredError('Required parameter monitorIds was null or undefined when calling checkCanDeleteMonitor.');
        }

		
		// Path Params
    	const localVarPath = '/api/v1/monitor/can_delete';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (monitorIds !== undefined) {
        	requestContext.setQueryParam("monitor_ids", ObjectSerializer.serialize(monitorIds, "Array<number>", "int64"));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a monitor using the specified options.  #### Monitor Types  The type of monitor chosen from:  - anomaly: `query alert` - APM: `query alert` or `trace-analytics alert` - composite: `composite` - custom: `service check` - event: `event alert` - forecast: `query alert` - host: `service check` - integration: `query alert` or `service check` - live process: `process alert` - logs: `log alert` - metric: `metric alert` - network: `service check` - outlier: `query alert` - process: `service check` - rum: `rum alert` - watchdog: `event alert`  #### Query Types  **Metric Alert Query**  Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`  - `time_aggr`: avg, sum, max, min, change, or pct_change - `time_window`: `last_#m` (with `#` between 1 and 2880 depending on the monitor type) or `last_#h`(with `#` between 1 and 48 depending on the monitor type), or `last_1d` - `space_aggr`: avg, sum, min, or max - `tags`: one or more tags (comma-separated), or * - `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert) - `operator`: <, <=, >, >=, ==, or != - `#`: an integer or decimal number used to set the threshold  If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window), timeshift):space_aggr:metric{tags} [by {key}] operator #` with:  - `change_aggr` change, pct_change - `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/monitor_types/#define-the-conditions) - `time_window` last\\_#m (between 1 and 2880 depending on the monitor type), last\\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2) - `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago  Use this to create an outlier monitor using the following query: `avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`  **Service Check Query**  Example: `\"check\".over(tags).last(count).count_by_status()`  - **`check`** name of the check, e.g. `datadog.agent.up` - **`tags`** one or more quoted tags (comma-separated), or \"*\". e.g.: `.over(\"env:prod\", \"role:db\")` - **`count`** must be at >= your max threshold (defined in the `options`). e.g. if you want to notify on 1 critical, 3 ok and 2 warn statuses count should be 3. It is limited to 100.  **Event Alert Query**  Example: `events('sources:nagios status:error,warning priority:normal tags: \"string query\"').rollup(\"count\").last(\"1h\")\"`  - **`event`**, the event query string: - **`string_query`** free text query to match against event title and text. - **`sources`** event sources (comma-separated). - **`status`** event statuses (comma-separated). Valid options: error, warn, and info. - **`priority`** event priorities (comma-separated). Valid options: low, normal, all. - **`host`** event reporting host (comma-separated). - **`tags`** event tags (comma-separated). - **`excluded_tags`** excluded event tags (comma-separated). - **`rollup`** the stats roll-up method. `count` is the only supported method now. - **`last`** the timeframe to roll up the counts. Examples: 45m, 4h. Supported timeframes: m, h and d. This value should not exceed 48 hours.  **Process Alert Query**  Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`  - **`search`** free text search string for querying processes. Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page. - **`tags`** one or more tags (comma-separated) - **`timeframe`** the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d - **`operator`** <, <=, >, >=, ==, or != - **`#`** an integer or decimal number used to set the threshold  **Logs Alert Query**  Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`index_name`** For multi-index organizations, the log index in which the request is performed. - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 1440), #h (between 1 and 24) - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **Composite Query**  Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors  * **`name`** [*required*, *default* = **dynamic, based on query**]: The name of the alert. * **`message`** [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor. Email notifications can be sent to specific users by using the same '@username' notation as events. * **`tags`** [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor. When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags. It is only available via the API and isn't visible or editable in the Datadog UI.
     * Create a monitor
     * @param body Create a monitor request body.
     */
    public async createMonitor(body: Monitor, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createMonitor.');
        }

		
		// Path Params
    	const localVarPath = '/api/v1/monitor';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "Monitor", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete the specified monitor
     * Delete a monitor
     * @param monitorId The ID of the monitor.
     * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     */
    public async deleteMonitor(monitorId: number, force?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling deleteMonitor.');
        }

		
		
		// Path Params
    	const localVarPath = '/api/v1/monitor/{monitor_id}'
            .replace('{' + 'monitor_id' + '}', encodeURIComponent(String(monitorId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (force !== undefined) {
        	requestContext.setQueryParam("force", ObjectSerializer.serialize(force, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get details about the specified monitor from your organization.
     * Get a monitor's details
     * @param monitorId The ID of the monitor
     * @param groupStates When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
     */
    public async getMonitor(monitorId: number, groupStates?: string, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling getMonitor.');
        }

		
		
		// Path Params
    	const localVarPath = '/api/v1/monitor/{monitor_id}'
            .replace('{' + 'monitor_id' + '}', encodeURIComponent(String(monitorId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupStates !== undefined) {
        	requestContext.setQueryParam("group_states", ObjectSerializer.serialize(groupStates, "string", ""));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get details about the specified monitor from your organization.
     * Get all monitor details
     * @param groupStates When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
     * @param name A string to filter monitors by name.
     * @param tags A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example, &#x60;host:host0&#x60;.
     * @param monitorTags A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example, &#x60;service:my-app&#x60;.
     * @param withDowntimes If this argument is set to true, then the returned data includes all current downtimes for each monitor.
     * @param idOffset Monitor ID offset.
     * @param page The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination.
     * @param pageSize The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without a &#x60;page_size&#x60; limit. However, if page is specified and &#x60;page_size&#x60; is not, the argument defaults to 100.
     */
    public async listMonitors(groupStates?: string, name?: string, tags?: string, monitorTags?: string, withDowntimes?: boolean, idOffset?: number, page?: number, pageSize?: number, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
		
		
		
		
		
		
		
		
		// Path Params
    	const localVarPath = '/api/v1/monitor';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (groupStates !== undefined) {
        	requestContext.setQueryParam("group_states", ObjectSerializer.serialize(groupStates, "string", ""));
        }
        if (name !== undefined) {
        	requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }
        if (tags !== undefined) {
        	requestContext.setQueryParam("tags", ObjectSerializer.serialize(tags, "string", ""));
        }
        if (monitorTags !== undefined) {
        	requestContext.setQueryParam("monitor_tags", ObjectSerializer.serialize(monitorTags, "string", ""));
        }
        if (withDowntimes !== undefined) {
        	requestContext.setQueryParam("with_downtimes", ObjectSerializer.serialize(withDowntimes, "boolean", ""));
        }
        if (idOffset !== undefined) {
        	requestContext.setQueryParam("id_offset", ObjectSerializer.serialize(idOffset, "number", "int64"));
        }
        if (page !== undefined) {
        	requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int64"));
        }
        if (pageSize !== undefined) {
        	requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", "int32"));
        }
	
		// Header Params
	
		// Form Params


		// Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Edit the specified monitor.
     * Edit a monitor
     * @param monitorId The ID of the monitor.
     * @param body Edit a monitor request body.
     */
    public async updateMonitor(monitorId: number, body: MonitorUpdateRequest, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'monitorId' is not null or undefined
        if (monitorId === null || monitorId === undefined) {
            throw new RequiredError('Required parameter monitorId was null or undefined when calling updateMonitor.');
        }

		
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling updateMonitor.');
        }

		
		// Path Params
    	const localVarPath = '/api/v1/monitor/{monitor_id}'
            .replace('{' + 'monitor_id' + '}', encodeURIComponent(String(monitorId)));

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "MonitorUpdateRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Validate the monitor provided in the request.
     * Validate a monitor
     * @param body Monitor request object
     */
    public async validateMonitor(body: Monitor, options?: Configuration): Promise<RequestContext> {
		let config = options || this.configuration;
		
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling validateMonitor.');
        }

		
		// Path Params
    	const localVarPath = '/api/v1/monitor/validate';

		// Make Request Context
    	const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
	
		// Header Params
	
		// Form Params


		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "Monitor", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}



export class MonitorsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkCanDeleteMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async checkCanDeleteMonitor(response: ResponseContext): Promise<CheckCanDeleteMonitorResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CheckCanDeleteMonitorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckCanDeleteMonitorResponse", ""
            ) as CheckCanDeleteMonitorResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: CheckCanDeleteMonitorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckCanDeleteMonitorResponse", ""
            ) as CheckCanDeleteMonitorResponse;
            throw new ApiException<CheckCanDeleteMonitorResponse>(409, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CheckCanDeleteMonitorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CheckCanDeleteMonitorResponse", ""
            ) as CheckCanDeleteMonitorResponse;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createMonitor(response: ResponseContext): Promise<Monitor > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Monitor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Monitor", ""
            ) as Monitor;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Monitor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Monitor", ""
            ) as Monitor;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteMonitor(response: ResponseContext): Promise<DeletedMonitor > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DeletedMonitor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeletedMonitor", ""
            ) as DeletedMonitor;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DeletedMonitor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DeletedMonitor", ""
            ) as DeletedMonitor;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getMonitor(response: ResponseContext): Promise<Monitor > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Monitor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Monitor", ""
            ) as Monitor;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Monitor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Monitor", ""
            ) as Monitor;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMonitors
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listMonitors(response: ResponseContext): Promise<Array<Monitor> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<Monitor> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Monitor>", ""
            ) as Array<Monitor>;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<Monitor> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<Monitor>", ""
            ) as Array<Monitor>;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateMonitor(response: ResponseContext): Promise<Monitor > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Monitor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Monitor", ""
            ) as Monitor;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(401, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Monitor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Monitor", ""
            ) as Monitor;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validateMonitor
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async validateMonitor(response: ResponseContext): Promise<Monitor > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Monitor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Monitor", ""
            ) as Monitor;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Monitor = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Monitor", ""
            ) as Monitor;
            return body;
        }

        let body = response.body || "";
    	throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }
			
}