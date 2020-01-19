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
      NewOrderDisplay: false,
      signInDisplay: false,
      detailsDisplay: false,
      productDetails: {}
    }
  }

  _openNewOrderModal = () => this.setState({ NewOrderDisplay: true })
  _openSignInModal = () => this.setState({ signInDisplay: true })
  _openDetailsModal = productDetails => this.setState({ detailsDisplay: true, productDetails: productDetails })

  render() {
    return (
      <View style={styles.container}>
        <Header loginBtn={this._openSignInModal}/>
        <NewOrderModal
          display={this.state.NewOrderDisplay}
          closeDisplay={() => this.setState({ NewOrderDisplay: false })}
        />
        <SignIn
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
          <CreateOrder orderBtn={this._openNewOrderModal}/>
          <ActiveOrders orderDetailsBtn={this._openDetailsModal}/>
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