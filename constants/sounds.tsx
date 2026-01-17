const THERAPEUTIC_SOUNDS = [
    {
        id: 'brown_noise',
        songName: 'Brown Noise',
        iconName: 'AudioWaveform',
        file: require('@/assets/Therapeutic/brown_noise.wav'),
    },
    {
        id: 'pink_noise',
        songName: 'Pink Noise',
        iconName: 'AudioWaveform',
        file: require('@/assets/Therapeutic/pink_noise.wav'),
    },
    {
        id: 'violet_noise',
        songName: 'Violet Noise',
        iconName: 'AudioWaveform',
        file: require('@/assets/Therapeutic/violet_noise.wav'),
    },
    {
        id: 'white_noise',
        songName: 'White Noise',
        iconName: 'AudioWaveform',
        file: require('@/assets/Therapeutic/white_noise.wav'),
    }
]

const MUSIC_SOUNDS = [
  {
    id: 'om',
    songName: 'Om',
    iconName: 'BrainCircuit',
    file: require('@/assets/Music/om_432hz.mp3')
  },
  {
    id: 'himalayan_bowl',
    songName: 'Himalayan Bowl',
    iconName: 'Mountain',
    file: require('@/assets/Music/himalayan_bowl_528Hz.mp3')
  }

] 

export { THERAPEUTIC_SOUNDS, MUSIC_SOUNDS };
