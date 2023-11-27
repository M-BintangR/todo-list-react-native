import React, { useState } from 'react'

import {  
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function Latihan2() {

    const [people, setPeople] = useState([
        {name: "Bintang", key: '1'},
        {name: "Salim", key: '2'},
        {name: "Fery", key: '3'},
        {name: "Ayu", key: '4'},
        {name: "Syahru", key: '5'},
        {name: "Bayu", key: '6'},
        {name: "Ilham", key: '7'},
        {name: "Ilham", key: '8'},
        {name: "Ilham", key: '9'},
        {name: "Ilham", key: '10'},
        {name: "Ilham", key: '11'},
    ]);


  return (
    <ScrollView style={styles.scrollContainer}>
        {people.map(item => (
            <View style={styles.item} key={item.key}>
                <Text>{item.name}</Text>
            </View>
        ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    item: {
        marginTop: 24,
        padding: 30,
        marginHorizontal: 20,
        backgroundColor: 'pink',
        fontSize: 24,
    },
    scrollContainer: {
        marginVertical: 20,
    }
})
