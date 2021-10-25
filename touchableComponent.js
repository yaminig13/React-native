import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { LongPressGestureHandler } from 'react-native-gesture-handler';

export default function App() {
    const [tagCloud, settagCloud] = useState([
        { name: 'shaun', id: '1' },
        { name: 'yoshi', id: '2' },
        { name: 'mario', id: '3' },
        { name: 'luigi', id: '4' },
        { name: 'peach', id: '5' },
        { name: 'toad', id: '6' },
        { name: 'bowser', id: '7' },
    ]);
    const pressHandler = (id) => {
        console.log(id);
    }
    return (
        <View style={styles.container}>

            <FlatList
                numColumns={2}
                data={tagCloud}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24,
    },
});