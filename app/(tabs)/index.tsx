import React from "react";
import {View, Text, StyleSheet} from "react-native"

export default function ReadScreen(){

  return (
    <View style={style.constainer}>
      <Text style={style.title}>Read Screen</Text>
      <Text>About Tinnitus!</Text>
    </View>
  )
}

const style = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})
