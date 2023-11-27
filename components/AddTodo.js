import React, { useState } from 'react'
import { Button, Keyboard, StyleSheet, TextInput, View } from 'react-native'

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    const handlerPress = () => {
        submitHandler(text)
        setText('');
        Keyboard.dismiss();
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Add todos...'
                value={text}
                onChangeText={(val) => changeHandler(val)}
            />

            <View style={styles.button}>
                <Button onPress={handlerPress} title='Add Todo' color='coral'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6, 
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    button: {
        marginHorizontal: 10,
    }
})
