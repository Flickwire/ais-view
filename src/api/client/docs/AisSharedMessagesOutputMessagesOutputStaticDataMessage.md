
# AisSharedMessagesOutputMessagesOutputStaticDataMessage


## Properties

Name | Type
------------ | -------------
`type` | string
`messageType` | number
`mmsi` | number
`msgtime` | Date
`imoNumber` | number
`callSign` | string
`destination` | string
`eta` | string
`name` | string
`draught` | number
`shipLength` | number
`shipWidth` | number
`shipType` | number
`dimensionA` | number
`dimensionB` | number
`dimensionC` | number
`dimensionD` | number
`positionFixingDeviceType` | number
`reportClass` | string
`stream` | string

## Example

```typescript
import type { AisSharedMessagesOutputMessagesOutputStaticDataMessage } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "messageType": null,
  "mmsi": null,
  "msgtime": null,
  "imoNumber": null,
  "callSign": null,
  "destination": null,
  "eta": null,
  "name": null,
  "draught": null,
  "shipLength": null,
  "shipWidth": null,
  "shipType": null,
  "dimensionA": null,
  "dimensionB": null,
  "dimensionC": null,
  "dimensionD": null,
  "positionFixingDeviceType": null,
  "reportClass": null,
  "stream": null,
} satisfies AisSharedMessagesOutputMessagesOutputStaticDataMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AisSharedMessagesOutputMessagesOutputStaticDataMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


