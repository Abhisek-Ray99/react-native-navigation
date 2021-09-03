import React, { useCallback, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [c_count, setC_count] = useState(0);

    const handleIncrement = useCallback(() => {
        setC_count(value => value + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        setC_count(c_count - 1)
    }, [c_count]);

    return (
        <ScrollView>
            <View style={styles.view2}>
                <Text style={styles.countH}>Counter: {count}</Text>
                <View style={styles.view3}>
                    <TouchableOpacity
                        style={styles.inbutton}
                        onPress={() => setCount(currValue => currValue + 1)}
                    >
                        <Text style={styles.intext}>Increase</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.debutton}
                        onPress={() => setCount(currValue => currValue - 1)}
                    >
                        <Text style={styles.detext}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.view2}>
                <Text style={styles.countH}>Counter: {c_count}</Text>
                <View style={styles.view3}>
                    <TouchableOpacity
                        style={styles.inbutton}
                        onPress={handleIncrement}
                    >
                        <Text style={styles.intext}>Increase</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.debutton}
                        onPress={handleDecrement}
                    >
                        <Text style={styles.detext}>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Counter

const styles = StyleSheet.create({
    view2: {
        borderRadius: 20,
        backgroundColor: '#CFF7E3',
        margin: 10,
        marginHorizontal: 16,
        height: 300,
    },
    view3: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        bottom: 0,
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
    debutton: {
        backgroundColor: '#CDD4FB',
        paddingHorizontal: 30,
        paddingVertical: 6,
        elevation: 2,
        borderRadius: 10,
    },
    detext: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#7C93FF',
    },
    countH: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#70BB95',
        margin: 10
    }
})
