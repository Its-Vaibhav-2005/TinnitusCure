
import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { MUSIC_SOUNDS } from "@/constants/sounds";
import { SoundItem } from "@/components/SoundItem";
import { useAudioStore } from "@/store/useAudioStore";
import { handleSoundToggle } from "@/utils/audioHelpers";


export default function TherapeuticPage(){
  const playingId = useAudioStore((state)=>state.playingId)
  
  return (
    <SafeAreaView style={style.container}>
      <Stack.Screen
        options={{
          title: "Music Sounds",
          headerTitleStyle: { fontWeight: 'bold' },
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#F8F9FA' }
        }}
      />
      <FlatList 
        data={MUSIC_SOUNDS}
        keyExtractor={(item)=>item.id}
        numColumns={2}
        columnWrapperStyle={style.row}
        contentContainerStyle={style.listContent}
        ListHeaderComponent={()=>(
          <View style={style.headerArea}>
            <Text style={style.welcomeText}>
              Welcome to Music sounds
            </Text>
            <Text style={style.subText}>
              Find Your Calm!
            </Text>
          </View>
        )}
        renderItem={({item})=>(
          <SoundItem 
            name={item.songName}
            iconName={item.iconName as any}
            isActive={playingId === item.id}
            onPress={()=>handleSoundToggle(item.id, item.file)}
          />
        )}
      />
    </SafeAreaView>
)}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  headerArea: {
    paddingHorizontal: 8,
    marginBottom: 20,
    marginTop: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  subText: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  listContent: {
    padding: 16,
  },
  row: {
    justifyContent: 'flex-start',
  },
});

