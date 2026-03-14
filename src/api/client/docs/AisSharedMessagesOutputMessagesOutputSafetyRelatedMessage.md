
# AisSharedMessagesOutputMessagesOutputSafetyRelatedMessage


## Properties

Name | Type
------------ | -------------
`type` | string
`messageType` | number
`mmsi` | number
`msgtime` | Date
`sequenceNumber` | number
`destinationMmsi` | number
`safetyRelatedText` | string
`stream` | string

## Example

```typescript
import type { AisSharedMessagesOutputMessagesOutputSafetyRelatedMessage } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "messageType": null,
  "mmsi": null,
  "msgtime": null,
  "sequenceNumber": null,
  "destinationMmsi": null,
  "safetyRelatedText": null,
  "stream": null,
} satisfies AisSharedMessagesOutputMessagesOutputSafetyRelatedMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AisSharedMessagesOutputMessagesOutputSafetyRelatedMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


