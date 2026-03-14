# OpenAisAreaApi

All URIs are relative to *https://live.ais.barentswatch.no/live*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1OpenaisareaGet**](OpenAisAreaApi.md#v1openaisareaget) | **GET** /v1/openaisarea | Gets the Open Ais Area. |



## v1OpenaisareaGet

> GeoJsonMultiPolygonGeometry v1OpenaisareaGet()

Gets the Open Ais Area.

### Example

```ts
import {
  Configuration,
  OpenAisAreaApi,
} from '';
import type { V1OpenaisareaGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new OpenAisAreaApi();

  try {
    const data = await api.v1OpenaisareaGet();
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

[**GeoJsonMultiPolygonGeometry**](GeoJsonMultiPolygonGeometry.md)

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

