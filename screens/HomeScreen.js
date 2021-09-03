import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const HomeScreen = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View
                    style={{
                        marginRight: 10
                    }}
                >
                    <TouchableOpacity
                        style={styles.touchbutton}
                        onPress={() => navigation.navigate('counter')}
                    >
                        <Text style={styles.cTitle}>Counter Screen</Text>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation])


    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity
                style={styles.inbutton}
                onPress={() => navigation.navigate('Palettes')}
            >
                <Text style={styles.intext}>Select Color</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    touchbutton: {
        backgroundColor: '#F5E9DB',
        padding: 10,
        borderRadius: 14,
    },
    cTitle: {
        textAlign: 'center',
        color: '#FFA764',
        fontSize: 20,
        fontWeight: 'bold'
    },
    item: {
        width: 200,
        height: 200
    },
    inbutton: {
        backgroundColor: '#94D6F5',
        paddingHorizontal: 30,
        paddingVertical: 6,
        elevation: 2,
        borderRadius: 10,
    },
    intext: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1099FF',
    },
})
