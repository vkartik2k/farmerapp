import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'

import OrderCard from '../components/OrderCard'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class ActiveOrders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    fetch('http://192.168.43.161:3000/farmer/weather', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        farmerId : '9999999999'
      }),
    }).then((response) => {
      response = response.json()
      response.then(response => {
        this.setState({ orders: response.arr })
      })
    }).catch((err) => console.error(err))
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.orders.forEach(obj =>
            <OrderCard name={obj.name} price={obj.price} quantity={obj.quantity + " KG"} orderDetailsBtn={this.props.orderDetailsBtn} />
          )
        }
      </View>
    )
  }
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