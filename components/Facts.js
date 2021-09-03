import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const Facts = () => {

    const [fact, setFact] = useState([]);

    const handleFacts = useCallback(async () => {
        const result = await fetch('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=10');
        const fact = await result.json();
        if (result.ok) {
            setFact(fact);
        }
    });

    useEffect(() => {
        handleFacts();
    }, [])

    return (
        <View style={styles.quoteView}>
            <FlatList
                style={styles.list}
                data={fact}
                keyExtractor={item => item._id}
                renderItem={({ item }) => <Text style={styles.text}>{item.text}</Text>}
            />
        </View>
    )
}

export default Facts

const styles = StyleSheet.create({
    quoteView: {
        backgroundColor: '#fff',
    },
    list: {
        margin: 12,
    },
    text: {
        fontSize: 24,
        fontFamily: 'AnticDidone-Regular',
    }
})
