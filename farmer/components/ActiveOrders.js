import React from 'react'
import { StyleSheet, View, Dimensions} from 'react-native'

import OrderCard from '../components/OrderCard'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function ActiveOrders(props) {
  return (
    <View style={styles.container}>
      <OrderCard name="Carrot" price="12" quantity="30 KG" orderDetailsBtn={props.orderDetailsBtn}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: width - 20,
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
})