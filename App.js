import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navbar from './components/Navbar';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import OvoPoint from './components/OvoPoint';
import MenuList from './components/MenuList';
import ListNews from './components/ListNews';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Navbar />
          <OvoPoint />
          <MenuList />
          <ListNews />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBECF0',
  },
});

export default App;
