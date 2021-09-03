import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

const PalettePreview = ({ handlePress, palette }) => {
    return (
        <TouchableOpacity onPress={handlePress} >
            <Text style={styles.text}>{palette.paletteName}</Text>
            <FlatList
                contentContainerStyle={{justifyContent: 'space-between', padding: 10}}
                style={styles.list}
                horizontal={true}
                data={palette.colors.slice(0, 5)}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => <View style={[{ backgroundColor: item.hexCode }, styles.colorbox]} />}
            />
        </TouchableOpacity>
    )
}

export default PalettePreview

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    colorbox: {
        height: 30,
        width: 30,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 20,
    },
    list: {
        marginBottom: 20,
        
    }
})
