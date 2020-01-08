import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import TempratureBar from './components/TempratureBar';
import RecommendedCrops from './components/RecommendedCrops';
import CreateOrder from './components/CreateOrder';
import ActiveOrders from './components/ActiveOrders';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <TempratureBar/>
      <RecommendedCrops/>
      <CreateOrder/>
      <ActiveOrders/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    backgroundColor: '#DAE0E2'
  },
});
