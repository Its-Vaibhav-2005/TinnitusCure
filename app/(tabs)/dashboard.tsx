import { StyleSheet, Text, View } from 'react-native';

export default function DashboardScreen(){
    return (
        <View style={style.constainer}>
            <Text style={style.title}>Dashboard Screen</Text>
            <Text>Welcome to your dashboard!</Text>
        </View>
    )
}

const style = StyleSheet.create({
    constainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    }
})