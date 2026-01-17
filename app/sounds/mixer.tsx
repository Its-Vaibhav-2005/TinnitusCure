import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import Slider from "@react-native-community/slider";
import { MUSIC_SOUNDS, THERAPEUTIC_SOUNDS } from "@/constants/sounds";
import { SoundItem } from "@/components/SoundItem";
import { useMixerStore } from "@/store/useMixerStore";
import {Volume2, Trash2} from "lucide-react-native"
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from "expo-router";

export default function MixerPage(){
  const {activeSounds, toggleSound, updateVolume, stopAll} = useMixerStore();
  return (
    <SafeAreaView style={style.container} edges={['top']}>
      <Stack.Screen options={{headerShown: false}} />
        <View style={style.activeSection}>
          <View style={style.activeHeader}>
            <Text style={style.sectionTitle}>
              Your Active Mix ({activeSounds.length}/5)
            </Text>
            {activeSounds.length>0 && (<Trash2 color="#FF4B4B" size={20} onPress={stopAll}/>)}
          </View>
          {activeSounds.length===0?(
            <Text style={style.emptyText}>Select sound below to start mixing</Text>
          ):(
            activeSounds.map((sound)=>(
              <View key={sound.id} style={style.volumeRow}>
                <Text style={style.soundLabel}>{sound.name}</Text>
                <Slider
                  style={style.slider}
                  minimumValue={0}
                  maximumValue={1}
                  value={sound.volume}
                  onValueChange={(val)=>updateVolume(sound.id, val)}
                  minimumTrackTintColor="#4facfe"
                  maximumTrackTintColor="#D1D1D1"
                  thumbTintColor="#4facfe"
                />
              </View>
            ))
          )}
        </View>
        <View style={style.divider}>
          <Text style={style.gridTitle}>Available Sounds</Text>
        </View>
        <FlatList
          data = {[...MUSIC_SOUNDS,...THERAPEUTIC_SOUNDS]}
          numColumns={3}
          keyExtractor={(item)=>item.id}
          contentContainerStyle={style.gridContent}
          renderItem={({item})=>(
            <SoundItem
              name={item.songName}
              iconName={item.iconName as any}
              isActive={activeSounds.some(s=>s.id===item.id)}
              onPress={()=>toggleSound(item.id, item.songName, item.file)}
            />
          )}
        />
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F8F9FA' 
  },
  activeSection: { 
    padding: 20, 
    backgroundColor: '#fff', 
    borderBottomLeftRadius: 32, 
    borderBottomRightRadius: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 8,
    zIndex: 10,
  },
  activeHeader: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginBottom: 15
  },
  sectionTitle: { 
    fontSize: 22, 
    fontWeight: '800', 
    color: '#1A1A1A' 
  },
  subTitle: {
    fontSize: 14,
    color: '#666',
  },
  sliderList: {
    marginTop: 5,
  },
  volumeRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 4 
  },
  soundLabel: { 
    width: 70, 
    fontSize: 13, 
    color: '#444', 
    fontWeight: '600' 
  },
  slider: { 
    flex: 1, 
    height: 40 
  },
  emptyContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderStyle: 'dashed',
    borderRadius: 16,
  },
  emptyText: { 
    color: '#AAA', 
    fontSize: 14,
  },
  gridHeader: {
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 10,
  },
  gridTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    paddingLeft: 25,
    marginTop: 8 
  },
  gridContent: { 
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  row: { 
    justifyContent: 'space-between' 
  },
  clearButton: {
    padding: 8,
    backgroundColor: '#FFF0F0',
    borderRadius: 12,
  }
});
