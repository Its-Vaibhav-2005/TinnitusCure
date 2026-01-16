import React, { ReactElement } from "react";
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from 'react-native';
import * as Icons from 'lucide-react-native';

const {width} = Dimensions.get('window')
const COLUMN_WIDTH = width-48

interface SoundItemProps{
  name: string;
  iconName: keyof typeof Icons;
  isActive: boolean;
  onPress: ()=>void;
}

export const SoundItem = ({name, iconName, isActive, onPress}: SoundItemProps) => {
  // If the iconName is not found, default to 'Music' to prevent a crash
  const IconComponent = (Icons[iconName] || Icons.Music) as React.ElementType;
  
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[style.card, isActive && style.activeCard]}
    >
      <View style={[style.iconCircle, isActive && style.activeIconCircle]}>
        <IconComponent size={28} color={isActive ? '#fff' : '#4facfe'} />
      </View>
      <Text style={[style.name, isActive && style.activeName]}>{name}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  card:{
    flex: 1, 
    margin: 8, // Add margin so items don't touch
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    // Shadow properties...
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  activeCard: {
    backgroundColor: '#4facfe',
    borderColor: '#4facfe',
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  activeIconCircle: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeName: {
    color: '#fff',
  },
})
