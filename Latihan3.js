import React, { useState } from 'react'
import { FlatList, View, StyleSheet, Text, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

export default function Latihan3() {

    const [todos, setTodos] = useState([
        {text: 'Bintang', id: '1'},
        {text: 'Fery', id: '2'},
        {text: 'Salim', id: '3'},
        {text: 'Ilham', id: '4'},
    ]);

    const pressHandler = (id) => {
        setTodos((prev) => prev.filter(todo => todo.id != id));
    }

    const submitHandler = (text) => {
        if(text){
            setTodos((prev) => [{text: text, id: Math.random().toString() }, ...prev]);
        }else{
            Alert.alert('Gagal.', 'isi data terlebih dahulu');
        }

        return;
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                
                <Header/>

                <View style={styles.content}>

                    <AddTodo submitHandler={submitHandler}/>

                    <View style={styles.list}>
                        <FlatList
                            keyExtractor={item => item.id}
                            data={todos}
                            renderItem={({item}) => (
                            <TodoItem item={item} pressHandler={pressHandler}/>
                            )}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 40,
        flex: 1,
    },
    list: {
        marginTop: 20,
        // flex: 1,
    },
})
