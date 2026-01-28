import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { useRouter } from "expo-router";

import { CATEGORIES } from "@/constants/category";
import { EXERCISE_LIST } from "@/constants/exercise";

import { MusicCategory } from "@/components/MusicCategory";
import { renderItem } from "@/components/ExerciseCards";
import { defaultRouteInfo } from "expo-router/build/global-state/routeInfo";


const {width} = Dimensions.get('window')
const PADDING = 20
const GAP = 15
const CARD_WIDTH = (width - (PADDING * 2) - GAP) / 2;


export default function TherapyScreen(){
  const router = useRouter()

  const handlePress = (id:string)=>{
    console.log(`Navigated to: ${id}`)
    router.push(`sounds/${id}` as any)
  }

  const SectionHeader = ()=>{
    return(
      <View style={styles.sectionTwoHeaderContainer}>
        <Text style={styles.header}>Exercise</Text>
        <Text style={styles.subHeader}>Breathe. Move. Relax.</Text>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      {/* Section 1 */}
      <View style={styles.fixedSection}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Sound Therapy</Text>
          <Text style={styles.subHeader}>Select Category</Text>
        </View>
        
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.categoryRow}
          renderItem={({ item }) => (
            <MusicCategory
              title={item.title}
              iconName={item.icon as any}
              colors={item.colors as [string, string]}
              onPress={() => handlePress(item.id)}
              containerStyle={styles.categoryCard}
            />
          )}
          scrollEnabled={false}
        />
      </View>
    {/* Section 2 */}
    <View style={styles.scrollableSection}>
      <FlatList
        data={EXERCISE_LIST}
        keyExtractor={(item)=>item.id}
        renderItem={renderItem}
        ListHeaderComponent={SectionHeader}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={()=><View style={{height: 16}} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: 10,
  },
  fixedSection: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: '#F8F9FA',
    zIndex: 1,
  },
  categoryRow: {
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '48%',
  },
  headerContainer: {
    marginBottom: 15,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
    alignItems: 'flex-start'
  },
  scrollableSection: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  sectionTwoHeaderContainer: {
    marginTop: 24,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A1A',
  },
  subHeader: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});
