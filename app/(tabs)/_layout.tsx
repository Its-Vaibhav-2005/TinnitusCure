import { Tabs } from "expo-router"
import { Activity, LayoutDashboard, Volume2, BookOpenText } from "lucide-react-native"

export default function TabsLayout(){
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#2f95dc',
      headerShown: true
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Read",
          tabBarIcon: ({color})=><BookOpenText size={24} color={color}/>
        }}
      />
      // Main Tab
      <Tabs.Screen 
        name="music"
        options={{
          title: "Sounds",
          tabBarIcon: ({color}) => <Volume2 size={24} color={color} />
        }}
      />
      // Exercises Tab
      <Tabs.Screen 
        name="exercise"
        options={{
          title: "Exercise",
          tabBarIcon: ({color}) => <Activity size={24} color={color} />
        }}
      />
      // Dasboard Tab
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
