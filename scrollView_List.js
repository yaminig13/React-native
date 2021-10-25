import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
    const [name, setName] = useState('shaun');
    const [age, setAge] = useState(20);
    const [people, setPeople] = useState([
        { name: 'Yamini', key: 1 },
        { name: 'Saurabh', key: 2 },
        { name: 'Sumeet', key: 3 },
        { name: 'Rahul', key: 4 },
        { name: 'Yamini', key: 1 },
        { name: 'Saurabh', key: 2 },
        { name: 'Sumeet', key: 3 },
        { name: 'Rahul', key: 4 },
        { name: 'Yamini', key: 1 },
        { name: 'Saurabh', key: 2 },
        { name: 'Sumeet', key: 3 },
        { name: 'Rahul', key: 4 },
        { name: 'Yamini', key: 1 },
        { name: 'Saurabh', key: 2 },
        { name: 'Sumeet', key: 3 },
        { name: 'Rahul', key: 4 },
        { name: 'Yamini', key: 1 },
        { name: 'Saurabh', key: 2 },
        { name: 'Sumeet', key: 3 },
        { name: 'Rahul', key: 4 },
        { name: 'Yamini', key: 1 },
        { name: 'Saurabh', key: 2 },
        { name: 'Sumeet', key: 3 },
        { name: 'Rahul', key: 4 },
        { name: 'Yamini', key: 1 },
        { name: 'Saurabh', key: 2 },
        { name: 'Sumeet', key: 3 },
        { name: 'Rahul', key: 4 },
        { name: 'Yamini', key: 1 },
        { name: 'Saurabh', key: 2 },
        { name: 'Sumeet', key: 3 },
        { name: 'Rahul', key: 4 }
    ])

    const clickHandler = () => {
        setName('chun-li');
        setAge(30);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                {people.map(item => {
                        <View key={item.key}>
                            <Text>{item.name}</Text>
                         </View>      
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
    }
});

