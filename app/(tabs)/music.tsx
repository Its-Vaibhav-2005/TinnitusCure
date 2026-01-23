import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { CATEGORIES } from '@/constants/category'
import { CategoryCard } from '@/components/CategoryCard'
import { useRouter } from 'expo-router'

export default function SoundScreen(){
  const router = useRouter()
  const handlePress = (id:string)=>{
    console.log(`Navigated to: ${id}`)
    router.push(`sounds/${id}` as any)
  }
  return(
    <ScrollView style={style.constainer} contentContainerStyle={style.contentContainer}>
      <Text style={style.header}>Sound Therapy</Text>
      <Text style={style.subHeader}>Select a category</Text>
      <View style={style.cardList}>
        {CATEGORIES.map((item)=>(
          <CategoryCard 
            key={item.id}
            title={item.title}
            description={item.description}
            iconName={item.icon as any}
            colors={item.colors}
            onPress={()=>handlePress(item.id)}
          />
        ))}
      </View>
    </ScrollView>
  )
}


const style = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: '#F8F9FA'
    },
    contentContainer: {
      padding: 16,
      paddingTop: 20
    },
    header: {
      fontSize: 28,
      fontWeight: '800',
      color: '1A1A1A'
    },
    subHeader: {
      fontSize: 16,
      color: '#666',
      marginBottom: 20
    },
   cardList: {
    alignItems: "center"
   } 
})
