import { Redirect, Tabs } from "expo-router"
import { LayoutDashboard, BookOpenText, HeartPulse, GalleryVerticalEnd } from "lucide-react-native"
import HeartIcon from "@/components/DonateIcon"
import { useAuth } from "@clerk/clerk-expo"

export default function TabsLayout(){
  const {isSignedIn} = useAuth()

  if(!isSignedIn){
    return <Redirect href="/(auth)/sign-in" />
  }

  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#2f95dc',
      headerShown: true,
      headerRight: () => <HeartIcon/>
    }}>
      {/* Main Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Read",
          tabBarIcon: ({color})=><BookOpenText size={24} color={color}/>
        }}
      />
      {/* Sound Tab */}
      <Tabs.Screen 
        name="therapy"
        options={{
          title: "Therapy",
          tabBarIcon: ({color}) => <HeartPulse size={24} color={color} />
        }}
      />
      {/* Literature Tab */}
      <Tabs.Screen 
        name="literature"
        options={{
          title: "Literature",
          tabBarIcon: ({color}) => <GalleryVerticalEnd size={24} color={color} />
        }}
      />
      {/* Dasboard Tab */}
      <Tabs.Screen 
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({color}) => <LayoutDashboard size={24} color={color} />
        }}
      />
    </Tabs>
  )
}
