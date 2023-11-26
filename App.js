import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert, 
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [person, setPerson] = useState({name: "Bintang", age: 30});

  const changeName = () => {
    setName('Muhammad Bintang');
    setPerson({name: "Bintang", age: 18});
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>My name is {name}</Text>
        <Text style={styles.boldText}>His name is {person.name} and his age is {person.age}</Text>
        <View style={styles.body}>
          <Text style={styles.boldText}>Lorem, ipsum dolor sit <Text>Test</Text> consectetur adipisicing elit. Fuga, ab?</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title='update data' onPress={changeName}/>
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
  }
});
