
# AisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput


## Properties

Name | Type
------------ | -------------
`modelType` | [AisSharedModelsEnumsModelType](AisSharedModelsEnumsModelType.md)
`geometry` | [GeoJsonPolygonGeometry1](GeoJsonPolygonGeometry1.md)
`since` | Date
`mmsi` | Array&lt;number&gt;
`shipTypes` | Array&lt;number&gt;
`countryCodes` | Array&lt;string&gt;
`navigationalStatus` | Array&lt;number&gt;
`modelFormat` | [AisLiveApiApiLiveAisModelsModelFormat](AisLiveApiApiLiveAisModelsModelFormat.md)
`downsample` | boolean

## Example

```typescript
import type { AisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput } from ''

// TODO: Update the object below with actual values
const example = {
  "modelType": null,
  "geometry": null,
  "since": null,
  "mmsi": null,
  "shipTypes": null,
  "countryCodes": null,
  "navigationalStatus": null,
  "modelFormat": null,
  "downsample": null,
} satisfies AisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AisLiveApiApiLiveAisModelsLiveAisCombinedFilterInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


