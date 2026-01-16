import { Tabs } from "expo-router"
import { Activity, LayoutDashboard, Volume2 } from "lucide-react-native"

export default function TabsLayout(){
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#2f95dc',
      headerShown: true
    }}>
      // Main Tab
      <Tabs.Screen 
        name="index"
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