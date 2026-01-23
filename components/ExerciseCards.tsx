import { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import { Atom, Wind, Zap, Activity, ChevronDown, ChevronUp } from "lucide-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ExerciseListItem } from "@/constants/exercise";

if (Platform.OS==='android' && UIManager.setLayoutAnimationEnabledExperimental){
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const getIcon = (iconName: string, color: string, size: number) => {
  switch (iconName.toLowerCase()) {
    case "atom":
      return <Atom color={color} size={size} />;
    case "wind":
      return <Wind color={color} size={size} />;
    case "activity":
      return <Activity color={color} size={size} />;
    default:
      return <Zap color={color} size={size} />;
  }
};


const ExerciseCard = ({item}: {item: ExerciseListItem})=>{
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleDescription = () =>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded((prevState) => !prevState);
  }

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={() => router.push(`/exercise/${item.id}`)}>
      <LinearGradient colors={["#4F46E5", "#6366F1", "#818CF8"]} start={{ x: 0, y: 0 }} end={{x: 1, y: 1}} style={style.card}>
        
        <View style={style.header}>
          <View style={style.iconContainer}>
            {getIcon(item.iconName, "#FFFFFF", 24)}
          </View>

          <Text style={style.title}>{item.exerciseName}</Text>

          <TouchableOpacity onPress={toggleDescription}>
            {isExpanded ? (
              <ChevronUp color="#FFFFFF" size={22} />
            ) : (
              <ChevronDown color="#FFFFFF" size={22} />
            )}
          </TouchableOpacity>
        </View>
        
        {isExpanded && (
          <View style={style.descriptionContainer}>
            <Text style={style.descriptionText}>{item.description}</Text>
          </View>
        )}

      </LinearGradient>
    </TouchableOpacity>
  )
}

export const renderItem = ({ item }: { item: ExerciseListItem }) => (
  <ExerciseCard item={item} />
);

const style = StyleSheet.create({
  card: {
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 40,
    alignItems: "flex-start",
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    marginHorizontal: 8,
  },
  descriptionContainer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.25)",
    textAlign: "justify"
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#E0E7FF",
  },
}); 
