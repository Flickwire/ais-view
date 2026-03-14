
# GeoJsonAISFeature


## Properties

Name | Type
------------ | -------------
`type` | string
`geometry` | [GeoJsonGeometry](GeoJsonGeometry.md)
`properties` | [GeoJsonAISFeatureProperties](GeoJsonAISFeatureProperties.md)

## Example

```typescript
import type { GeoJsonAISFeature } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "geometry": null,
  "properties": null,
} satisfies GeoJsonAISFeature

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeoJsonAISFeature
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


