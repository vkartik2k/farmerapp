import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from './components/Header';
import TempratureBar from './components/TempratureBar';
import RecommendedCrops from './components/RecommendedCrops';
import CreateOrder from './components/CreateOrder';
import ActiveOrders from './components/ActiveOrders';

import NewOrderModal from './screens/NewOrderModal'
import SignIn from './screens/SignIn'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NewOrderDisplay: false,
      signInDisplay: false
    }
  }

  _openNewOrderModal = () => this.setState({ NewOrderDisplay: true })
  _openSignInModal = () => this.setState({ signInDisplay: true })

  render() {
    return (
      <View style={styles.container}>
        <Header
          loginBtn={this._openSignInModal}
        />
        <NewOrderModal
          display={this.state.NewOrderDisplay}
          closeDisplay={() => this.setState({ NewOrderDisplay: false })}
        />
        <SignIn
          display={this.state.signInDisplay}
          closeDisplay={() => this.setState({ signInDisplay: false })}
        />
        <ScrollView>
          <TempratureBar />
          <RecommendedCrops />
          <CreateOrder
            orderBtn = {this._openNewOrderModal}
          />
          <ActiveOrders />
        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    backgroundColor: '#DAE0E2'
  },
});
