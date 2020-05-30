import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import CountryPicker from 'react-native-country-picker-modal'
import { CountryCode, Country } from 'react-native-country-picker-modal'

export default function country_picker(props : any) {
  const [countryCode, setCountryCode] = useState<CountryCode>('FR')
  const [visibility, setvisibility] = useState<boolean>(false)

  const onSelect = (country: Country) => {

const { onSelect } = props
if(country.callingCode[0]) setCountryCode(country.cca2)

onSelect(country)

  }

  const { themeStyle, mainContainer, buttonStyle } = props
  return (
    <SafeAreaView style={[mainContainer,{flex:1,backgroundColor:'white'}]}>
      <CountryPicker
        {...{
          countryCode,
          withFilter: true,
          withFlag:true,
          withCountryNameButton: false,
          withAlphaFilter : true,
          withCallingCode : true,
          withEmoji : true,
          onSelect,
          withCallingCodeButton : true,
          withFlagButton : false,
          theme: themeStyle,
          closeButtonImageStyle: buttonStyle
        }}
        // containerButtonStyle={{ backgroundColor:'red' }}
        visible={visibility}

      />
    </SafeAreaView>
  )
}