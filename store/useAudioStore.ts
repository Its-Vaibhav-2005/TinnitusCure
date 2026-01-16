import { create} from 'zustand'
import { createAudioPlayer, AudioPlayer } from 'expo-audio'

interface AudioState{
  playingId: string|null;
  player: AudioPlayer|null;
  playSelection: (id: string, file:any)=>void;
  stopSelection: ()=>void
}

export const useAudioStore = create<AudioState>((set, get)=>({
  playingId: null,
  player: null,
  playSelection: (id, file)=>{
    const currentState = get()
    if(currentState.playingId === id && currentState.player){
      get().stopSelection()
      return
    }  
    if(currentState.player){
      currentState.player.pause()
    }
    const newPlayer = createAudioPlayer(file)
    newPlayer.loop = true
    newPlayer.play()

    set({
      playingId: id,
      player: newPlayer
    })
  },
  stopSelection: ()=>{
    const {player} = get()
    if(player){
      player.pause()
    }
    set({playingId: null, player: null})
  }
}))
