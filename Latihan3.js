import React, { useState } from 'react'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

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
        setTodos((prev) => [{text: text, id: Math.random().toString() }, ...prev]);
    }

    return (
        <View>
            
            <Header/>

            <View styles={styles.content}>

                <AddTodo submitHandler={submitHandler}/>

                <View styles={styles.list}>
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
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    },
})
