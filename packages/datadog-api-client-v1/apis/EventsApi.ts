// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration, getServer } from "../configuration";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { EventCreateRequest } from "../models/EventCreateRequest";
import { EventCreateResponse } from "../models/EventCreateResponse";
import { EventListResponse } from "../models/EventListResponse";
import { EventPriority } from "../models/EventPriority";
import { EventResponse } from "../models/EventResponse";

/**
 * no description
 */
export class EventsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * This endpoint allows you to post events to the stream. Tag them, set priority and event aggregate them with other events.
   * Post an event
   * @param body Event request object
   */
  public async createEvent(
    body: EventCreateRequest,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError(
        "Required parameter body was null or undefined when calling createEvent."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/events";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "EventsApi.createEvent"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "EventCreateRequest", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * This endpoint allows you to query for event details.  **Note**: If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.
   * Get an event
   * @param eventId The ID of the event.
   */
  public async getEvent(
    eventId: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'eventId' is not null or undefined
    if (eventId === null || eventId === undefined) {
      throw new RequiredError(
        "Required parameter eventId was null or undefined when calling getEvent."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/events/{event_id}".replace(
      "{" + "event_id" + "}",
      encodeURIComponent(String(eventId))
    );

    // Make Request Context
    const requestContext = getServer(
      _config,
      "EventsApi.getEvent"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["AuthZ"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * The event stream can be queried and filtered by time, priority, sources and tags.  **Notes**: - If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.  - This endpoint returns a maximum of `1000` most recent results. To return additional results, identify the last timestamp of the last result and set that as the `end` query time to paginate the results. You can also use the page parameter to specify which set of `1000` results to return.
   * Query the event stream
   * @param start POSIX timestamp.
   * @param end POSIX timestamp.
   * @param priority Priority of your events, either &#x60;low&#x60; or &#x60;normal&#x60;.
   * @param sources A comma separated string of sources.
   * @param tags A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope.
   * @param unaggregated Set unaggregated to &#x60;true&#x60; to return all events within the specified [&#x60;start&#x60;,&#x60;end&#x60;] timeframe. Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe, it won&#39;t be available in the output. Aggregated events with &#x60;is_aggregate&#x3D;true&#x60; in the response will still be returned unless exclude_aggregate is set to &#x60;true.&#x60;
   * @param excludeAggregate Set &#x60;exclude_aggregate&#x60; to &#x60;true&#x60; to only return unaggregated events where &#x60;is_aggregate&#x3D;false&#x60; in the response. If the &#x60;exclude_aggregate&#x60; parameter is set to &#x60;true&#x60;, then the unaggregated parameter is ignored and will be &#x60;true&#x60; by default.
   * @param page By default 1000 results are returned per request. Set page to the number of the page to return with &#x60;0&#x60; being the first page. The page parameter can only be used when either unaggregated or exclude_aggregate is set to &#x60;true.&#x60;
   */
  public async listEvents(
    start: number,
    end: number,
    priority?: EventPriority,
    sources?: string,
    tags?: string,
    unaggregated?: boolean,
    excludeAggregate?: boolean,
    page?: number,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'start' is not null or undefined
    if (start === null || start === undefined) {
      throw new RequiredError(
        "Required parameter start was null or undefined when calling listEvents."
      );
    }

    // verify required parameter 'end' is not null or undefined
    if (end === null || end === undefined) {
      throw new RequiredError(
        "Required parameter end was null or undefined when calling listEvents."
      );
    }

    // Path Params
    const localVarPath = "/api/v1/events";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "EventsApi.listEvents"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");
    requestContext.setHttpConfig(_config.httpConfig);

    // Query Params
    if (start !== undefined) {
      requestContext.setQueryParam(
        "start",
        ObjectSerializer.serialize(start, "number", "int64")
      );
    }
    if (end !== undefined) {
      requestContext.setQueryParam(
        "end",
        ObjectSerializer.serialize(end, "number", "int64")
      );
    }
    if (priority !== undefined) {
      requestContext.setQueryParam(
        "priority",
        ObjectSerializer.serialize(priority, "EventPriority", "")
      );
    }
    if (sources !== undefined) {
      requestContext.setQueryParam(
        "sources",
        ObjectSerializer.serialize(sources, "string", "")
      );
    }
    if (tags !== undefined) {
      requestContext.setQueryParam(
        "tags",
        ObjectSerializer.serialize(tags, "string", "")
      );
    }
    if (unaggregated !== undefined) {
      requestContext.setQueryParam(
        "unaggregated",
        ObjectSerializer.serialize(unaggregated, "boolean", "")
      );
    }
    if (excludeAggregate !== undefined) {
      requestContext.setQueryParam(
        "exclude_aggregate",
        ObjectSerializer.serialize(excludeAggregate, "boolean", "")
      );
    }
    if (page !== undefined) {
      requestContext.setQueryParam(
        "page",
        ObjectSerializer.serialize(page, "number", "int32")
      );
    }

    // Header Params

    // Form Params

    // Body Params

    let authMethod = null;
    // Apply auth methods
    authMethod = _config.authMethods["AuthZ"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["apiKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }
    // Apply auth methods
    authMethod = _config.authMethods["appKeyAuth"];
    if (authMethod) {
      await authMethod.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class EventsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createEvent(
    response: ResponseContext
  ): Promise<EventCreateResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("202", response.httpStatusCode)) {
      const body: EventCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventCreateResponse",
        ""
      ) as EventCreateResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: EventCreateResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventCreateResponse",
        ""
      ) as EventCreateResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to getEvent
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async getEvent(response: ResponseContext): Promise<EventResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: EventResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventResponse",
        ""
      ) as EventResponse;
      return body;
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }
    if (isCodeInRange("404", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(404, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: EventResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventResponse",
        ""
      ) as EventResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listEvents
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listEvents(
    response: ResponseContext
  ): Promise<EventListResponse> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: EventListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventListResponse",
        ""
      ) as EventListResponse;
      return body;
    }
    if (isCodeInRange("400", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(400, body);
    }
    if (isCodeInRange("403", response.httpStatusCode)) {
      const body: APIErrorResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "APIErrorResponse",
        ""
      ) as APIErrorResponse;
      throw new ApiException<APIErrorResponse>(403, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: EventListResponse = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "EventListResponse",
        ""
      ) as EventListResponse;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}
