import React from 'react'
import { StyleSheet, Image, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native'

import ChatModal from '../screens/ChatModal'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chatModalDisplay: false,
    }
  }

  _openChatModal = () => this.setState({ chatModalDisplay: true })

  render() {
    return (
      <TouchableWithoutFeedback
        onPress = {this._openChatModal}
      >
        <View style={styles.container}>
          <ChatModal
            display={this.state.chatModalDisplay}
            closeDisplay={() => this.setState({ chatModalDisplay: false })}
          />
          <Image style={styles.displayPicture} source={require('../assets/defaultDp.png')} />
          <View style={styles.textContainer}>
            <View style={styles.subTextContainer}>
              <Text style={styles.name}>{this.props.name}</Text>
              <Text style={styles.chatTime}>{this.props.chatTime}</Text>
            </View>
            <Text style={styles.lastmsg}>{this.props.lastMsg}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  displayPicture: {
    height: 55,
    width: 55,
    borderRadius: 25,
    margin: 10
  },
  textContainer: {
    borderBottomColor: '#DAE0E2',
    borderBottomWidth: 0.5,
    height: 75,
    width: width - 110,
    padding: 10,
    justifyContent: 'center',
  },
  subTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
  },
  lastmsg: {
    fontSize: 16,
    color: '#7B8788',
  },
  chatTime: {
    color: '#7B8788',
    fontSize: 12,
  }
})