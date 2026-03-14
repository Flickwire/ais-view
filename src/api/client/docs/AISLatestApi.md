# AISLatestApi

All URIs are relative to *https://live.ais.barentswatch.no/live*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1LatestAisGet**](AISLatestApi.md#v1latestaisget) | **GET** /v1/latest/ais | Get the latest AIS messages per MMSI within 24 hours. |
| [**v1LatestAisPost**](AISLatestApi.md#v1latestaispost) | **POST** /v1/latest/ais | Get the latest AIS messages per MMSI within 24 hours. |
| [**v1LatestCombinedGet**](AISLatestApi.md#v1latestcombinedget) | **GET** /v1/latest/combined | Get the latest AIS messages per MMSI within 24 hours. |
| [**v1LatestCombinedPost**](AISLatestApi.md#v1latestcombinedpost) | **POST** /v1/latest/combined | Get the latest AIS messages per MMSI within 24 hours. |



## v1LatestAisGet

> Array&lt;V1LatestAisGet200ResponseInner&gt; v1LatestAisGet(since)

Get the latest AIS messages per MMSI within 24 hours.

### Example

```ts
import {
  Configuration,
  AISLatestApi,
} from '';
import type { V1LatestAisGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISLatestApi();

  const body = {
    // Date (optional)
    since: 2013-10-20T19:20:30+01:00,
  } satisfies V1LatestAisGetRequest;

  try {
    const data = await api.v1LatestAisGet(body);
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
| **since** | `Date` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;V1LatestAisGet200ResponseInner&gt;**](V1LatestAisGet200ResponseInner.md)

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


## v1LatestAisPost

> Array&lt;V1LatestAisGet200ResponseInner&gt; v1LatestAisPost(aisLiveApiApiLatestAisModelsLatestAisFilterInput)

Get the latest AIS messages per MMSI within 24 hours.

### Example

```ts
import {
  Configuration,
  AISLatestApi,
} from '';
import type { V1LatestAisPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISLatestApi();

  const body = {
    // AisLiveApiApiLatestAisModelsLatestAisFilterInput (optional)
    aisLiveApiApiLatestAisModelsLatestAisFilterInput: ...,
  } satisfies V1LatestAisPostRequest;

  try {
    const data = await api.v1LatestAisPost(body);
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
| **aisLiveApiApiLatestAisModelsLatestAisFilterInput** | [AisLiveApiApiLatestAisModelsLatestAisFilterInput](AisLiveApiApiLatestAisModelsLatestAisFilterInput.md) |  | [Optional] |

### Return type

[**Array&lt;V1LatestAisGet200ResponseInner&gt;**](V1LatestAisGet200ResponseInner.md)

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


## v1LatestCombinedGet

> V1LatestCombinedGet200Response v1LatestCombinedGet(since, modelType, modelFormat)

Get the latest AIS messages per MMSI within 24 hours.

Geojson returns a list with GeoJSON features. FeatureCollection returns a FeatureCollection object.

### Example

```ts
import {
  Configuration,
  AISLatestApi,
} from '';
import type { V1LatestCombinedGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISLatestApi();

  const body = {
    // Date (optional)
    since: 2013-10-20T19:20:30+01:00,
    // AisSharedModelsEnumsModelType (optional)
    modelType: ...,
    // AisLiveApiApiLatestAisModelsModelFormat (optional)
    modelFormat: ...,
  } satisfies V1LatestCombinedGetRequest;

  try {
    const data = await api.v1LatestCombinedGet(body);
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
| **since** | `Date` |  | [Optional] [Defaults to `undefined`] |
| **modelType** | `AisSharedModelsEnumsModelType` |  | [Optional] [Defaults to `undefined`] [Enum: Simple, Full] |
| **modelFormat** | `AisLiveApiApiLatestAisModelsModelFormat` |  | [Optional] [Defaults to `undefined`] [Enum: Json, Geojson, FeatureCollection] |

### Return type

[**V1LatestCombinedGet200Response**](V1LatestCombinedGet200Response.md)

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


## v1LatestCombinedPost

> V1LatestCombinedGet200Response v1LatestCombinedPost(aisLiveApiApiLatestAisModelsLatestAisCombinedFilterInput)

Get the latest AIS messages per MMSI within 24 hours.

Geojson returns a list with GeoJSON features. FeatureCollection returns a FeatureCollection object.

### Example

```ts
import {
  Configuration,
  AISLatestApi,
} from '';
import type { V1LatestCombinedPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new AISLatestApi();

  const body = {
    // AisLiveApiApiLatestAisModelsLatestAisCombinedFilterInput (optional)
    aisLiveApiApiLatestAisModelsLatestAisCombinedFilterInput: ...,
  } satisfies V1LatestCombinedPostRequest;

  try {
    const data = await api.v1LatestCombinedPost(body);
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
| **aisLiveApiApiLatestAisModelsLatestAisCombinedFilterInput** | [AisLiveApiApiLatestAisModelsLatestAisCombinedFilterInput](AisLiveApiApiLatestAisModelsLatestAisCombinedFilterInput.md) |  | [Optional] |

### Return type

[**V1LatestCombinedGet200Response**](V1LatestCombinedGet200Response.md)

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

