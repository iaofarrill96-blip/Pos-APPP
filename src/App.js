import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

export default function App(){
  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View>
        <Text style={{fontSize:20,fontWeight:'700'}}>Mi Punto De Ventas - React Native (Pure)</Text>
        <Text style={{marginTop:12}}>Proyecto preparado para compilar APK en Codemagic.</Text>
      </View>
    </SafeAreaView>
  );
}
