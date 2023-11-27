import React, { useState } from 'react'

import {  
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Latihan2() {

    const [people, setPeople] = useState([
        {name: "Bintang", id: '1'},
        {name: "Salim", id: '2'},
        {name: "Fery", id: '3'},
        {name: "Ayu", id: '4'},
        {name: "Syahru", id: '5'},
        {name: "Bayu", id: '6'},
        {name: "Ilham", id: '7'},
        {name: "Ilham", id: '8'},
        {name: "Ilham", id: '9'},
        {name: "Ilham", id: '10'},
        {name: "Ilham", id: '11'},
    ]);


    const handlerPress = (id) => {
         setPeople((prev) => (prev.filter(item => item.id != id)));
    }

  return (

    <View>
        {/* DENGAN FLATLIST */}

        <FlatList
            numColumns={2}
            keyExtractor={item => item.id}
            data={people}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => handlerPress(item.id)}>
                    <Text style={styles.item}>{item.name}</Text>
                </TouchableOpacity>
            )}
        />

        {/* <ScrollView style={styles.scrollContainer}>
            {people.map(item => (
                <View style={styles.item} key={item.key}>
                    <Text>{item.name}</Text>
                </View>
            ))}
        </ScrollView> */}
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        marginTop: 24,
        padding: 30,
        marginHorizontal: 20,
        backgroundColor: 'pink',
        fontSize: 15,
    },
    scrollContainer: {
        marginVertical: 20,
    }
})
