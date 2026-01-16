import { useAudioStore } from "@/store/useAudioStore";

export const handleSoundToggle = (id: string, file:any)=>{
  const {playSelection} = useAudioStore.getState()
  playSelection(id, file)
}
