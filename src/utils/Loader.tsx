import React from 'react';
import { View } from 'react-native';
import { BarIndicator } from 'react-native-indicators';

export   const Loader = (props: any) => {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ height:'100%', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
      <View style={{ backgroundColor: 'transparent', position: 'absolute'}}>
        <BarIndicator size={40} color='white' />
      </View>
    </View>
  )
}