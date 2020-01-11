import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableWithoutFeedback } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function OrderCard(props) {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.orderDetailsBtn({
        name: props.name,
        price: props.price,
        quantity: props.quantity
      })}
    >
      <View style={styles.card}>
        <View>
          <Image source={require('../assets/carrot_farm.jpg')} style={{ height: 80, width: 110 }} />
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.name}</Text>
          <Text style={{fontSize: 16, paddingVertical: 4}}>{"Quantity : " + props.quantity}</Text>
          <Text style={{fontSize: 16}}>{"Price : " +props.price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    flexDirection: "row",
    margin: 10
  }
})