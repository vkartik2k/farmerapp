import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { AsyncStorage } from 'react-native'
import io from 'socket.io-client'

import Header from './components/Header'
import TempratureBar from './components/TempratureBar'
import RecommendedCrops from './components/RecommendedCrops'
import CreateOrder from './components/CreateOrder'
import ActiveOrders from './components/ActiveOrders'

import NewOrderModal from './screens/NewOrderModal'
import SignIn from './screens/SignIn'
import DetailsModal from './screens/DetailsModal'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      NewOrderDisplay: false,
      signInDisplay: false,
      detailsDisplay: false,
      productDetails: {}
    }
    AsyncStorage.setItem('Product', {
      arr : []
    });
  }

  _storeData = async (phone) => {
    try {
      await AsyncStorage.setItem('User', phone);
    } catch (error) {
      console.error(error)
    }
    this.setState({ User: phone });
    console.log(this.state.User)
  };

  _getMobileNo = async () => {
    try {
      const value = await AsyncStorage.getItem('User');
      console.log(value)
      if (value !== '' && value != null) {
        this.setState({ User: value });
        // this.socket.emit('connected', {
        //   phone: this.state.User
        // })
        // console.log("Emitted Connect With Device Number :" + this.state.User)
      }
      else {
        console.log(this.state.user)
        if (this.state.user == null || this.state.user == "") {
          this._openSignInModal()
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  

  componentDidMount() {
    // AsyncStorage.setItem('User', '');
    // this._getMobileNo()
  }

  _openNewOrderModal = () => this.setState({ NewOrderDisplay: true })
  _openSignInModal = () => this.setState({ signInDisplay: true })
  _openDetailsModal = productDetails => this.setState({ detailsDisplay: true, productDetails: productDetails })

  render() {
    console.log(this.state.user)
    return (
      <View style={styles.container}>
        <Header loginBtn={this._openSignInModal} />
        <NewOrderModal
          display={this.state.NewOrderDisplay}
          closeDisplay={() => this.setState({ NewOrderDisplay: false })}
        />
        <SignIn
          _storeData={this._storeData}
          display={this.state.signInDisplay}
          closeDisplay={() => this.setState({ signInDisplay: false })}
        />
        <DetailsModal
          display={this.state.detailsDisplay}
          closeDisplay={() => this.setState({ detailsDisplay: false })}
          productDetails={this.state.productDetails}
        />

        <ScrollView>
          <TempratureBar />
          <RecommendedCrops />
          <CreateOrder orderBtn={this._openNewOrderModal} />
          <ActiveOrders orderDetailsBtn={this._openDetailsModal} />
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAE0E2'
  },
})