import { Stack } from 'expo-router'
import { useEffect } from 'react'
import { setAudioModeAsync } from 'expo-audio'

export default function RootLayout(){
  useEffect(() => {
    async function setupAudio() {
      await setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        interruptionModeIOS: 1,
        shouldRouteThroughEarpieceIOS: false,
      })
    }

    setupAudio()
  }, [])

  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
      <Stack.Screen name="sounds" options={{ headerShown: true }} />
    </Stack>
  )
}
