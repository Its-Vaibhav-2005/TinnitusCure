import { Video } from "expo-av";
import { ImageSourcePropType } from "react-native";


export interface Step{
  step: number;
  image: ImageSourcePropType;
  about: string;
}

export interface ExerciseData{
  id: string;
  name: string;
  video: any;
  steps: Step[];
}

export interface ExerciseListItem{
  id: string;
  iconName: string;
  exerciseName: string;
  data: ExerciseData;
  description: string;
}

// Exrecises 
const BHRAMARI: ExerciseData = {
  id: "bhramari",
  name: "Bhramari Pranayam",
  video: require('@/assets/Bhramani/video.mp4'),
  steps: [
    { step: 1, image: require('@/assets/Bhramani/image1.png'), about: 'Sit comfortably in a calm place, just like in the picture.Keep your back straight, shoulders relaxed, and eyes gently closed.Rest your hands on your knees and take a few normal, deep breaths to settle your body and mind.' },
    { step: 2, image: require('@/assets/Bhramani/image2.png'), about: 'Gently close your eyes. Place your fingers lightly over your closed eyelids, without pressing hard. Stay relaxed and keep your face and shoulders soft.' },
    { step: 3, image: require('@/assets/Bhramani/image3.png'), about: 'Close your eyes gently. Use your thumbs to lightly block your ears (and rest fingers near the nose as shown). Keep your face relaxed and sit still.' },
    { step: 4, image: require('@/assets/Bhramani/image4.png'), about: 'Take a slow, deep breath in through your nose. Now, while gently pressing your eyes and ears, slowly breathe out and make a soft humming sound like a bee. Feel the vibration inside your head and chest. Repeat this 3–5 times, staying calm and relaxed.' },
  ]
}


// Exrecises List 
export const EXERCISE_LIST: ExerciseListItem[] = [
  {
    id: "bhramari",
    iconName: "atom",
    exerciseName: 'Bhramari Pranayama',
    data: BHRAMARI,
    description: 'Bhramari Pranayama, also known as "Humming Bee Breath",  is a calming yogic breathing technique where you produce a steady humming sound, similar to a buzzing bee, during exhalation. It is performed by inhaling deeply through the nose and exhaling slowly while keeping the mouth closed to create internal vibrations throughout the head and nervous system.'
  },
]

// Function to  get data
export const getExerciseById = (id: string)=>{
  return EXERCISE_LIST.find(ex=>ex.id===id)?.data
}
