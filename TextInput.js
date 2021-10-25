import React, { useState } from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';

export default function App() {
    const [name, setName] = useState('shaun');
    const [age, setAge] = useState(20);

    const clickHandler = () => {
        setName('chun-li');
        setAge(30);
    };

    return (
        <View style={styles.container}>
            <Text>His name is {name} and his age is {age}</Text>
            <TextInput
                style={styles.input}
                placeholder='Yamini'
                onChangeText={(val)=>setName(val)}
                />
            <View style={styles.buttonContainer}>
                <Button title='update state' onPress={clickHandler} />
            </View>
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

