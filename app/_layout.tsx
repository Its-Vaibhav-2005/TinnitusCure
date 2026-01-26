import { Stack } from 'expo-router'
import { useEffect } from 'react'
import { setAudioModeAsync } from 'expo-audio'
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from '@/utils/cache'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!
console.log(publishableKey)

if (!publishableKey) {
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}

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
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} /> 
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="sounds" options={{ headerShown: true }} />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  )
}
