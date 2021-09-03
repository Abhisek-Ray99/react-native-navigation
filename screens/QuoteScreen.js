import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';


const Quotes = ({ navigation }) => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [tag, setTag] = useState('');

    useEffect(() => {
        getQuote()
    }, []);

    const getQuote = () => {
        let url = `https://goquotes-api.herokuapp.com/api/v1/random?count=10`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuotes = data.quotes;
                let randomNum = Math.floor(Math.random() * dataQuotes.length);
                let randomQuote = dataQuotes[randomNum];

                setQuote(randomQuote.text);
                setAuthor(randomQuote.author);
                setTag(randomQuote.tag);
            }).catch(err => {
                console.warn("can't fetch the Quotes",err);
            })
    }

    const handleClick = () => {
        getQuote();
    }

    return (
        <ScrollView>
            <View style={styles.container1}>
                <Image source={require('../assets/img/message.png')} style={styles.image} />
                <View style={styles.quoteContainer}>
                    <Text style={styles.quoteText}>" {quote} "</Text>
                    <View style={styles.quotea}>
                        <Text style={styles.quoteAuthor}>{author}</Text>
                    </View>
                    <View style={styles.quotea}>
                        <Text style={styles.quoteTag}>#{tag}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleClick}>
                    <Text style={styles.buttonText}>Show New Quote </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity
                    style={styles.qbutton}
                    onPress={() => navigation.navigate('Facts')}
                >
                    <Text style={styles.qtext} >View Some Facts</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
}

export default Quotes;

const styles = StyleSheet.create({
    container1: {
        borderRadius: 20,
        backgroundColor: '#CFF7E3',
        margin: 10,
        marginHorizontal: 16,
        height: 800,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF8573',
        elevation: 12,
    },
    container2: {
        borderRadius: 20,
        // backgroundColor: '#CFF7E3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    quoteContainer: {

        borderRadius: 10,
        padding: 20,
        margin: 10,

    },
    image: {
        marginBottom: 10,
        height: "20%",
        width: "40%",
        overflow: "hidden"
    },
    quoteText: {
        fontSize: 24,
        color: '#F9F8E4',
        fontFamily: 'AnticDidone-Regular',
    },
    quotea: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    quoteAuthor: {
        width: 180,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF8573',
        backgroundColor: '#F9F8E4',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'monospace',
    },
    quoteTag: {
        width: 110,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#71D6ED',
        backgroundColor: '#120731',
        padding: 4,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#E29F2D',
        padding: 10,
        alignItems: "center",
        borderRadius: 15,
        marginBottom: 80,
        borderWidth: 2,
        borderColor: '#F5E9DB',
    },
    buttonText: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        paddingHorizontal: 50,
        paddingVertical: 10,
    },
    qbutton: {
        backgroundColor: '#F5E9DB',
        margin: 30,
        paddingHorizontal: 60,
        paddingVertical: 15,
        borderRadius: 14,
        elevation: 2,
    },
    qtext: {
        textAlign: 'center',
        color: '#FFA764',
        fontSize: 22,
        fontWeight: 'bold'
    }
});