import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const ColorBox = ({ text, colorCode }) => {
    const boxColor = {
        backgroundColor: colorCode
    }
    const textColor = {
        color: parseInt(colorCode.replace('#', ''), 16) > 0xffffff / 1.1 ? '#000' : '#fff'
    }
    return (
        <View style={[styles.box, boxColor]}>
            <Text style={[styles.text, textColor]}>{text}: {colorCode}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 4,
    },
    text: {
        fontWeight: 'bold'
    }
})

export default ColorBox;