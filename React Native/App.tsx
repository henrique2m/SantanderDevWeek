import { StatusBar as StatusBarExpo } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet,  View, StatusBar} from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBarExpo 
        backgroundColor="#A10507"  
        style="light" 
        translucent
      />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
