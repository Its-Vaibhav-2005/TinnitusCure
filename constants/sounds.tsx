const THERAPEUTIC_SOUNDS = [
    {
        id: '1',
        songName: 'Brown Noise',
        iconName: 'AudioWaveform',
        file: require('@/assets/Therapeutic/brown_noise.wav'),
    },
    {
        id: '2',
        songName: 'Pink Noise',
        iconName: 'AudioWaveform',
        file: require('@/assets/Therapeutic/pink_noise.wav'),
    },
    {
        id: '3',
        songName: 'Violet Noise',
        iconName: 'AudioWaveform',
        file: require('@/assets/Therapeutic/violet_noise.wav'),
    },
    {
        id: '4',
        songName: 'White Noise',
        iconName: 'AudioWaveform',
        file: require('@/assets/Therapeutic/white_noise.wav'),
    }
]

const MUSIC_SOUNDS = [
  {
    id: '1',
    songName: 'Om',
    iconName: 'BrainCircuit',
    file: require('@/assets/Music/om_432hz.mp3')
  },
  {
    id: '2',
    songName: 'Himalayan Bowl',
    iconName: 'Mountain',
    file: require('@/assets/Music/himalayan_bowl_528Hz.mp3')
  }

] 

export { THERAPEUTIC_SOUNDS, MUSIC_SOUNDS };
