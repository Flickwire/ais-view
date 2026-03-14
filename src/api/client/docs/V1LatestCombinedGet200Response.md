
# V1LatestCombinedGet200Response

Output format is decided by modelFormat and modelType

## Properties

Name | Type
------------ | -------------
`type` | string
`features` | [Array&lt;GeoJsonAISFeature&gt;](GeoJsonAISFeature.md)
`bbox` | object

## Example

```typescript
import type { V1LatestCombinedGet200Response } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "features": null,
  "bbox": null,
} satisfies V1LatestCombinedGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1LatestCombinedGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


