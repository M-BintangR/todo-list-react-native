import {  
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';

import Latihan1 from './Latihan1';
import Latihan2 from './Latihan2';
import Latihan3 from './Latihan3';
import { useCallback, useState } from 'react';
import Sandbox from './components/Sandbox';

export default function App() {
  
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    // <View style={styles.container}>
    //    <View
    //     contentContainerStyle={styles.scrollView}
    //     refreshControl={
    //       <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    //     }>
    //       <Latihan1/>
    //       <Latihan2/>
    //   </View>
    // </View>
          <Latihan3/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
