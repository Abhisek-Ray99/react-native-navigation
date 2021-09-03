import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ColorBox from '../components/Box'


const ColorPalette = ({ route }) => {
    const { colors, paletteName } = route.params;

    return (
        <View style={styles.container}>
            <FlatList
                data={colors}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => (
                    <ColorBox text={item.colorName} colorCode={item.hexCode} />
                )}
                ListHeaderComponent={<Text style={styles.title}>{paletteName}</Text>}

            />
        </View>
    )
}

export default ColorPalette

const styles = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center'
    },
    container: {
      flexDirection: 'column',
      paddingHorizontal: 10,
    },
  
  })
  
