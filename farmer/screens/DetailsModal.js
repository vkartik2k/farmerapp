import React from 'react'
import { StyleSheet, Text, View, Modal, Dimensions } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import OrderCard from '../components/OrderCard'
import Contact from '../components/Contact'

let height = Dimensions.get('window').height
let width = Dimensions.get('window').width

export default class DetailsModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  handleBackButtonClick() {
    this.props.closeDisplay()
    return true
  }
  
  render() {
    return (
      <Modal
        visible={this.props.display}
        animationType='slide'
        onRequestClose={this.display}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <MaterialIcons
              name="arrow-back"
              color="#0A79DF"
              size={30}
              onPress={() => this.props.closeDisplay()}
            />
            <View style={{ flex: 1, alignItems: 'center', paddingBottom: 4 }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Product Details</Text>
            </View>
            <View style={{ height: 32, width: 32 }}></View>
          </View>
          <OrderCard 
            name={this.props.productDetails.name}
            price={this.props.productDetails.price}
            quantity={this.props.productDetails.quantity}
            orderDetailsBtn={() => {}}
          />
          <Text style={{ fontWeight: 'bold', paddingHorizontal: 10, paddingTop: 8, fontSize: 14 }}>RECENT CHATS</Text>
          <View style={styles.card}>
            <Contact name="Big Yellow Door" lastMsg="Deal done" chatTime="1:30"/>
            <Contact name="Ram Singh" lastMsg="Great" chatTime="11:20"/>
            <Contact name="Rajesh Yadav" lastMsg="Okay" chatTime="07:49"/>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAE0E2',
    paddingTop: 60
  },
  headerContainer: {
    zIndex: 9,
    position: 'absolute',
    height: 52,
    width: width,
    backgroundColor: '#fff',
    left: 0,
    top: 0,
    shadowColor: '#000000',
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    alignItems: "flex-end",
    flexDirection: 'row',
    padding: 10
  },
  card: {
    backgroundColor: '#fff',
    shadowColor: '#000000',
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    width: width - 20,
    borderRadius: 8,
    margin: 10
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#616C6F',
    fontSize: 19,
    marginVertical: 25,
    paddingHorizontal: 5,
    marginHorizontal: 2,
  }
})