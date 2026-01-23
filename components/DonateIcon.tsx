import { TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Heart, DollarSign, View } from 'lucide-react-native'

export default function HeartIcon(){
  const router = useRouter()

  const handlePress = () => {
    router.push('/donate')
  }

  const iconColor = "#2f95dc";
  
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
       <DollarSign size={28} color={iconColor} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 15, // Adds spacing from the right edge
  }
});
