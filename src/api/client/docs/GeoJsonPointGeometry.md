
# GeoJsonPointGeometry


## Properties

Name | Type
------------ | -------------
`type` | string
`coordinates` | Array&lt;number&gt;

## Example

```typescript
import type { GeoJsonPointGeometry } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "coordinates": [10.4,60.5],
} satisfies GeoJsonPointGeometry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GeoJsonPointGeometry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


