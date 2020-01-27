import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { AsyncStorage } from 'react-native'

import OrderCard from '../components/OrderCard'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class ActiveOrders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: []
    }
    this._allProducts()
  }

  componentDidMount() {
    // fetch('http://52.66.72.209/api/get-all-products/id=9999999999', {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // }).then((response) => {
    //   response = response.json()
    //   response.then(response => {
    //     this.setState({ orders: response.data.items })
    //   })
    // }).catch((err) => console.error(err))
  }

  _allProducts = async () => {
    try {
      let value = await AsyncStorage.getItem('Product');
      value = JSON.parse(value);
      this.setState({ orders: value.arr });
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <OrderCard
          name="Carrot"
          price="₹ 20 per Kg"
          quantity={"100 KG"}
          orderDetailsBtn={this.props.orderDetailsBtn}
          img={require('../assets/carrot_farm.jpg')}
        />
        {/* {
          this.state.orders.forEach(obj =>
            <OrderCard
              name={obj.title}
              price={obj.price}
              quantity={obj.quantity + " KG"}
              orderDetailsBtn={this.props.orderDetailsBtn}
              img={obj.img}
            />
          )
        } */}
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