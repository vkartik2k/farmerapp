import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function CreateOrder(props) {
  return (
    <View>
    <Text style={{ fontWeight: 'bold', paddingHorizontal: 10, fontSize: 14 }}>ACTIVE ORDERS</Text>
    <View style={styles.container}>
      <Ionicons
        name="ios-add-circle-outline"
        color="#0A79DF"
        size={35}
        onPress={() => { props.loginBtn() }}
      />
      <Text style={{paddingHorizontal: 15, fontSize: 18}}>Create new order</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    backgroundColor: '#e8f4f8',
    marginHorizontal: 10,
    marginVertical: 10,
    marginBottom: 2,
    shadowColor: '#000000',
    elevation: 2,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

});