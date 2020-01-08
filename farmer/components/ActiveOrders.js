import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function ActiveOrders(props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Image source={require('../assets/carrot_farm.jpg')} style={{ height: 80, width: 110 }} />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>CARROT</Text>
          <Text>200 Kg</Text>
          <Text>₹40/Kg</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    marginHorizontal: 10,
  },
  card: {
    width: width - 20,
    backgroundColor: '#fff',
    marginVertical: 2,
    shadowColor: '#000000',
    elevation: 2,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    padding: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    flexDirection: "row"
  }
});