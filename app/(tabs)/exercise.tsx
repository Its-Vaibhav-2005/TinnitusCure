import { StyleSheet, Text, View } from 'react-native';

export default function ExerciseScreen(){
    return (
        <View style={style.container}>
            <Text style={style.title}>
                Exercise Page
            </Text>
            <Text>
                Here you can find various exercises to improve your well-being.
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold'
    }
})