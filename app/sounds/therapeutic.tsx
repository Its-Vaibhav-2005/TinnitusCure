import { View, Text, StyleSheet } from "react-native";
import { Stack } from "expo-router";

export default function TherapeuticPage(){
  return (
    <View style={style.container}>
      <Stack.Screen options={{title:'Therapeutic Sounds', headerShown: true}} />
      <Text style={style.text}>Welcome to Therapeutic Sounds Page</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: '600' }
});
