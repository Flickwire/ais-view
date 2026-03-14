
# V1LatestAisGet200ResponseInner


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
`functionalId` | number
`designatedAreaCode` | number
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
`courseOverGround` | number
`aisClass` | string
`altitude` | number
`navigationalStatus` | number
`rateOfTurn` | number
`speedOverGround` | number
`trueHeading` | number
`imoNumber` | number
`callSign` | string
`destination` | string
`eta` | string
`draught` | number
`shipLength` | number
`shipWidth` | number
`shipType` | number
`positionFixingDeviceType` | number
`reportClass` | string
`sequenceNumber` | number
`destinationMmsi` | number
`safetyRelatedText` | string

## Example

```typescript
import type { V1LatestAisGet200ResponseInner } from ''

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
  "functionalId": null,
  "designatedAreaCode": null,
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
  "courseOverGround": null,
  "aisClass": null,
  "altitude": null,
  "navigationalStatus": null,
  "rateOfTurn": null,
  "speedOverGround": null,
  "trueHeading": null,
  "imoNumber": null,
  "callSign": null,
  "destination": null,
  "eta": null,
  "draught": null,
  "shipLength": null,
  "shipWidth": null,
  "shipType": null,
  "positionFixingDeviceType": null,
  "reportClass": null,
  "sequenceNumber": null,
  "destinationMmsi": null,
  "safetyRelatedText": null,
} satisfies V1LatestAisGet200ResponseInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1LatestAisGet200ResponseInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


