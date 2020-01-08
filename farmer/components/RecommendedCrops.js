import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function RecommendedCrops(props) {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, paddingHorizontal: 10, fontSize: 14 }}>RECOMMENDED FOR NEXT SEASON</Text>
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/carrot.png')} style={{ height: 40, width: 40 }} />
          <Text style={{ color: '#7B8788', fontSize: 12, paddingVertical: 5 }}> CARROT</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/banana.png')} style={{ height: 40, width: 40 }} />
          <Text style={{ color: '#7B8788', fontSize: 12, paddingVertical: 5 }}> BANANA</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/tomato.png')} style={{ height: 40, width: 40 }} />
          <Text style={{ color: '#7B8788', fontSize: 12, paddingVertical: 5 }}> TOMATO</Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <Image source={require('../assets/potato.png')} style={{ height: 40, width: 40 }} />
          <Text style={{ color: '#7B8788', fontSize: 12, paddingVertical: 5 }}> POTATO</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000000',
    elevation: 2,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    padding: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    alignItems: 'center',
    flex: 1
  }
});
