import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet,  FlatList } from 'react-native'

import PalettePreview from '../components/PalettePreview';

const Palettes = ({ navigation }) => {

    const [palettes, setPalettes] = useState([]);
    const [isrefreshing, setIsrefreshing] = useState(false);

    const handleFetchPalettes = useCallback(async () => {
        const response = await fetch('https://color-palette-api.kadikraman.now.sh/palettes');
        if (response.ok) {
            const palettes = await response.json();
            setPalettes(palettes);
        }
    }, []);

    useEffect(() => {
        handleFetchPalettes();
    }, []);

    const handleRefresh = useCallback(async () => {
        setIsrefreshing(true);
        await handleFetchPalettes();
        setIsrefreshing(false);
    }, []);


    return (
        <FlatList
            contentContainerStyle={{
                justifyContent: 'center'
            }}
            style={styles.list}
            data={palettes}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    handlePress={() => {
                        navigation.navigate('ColourPalette', item)
                    }}
                    palette={item}
                />

            )}
            refreshing={isrefreshing}
            onRefresh={handleRefresh}

        />
    )
}

export default Palettes

const styles = StyleSheet.create({
    list: {
        padding: 10,
        backgroundColor: '#fff',
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
    }
})
