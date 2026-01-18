import React from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Wind, Activity, Zap, Atom } from "lucide-react-native";
import { EXERCISE_LIST, ExerciseListItem } from "@/constants/exercise";


export default function ExerciseListScreen(){

  const router = useRouter()
  const getIcon = (name: string, color: string, size: number) => {
    switch (name) {
      case 'atom': return <Atom color={color} size={size} />
      case 'Wind': return <Wind color={color} size={size} />;
      case 'Activity': return <Activity color={color} size={size} />;
      default: return <Zap color={color} size={size} />;
    }
  };

  const renderItem = ({item}: {item: ExerciseListItem})=>(
    <TouchableOpacity 
      style = {style.card}
      onPress = {()=>{
        router.push(`/exercise/${item.id}`)
      }}
    >
      <View style={style.iconContainer}>
        {getIcon(item.iconName, '#4F46E5', 24)}
      </View>
      <Text style={style.cardText}>{item.exerciseName}</Text>
      <View style={{width: 40}} />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.header}>Exercises</Text>
      <FlatList
        data={EXERCISE_LIST}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        contentContainerStyle={style.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    padding: 20,
    color: '#1F2937',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row', // Horizontal Layout
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 16,
    // Shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 40,
    alignItems: 'flex-start',
  },
  cardText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    flex: 1,
  },
});
