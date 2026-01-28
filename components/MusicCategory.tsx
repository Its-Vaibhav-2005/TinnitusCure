import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View, ViewStyle, StyleProp } from "react-native";

interface MusicCategoryProps{
  title: string;
  iconName: keyof typeof MaterialIcons.glyphMap;
  colors: [string, string];
  onPress: ()=>void;
  containerStyle?: StyleProp<ViewStyle>;
}

export const MusicCategory = ({title, iconName, colors, onPress, containerStyle}:MusicCategoryProps)=>{
  return (
    <TouchableOpacity
      style={[styles.cardContainer, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <LinearGradient colors={colors} start={{x:0, y:0}} end={{x:1, y:1}} style={styles.gradient}>
        <View style={styles.iconCircle}>
          <MaterialIcons name={iconName} size={28} color="#ffffff" />
        </View>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    // 2. Add bottom margin here for vertical spacing between rows
    marginBottom: 16, 
    borderRadius: 20,
    
    // Shadows
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  gradient: {
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 140, // Keeps height consistent
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
});
