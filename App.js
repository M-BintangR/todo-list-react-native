import {  
  StyleSheet,
  View,
} from 'react-native';

import Latihan1 from './Latihan1';
import Latihan2 from './Latihan2';

export default function App() {
  

  return (
    <View style={styles.container}>
      {/* <Latihan1/> */}
      <Latihan2/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
