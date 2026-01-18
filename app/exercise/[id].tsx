import React, {useEffect} from "react";
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { SafeAreaView} from "react-native-safe-area-context";
import { useVideoPlayer, VideoView } from 'expo-video';
import { getExerciseById } from "@/constants/exercise";

const {width} = Dimensions.get('window')

export default function ExerciseDetailScreen(){
  const {id} = useLocalSearchParams();

  const data = getExerciseById(id as string)

  if(!data){
    return (
      <View style={style.center}>
        <Text> No Exercise Found ! </Text>
      </View>
    )
  }

  const player = useVideoPlayer(data.video, (player) => {
    player.loop = true;
    player.play();
  });

  // Optional: Clean up or specific logic when 'id' changes
  useEffect(() => {
    if (data.video) {
        player.replace(data.video);
        player.play();
    }
  }, [id, data.video]);

  return(
    <View style={style.container}>
      <Stack.Screen options={{title: data.name, headerBackTitle: 'Back'}} />

      <SafeAreaView edges={['top']} style={style.videoContainer}>
      {/* Video Section */}
        <Text style={style.videoTitle}>{data.name}</Text>
        <View style={style.videoWrapper}>
          <VideoView
            style={style.video}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
            nativeControls={true} 
          />
        </View>
      </SafeAreaView>
      <ScrollView style={style.scrollView} contentContainerStyle={style.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={style.sectionTitle}>Steps</Text>
        {data.steps.map((stepItem, index)=>(
          <View key={index} style={style.stepCard}>
            <Text style={style.stepHeader}>{data.name} - Step {stepItem.step}</Text>
            <View style={style.imageContainer}>
              <Image source={stepItem.image} style={style.stepImage} resizeMode="contain" />
            </View>
            <Text style={style.stepDescription}>{stepItem.about}</Text>
          </View>
        ))}

        {/* Bottom Padding */}
        <View style={{height: 40}} />
      </ScrollView>
    </View> 
  );
};


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // --- Video Styles ---
  videoContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 10,
    zIndex: 10, // Ensure it sits above scroll content if needed
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  videoWrapper: {
    width: width,
    height: 220, // Fixed height for video section
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  // --- Scroll Area Styles ---
  scrollView: {
    flex: 1, // Takes remaining space
    backgroundColor: '#F9FAFB',
  },
  scrollContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
    color: '#374151',
  },
  // --- Step Card Styles ---
  stepCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  stepHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1F2937',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    marginBottom: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  stepImage: {
    width: '100%',
    height: '100%',
  },
  stepDescription: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 22,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
