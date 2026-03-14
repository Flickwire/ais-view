
# AisSharedMessagesOutputMessagesOutputAtonMessage


## Properties

Name | Type
------------ | -------------
`type` | string
`messageType` | number
`mmsi` | number
`msgtime` | Date
`dimensionA` | number
`dimensionB` | number
`dimensionC` | number
`dimensionD` | number
`typeOfAidsToNavigation` | number
`latitude` | number
`longitude` | number
`name` | string
`typeOfElectronicFixingDevice` | number
`stream` | string

## Example

```typescript
import type { AisSharedMessagesOutputMessagesOutputAtonMessage } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "messageType": null,
  "mmsi": null,
  "msgtime": null,
  "dimensionA": null,
  "dimensionB": null,
  "dimensionC": null,
  "dimensionD": null,
  "typeOfAidsToNavigation": null,
  "latitude": null,
  "longitude": null,
  "name": null,
  "typeOfElectronicFixingDevice": null,
  "stream": null,
} satisfies AisSharedMessagesOutputMessagesOutputAtonMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AisSharedMessagesOutputMessagesOutputAtonMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


