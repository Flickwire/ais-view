# AISStreamApi

All URIs are relative to *https://live.ais.barentswatch.no/live*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1AisGet**](AISStreamApi.md#v1aisget) | **GET** /v1/ais | AIS stream |
| [**v1AisPost**](AISStreamApi.md#v1aispost) | **POST** /v1/ais | AIS stream with optional filter |
| [**v1CombinedGet**](AISStreamApi.md#v1combinedget) | **GET** /v1/combined | AIS stream of combined position and static data for one entity |
| [**v1CombinedPost**](AISStreamApi.md#v1combinedpost) | **POST** /v1/combined | AIS stream of combined position and static data for one entity, with optional filter |
| [**v1SseAisGet**](AISStreamApi.md#v1sseaisget) | **GET** /v1/sse/ais | AIS stream as SSE (Server Sent Events) |
| [**v1SseAisPost**](AISStreamApi.md#v1sseaispost) | **POST** /v1/sse/ais | AIS stream as SSE (Server Sent Events) with optional filter |
| [**v1SseCombinedGet**](AISStreamApi.md#v1ssecombinedget) | **GET** /v1/sse/combined | AIS stream of combined position and static data for one entity as SSE (Server Sent Events) |
| [**v1SseCombinedPost**](AISStreamApi.md#v1ssecombinedpost) | **POST** /v1/sse/combined | AIS stream of combined position and static data for one entity as SSE (Server Sent Events), with optional filter |



## v1AisGet

> V1LatestAisGet200ResponseInner v1AisGet()

AIS stream

Messages are separated by line breaks (\\n).              The different message schemas returned can be recognized by looking at the \&#39;type\&#39; field.              This endpoint has no filter capabilities. Use the POST version of this endpoint if you need filtering.

### Example

```ts
import {
  Configuration,
  AISStreamApi,
} from '';
import type { V1AisGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISStreamApi();

  try {
    const data = await api.v1AisGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1LatestAisGet200ResponseInner**](V1LatestAisGet200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1AisPost

> V1LatestAisGet200ResponseInner v1AisPost(aisLiveApiApiLiveAisModelsLiveAisFilterInput)

AIS stream with optional filter

Messages are separated by line breaks (\\n).              You can optionally filter on message type, mmsi and geometry, and also enable downsampling.

### Example

```ts
import {
  Configuration,
  AISStreamApi,
} from '';
import type { V1AisPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISStreamApi();

  const body = {
    // AisLiveApiApiLiveAisModelsLiveAisFilterInput (optional)
    aisLiveApiApiLiveAisModelsLiveAisFilterInput: ...,
  } satisfies V1AisPostRequest;

  try {
    const data = await api.v1AisPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **aisLiveApiApiLiveAisModelsLiveAisFilterInput** | [AisLiveApiApiLiveAisModelsLiveAisFilterInput](AisLiveApiApiLiveAisModelsLiveAisFilterInput.md) |  | [Optional] |

### Return type

[**V1LatestAisGet200ResponseInner**](V1LatestAisGet200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `text/json`, `application/*+json`
- **Accept**: `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1CombinedGet

> V1CombinedGet200Response v1CombinedGet(modelType, modelFormat)

AIS stream of combined position and static data for one entity

Messages are separated by line breaks (\\n).              This endpoint has no filter capabilities. Use the POST version of this endpoint if you need filtering.

### Example

```ts
import {
  Configuration,
  AISStreamApi,
} from '';
import type { V1CombinedGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISStreamApi();

  const body = {
    // AisSharedModelsEnumsModelType (optional)
    modelType: ...,
    // AisLiveApiApiLiveAisModelsModelFormat (optional)
    modelFormat: ...,
  } satisfies V1CombinedGetRequest;

  try {
    const data = await api.v1CombinedGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **modelType** | `AisSharedModelsEnumsModelType` |  | [Optional] [Defaults to `undefined`] [Enum: Simple, Full] |
| **modelFormat** | `AisLiveApiApiLiveAisModelsModelFormat` |  | [Optional] [Defaults to `undefined`] [Enum: Json, Geojson] |

### Return type

[**V1CombinedGet200Response**](V1CombinedGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1CombinedPost

> V1CombinedGet200Response v1CombinedPost(aisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput)

AIS stream of combined position and static data for one entity, with optional filter

Messages are separated by line breaks (\\n).              You can optionally filter on mmsi and geometry, and also enable downsampling.

### Example

```ts
import {
  Configuration,
  AISStreamApi,
} from '';
import type { V1CombinedPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISStreamApi();

  const body = {
    // AisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput (optional)
    aisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput: ...,
  } satisfies V1CombinedPostRequest;

  try {
    const data = await api.v1CombinedPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **aisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput** | [AisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput](AisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput.md) |  | [Optional] |

### Return type

[**V1CombinedGet200Response**](V1CombinedGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `text/json`, `application/*+json`
- **Accept**: `application/json`, `text/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1SseAisGet

> V1LatestAisGet200ResponseInner v1SseAisGet()

AIS stream as SSE (Server Sent Events)

The different message schemas returned can be recognized by looking at the \&#39;type\&#39; field.              This endpoint has no filter capabilities. Use the POST version of this endpoint if you need filtering.

### Example

```ts
import {
  Configuration,
  AISStreamApi,
} from '';
import type { V1SseAisGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISStreamApi();

  try {
    const data = await api.v1SseAisGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1LatestAisGet200ResponseInner**](V1LatestAisGet200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/event-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1SseAisPost

> V1LatestAisGet200ResponseInner v1SseAisPost(aisLiveApiApiLiveAisModelsLiveAisFilterInput)

AIS stream as SSE (Server Sent Events) with optional filter

You can optionally filter on message type, mmsi and geometry, and also enable downsampling.

### Example

```ts
import {
  Configuration,
  AISStreamApi,
} from '';
import type { V1SseAisPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISStreamApi();

  const body = {
    // AisLiveApiApiLiveAisModelsLiveAisFilterInput (optional)
    aisLiveApiApiLiveAisModelsLiveAisFilterInput: ...,
  } satisfies V1SseAisPostRequest;

  try {
    const data = await api.v1SseAisPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **aisLiveApiApiLiveAisModelsLiveAisFilterInput** | [AisLiveApiApiLiveAisModelsLiveAisFilterInput](AisLiveApiApiLiveAisModelsLiveAisFilterInput.md) |  | [Optional] |

### Return type

[**V1LatestAisGet200ResponseInner**](V1LatestAisGet200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/event-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1SseCombinedGet

> V1CombinedGet200Response v1SseCombinedGet(modelType, modelFormat)

AIS stream of combined position and static data for one entity as SSE (Server Sent Events)

This endpoint has no filter capabilities. Use the POST version of this endpoint if you need filtering.

### Example

```ts
import {
  Configuration,
  AISStreamApi,
} from '';
import type { V1SseCombinedGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISStreamApi();

  const body = {
    // AisSharedModelsEnumsModelType (optional)
    modelType: ...,
    // AisLiveApiApiLiveAisModelsModelFormat (optional)
    modelFormat: ...,
  } satisfies V1SseCombinedGetRequest;

  try {
    const data = await api.v1SseCombinedGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **modelType** | `AisSharedModelsEnumsModelType` |  | [Optional] [Defaults to `undefined`] [Enum: Simple, Full] |
| **modelFormat** | `AisLiveApiApiLiveAisModelsModelFormat` |  | [Optional] [Defaults to `undefined`] [Enum: Json, Geojson] |

### Return type

[**V1CombinedGet200Response**](V1CombinedGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `text/event-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1SseCombinedPost

> V1CombinedGet200Response v1SseCombinedPost(aisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput)

AIS stream of combined position and static data for one entity as SSE (Server Sent Events), with optional filter

You can optionally filter on mmsi and geometry, and also enable downsampling.

### Example

```ts
import {
  Configuration,
  AISStreamApi,
} from '';
import type { V1SseCombinedPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISStreamApi();

  const body = {
    // AisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput (optional)
    aisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput: ...,
  } satisfies V1SseCombinedPostRequest;

  try {
    const data = await api.v1SseCombinedPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **aisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput** | [AisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput](AisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput.md) |  | [Optional] |

### Return type

[**V1CombinedGet200Response**](V1CombinedGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`, `text/json`, `application/*+json`
- **Accept**: `text/event-stream`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

