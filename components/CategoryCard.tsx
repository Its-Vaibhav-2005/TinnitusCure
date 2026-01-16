import React from "react";
import {Text, View, Dimensions, TouchableOpacity, StyleSheet} from "react-native"
import {LinearGradient} from "expo-linear-gradient"
import * as Icons from 'lucide-react-native'

const {width} = Dimensions.get('window')

interface CategoryCardProps{
  title: string;
  description: string;
  iconName:keyof typeof Icons;
  colors: [string, string];
  onPress: ()=> void;
}

export const CategoryCard = ({title, description, iconName, colors, onPress}: CategoryCardProps)=>{
  const IconComponent = Icons[iconName] as React.ElementType;

  return (
    <TouchableOpacity style={style.cardContainer} onPress={onPress} activeOpacity={0.8}>
      <LinearGradient colors={colors} style={style.gradient}>
        <View style={style.content}>
          <View style={style.iconContainer}>
            <IconComponent color="#fff" size={32} />
          </View>
          <View style={style.textContainer}>
            <Text style={style.title}>{title}</Text>
            <Text style={style.description}>{description}</Text>
          </View>
          <Icons.ChevronRight color="rgba(255,255,255,0.5)" size={20} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  cardContainer:{
    width: width-32,
    height: 100,
    borderRadius: 22,
    marginVertical: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  gradient:{
    flex: 1,
    borderRadius: 20,
    padding: 20
  },
  content:{
    flexDirection: 'row',
    alignItems: "center"
  },
  iconContainer:{
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 12,
    borderRadius: 15,
    marginRight: 16
  },
  textContainer: {flex: 1},
  title:{
    color: '#fff',
    fontSize: 18,
    fontWeight: '700'
  },
  description:{
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    marginTop: 2
  }
})
