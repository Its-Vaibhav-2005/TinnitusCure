import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { EXERCISE_LIST } from "@/constants/exercise";
import { renderItem } from "@/components/ExerciseCards";

export default function ExerciseListScreen(){

  return (
    <View style={[style.container, { paddingTop: 20 }]}>
      <Text style={style.header}>Exercises</Text>
      <Text style={style.subHeader}> Breathe. Move. Relax. </Text>
      <FlatList
        data={EXERCISE_LIST}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        contentContainerStyle={style.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingVertical: 0
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingTop: 0,
    paddingHorizontal: 20,
    color: '#1F2937',
    marginBottom: 0,
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    paddingHorizontal: 16,
    paddingBottom: 12
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  }
});
