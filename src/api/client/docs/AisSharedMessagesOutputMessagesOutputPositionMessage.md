
# AisSharedMessagesOutputMessagesOutputPositionMessage


## Properties

Name | Type
------------ | -------------
`type` | string
`messageType` | number
`courseOverGround` | number
`aisClass` | string
`altitude` | number
`latitude` | number
`longitude` | number
`navigationalStatus` | number
`rateOfTurn` | number
`speedOverGround` | number
`trueHeading` | number
`mmsi` | number
`msgtime` | Date
`stream` | string

## Example

```typescript
import type { AisSharedMessagesOutputMessagesOutputPositionMessage } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "messageType": null,
  "courseOverGround": null,
  "aisClass": null,
  "altitude": null,
  "latitude": null,
  "longitude": null,
  "navigationalStatus": null,
  "rateOfTurn": null,
  "speedOverGround": null,
  "trueHeading": null,
  "mmsi": null,
  "msgtime": null,
  "stream": null,
} satisfies AisSharedMessagesOutputMessagesOutputPositionMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AisSharedMessagesOutputMessagesOutputPositionMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


