import { create } from "zustand";
import { createAudioPlayer, AudioPlayer } from "expo-audio";
import { Volume } from "lucide-react-native";

interface ActiveSound{
  id: string;
  name: string;
  player: AudioPlayer;
  volume: number;
}

interface MixerState{
  activeSounds: ActiveSound[];
  toggleSound: (id: string, name: string, file: any)=>void;
  updateVolume: (id: string, volume: number)=>void;
  stopAll: ()=>void;
}


export const useMixerStore = create<MixerState>((set, get)=>({
  activeSounds: [],
  toggleSound: (id, name, file)=>{
    const {activeSounds} = get()
    const existingIndex = activeSounds.findIndex(s=>s.id===id)
    if(existingIndex>-1){
      activeSounds[existingIndex].player.pause()
      set({activeSounds: activeSounds.filter(s=>s.id !== id)})
    }
    else{
      if(activeSounds.length >= 5){
        alert("Maximum 5 reached")
        return
      }
      const newPlayer = createAudioPlayer(file);
      newPlayer.loop = true;
      newPlayer.play()

      const newSound: ActiveSound = {id, name, player: newPlayer, volume:1.0}
      set({activeSounds: [...activeSounds, newSound]})
    }
  },
  updateVolume: (id, volume)=>{
    const {activeSounds} = get();
    const sound = activeSounds.find(s=>s.id === id)
    if(sound){
      sound.player.volume = volume
      set({activeSounds: [...activeSounds]})
    }
  },
  stopAll: ()=>{
    get().activeSounds.forEach(s=>s.player.pause())
    set({activeSounds: []})
  }
}))
