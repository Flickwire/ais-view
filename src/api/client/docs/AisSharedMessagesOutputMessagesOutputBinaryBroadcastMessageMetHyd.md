
# AisSharedMessagesOutputMessagesOutputBinaryBroadcastMessageMetHyd


## Properties

Name | Type
------------ | -------------
`type` | string
`messageType` | number
`mmsi` | number
`msgtime` | Date
`functionalId` | number
`designatedAreaCode` | number
`latitude` | number
`longitude` | number
`day` | number
`hour` | number
`minute` | number
`avgWindSpeed` | number
`windGust` | number
`windDirection` | number
`windGustDirection` | number
`airTemperature` | number
`relativeHumidity` | number
`dewPoint` | number
`airPressure` | number
`airPressureTendency` | [AisSharedMessagesEnumsMetHydTrend](AisSharedMessagesEnumsMetHydTrend.md)
`horizontalVisibility` | number
`waterLevel` | number
`waterLevelTrend` | [AisSharedMessagesEnumsMetHydTrend](AisSharedMessagesEnumsMetHydTrend.md)
`surfaceCurrentSpeed` | number
`surfaceCurrentDirection` | number
`currentSpeed2` | number
`currentDirection2` | number
`currentMeasuringLevel2` | number
`currentSpeed3` | number
`currentDirection3` | number
`currentMeasuringLevel3` | number
`significantWaveHeight` | number
`wavePeriod` | number
`waveDirection` | number
`swellHeight` | number
`swellPeriod` | number
`swellDirection` | number
`seaState` | [AisSharedMessagesEnumsMetHydBeaufortScale](AisSharedMessagesEnumsMetHydBeaufortScale.md)
`waterTemperature` | number
`precipitationType` | [AisSharedMessagesEnumsMetHydPrecipitation](AisSharedMessagesEnumsMetHydPrecipitation.md)
`salinity` | number
`ice` | [AisSharedMessagesEnumsMetHydIce](AisSharedMessagesEnumsMetHydIce.md)
`stream` | string

## Example

```typescript
import type { AisSharedMessagesOutputMessagesOutputBinaryBroadcastMessageMetHyd } from ''

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "messageType": null,
  "mmsi": null,
  "msgtime": null,
  "functionalId": null,
  "designatedAreaCode": null,
  "latitude": null,
  "longitude": null,
  "day": null,
  "hour": null,
  "minute": null,
  "avgWindSpeed": null,
  "windGust": null,
  "windDirection": null,
  "windGustDirection": null,
  "airTemperature": null,
  "relativeHumidity": null,
  "dewPoint": null,
  "airPressure": null,
  "airPressureTendency": null,
  "horizontalVisibility": null,
  "waterLevel": null,
  "waterLevelTrend": null,
  "surfaceCurrentSpeed": null,
  "surfaceCurrentDirection": null,
  "currentSpeed2": null,
  "currentDirection2": null,
  "currentMeasuringLevel2": null,
  "currentSpeed3": null,
  "currentDirection3": null,
  "currentMeasuringLevel3": null,
  "significantWaveHeight": null,
  "wavePeriod": null,
  "waveDirection": null,
  "swellHeight": null,
  "swellPeriod": null,
  "swellDirection": null,
  "seaState": null,
  "waterTemperature": null,
  "precipitationType": null,
  "salinity": null,
  "ice": null,
  "stream": null,
} satisfies AisSharedMessagesOutputMessagesOutputBinaryBroadcastMessageMetHyd

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AisSharedMessagesOutputMessagesOutputBinaryBroadcastMessageMetHyd
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


