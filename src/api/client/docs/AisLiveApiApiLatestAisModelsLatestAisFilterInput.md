
# AisLiveApiApiLatestAisModelsLatestAisFilterInput


## Properties

Name | Type
------------ | -------------
`geometry` | [GeoJsonPolygonGeometry1](GeoJsonPolygonGeometry1.md)
`since` | Date
`mmsi` | Array&lt;number&gt;
`shipTypes` | Array&lt;number&gt;
`countryCodes` | Array&lt;string&gt;
`includePosition` | boolean
`includeStatic` | boolean
`includeAton` | boolean
`includeSafetyRelated` | boolean
`includeBinaryBroadcastMetHyd` | boolean

## Example

```typescript
import type { AisLiveApiApiLatestAisModelsLatestAisFilterInput } from ''

// TODO: Update the object below with actual values
const example = {
  "geometry": null,
  "since": null,
  "mmsi": null,
  "shipTypes": null,
  "countryCodes": null,
  "includePosition": null,
  "includeStatic": null,
  "includeAton": null,
  "includeSafetyRelated": null,
  "includeBinaryBroadcastMetHyd": null,
} satisfies AisLiveApiApiLatestAisModelsLatestAisFilterInput

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AisLiveApiApiLatestAisModelsLatestAisFilterInput
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


