import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TextInput } from 'react-native';
import {  
    StyleSheet,
    Button,
    View,
    Text,
} from 'react-native';

const Latihan1 = () => {

    const [name, setName] = useState('');
    const [person, setPerson] = useState({name: "Bintang", age: 30});
    const [age, setAge] = useState('');

    const changeName = () => {
        setName('Muhammad Bintang');
        setPerson({name: "Bintang", age: 18});
    }

  return (
    <View>
        <View style={styles.header}>
            <Text style={styles.boldText}>My name is {name}</Text>
            <Text style={styles.boldText}>Years old is {age}</Text>
            <Text style={styles.boldText}>His name is {person.name} and his age is {person.age}</Text>
            <View style={styles.body}>
            <Text style={styles.boldText}>Lorem, ipsum dolor sit <Text>Test</Text> consectetur adipisicing elit. Fuga, ab?</Text>
            </View>
        </View>

        <View style={styles.buttonContainer}>
            <Button title='update data'/>
        </View>

        <View style={styles.formContainer}>
            <Text>Masukkan Nama</Text>
            <TextInput 
            multiline
            style={styles.formInput}
            placeholder='Masukkan Nama'
            onChangeText={(value) => setName(value)}
            />
        </View>

        <View style={styles.formContainer}>
            <Text>Masukkan Umur</Text>
            <TextInput 
            keyboardType='numeric'
            style={styles.formInput}
            placeholder='Masukkan Nama'
            onChangeText={(value) => setAge(value)}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      backgroundColor: 'pink',
      padding: 20,
    },
    boldText: {
      fontWeight: 'bold',
    },
    body: {
      backgroundColor: 'yellow',
      padding: 10,
      borderRadius: 2,
    },
    buttonContainer: {
      marginTop: 20,
    },
    formContainer: {
      padding: 20,
      margin: 10,
    },
    formInput: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
    },
  });

export default Latihan1