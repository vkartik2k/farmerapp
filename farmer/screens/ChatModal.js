import React from 'react'
import { StyleSheet, Text, View, TextInput, Modal, Dimensions, Button } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

let height = Dimensions.get('window').height
let width = Dimensions.get('window').width

class RecMsg extends React.Component {
  render() {
    return (
      <View style={styles.RecMsgContainer}>
        <View style={styles.RecMsg}>
          <Text style={{ fontSize: 17 }}>{this.props.msg}</Text>
        </View>
      </View>
    )
  }
}

class SendMsg extends React.Component {
  render() {
    return (
      <View style={styles.SendMsgContainer}>
        <View style={styles.SendMsg}>
          <Text style={{ fontSize: 17, color: '#fff' }}>{this.props.msg}</Text>
        </View>
      </View>
    )
  }
}

export default class ChatModal extends React.Component {
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
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Chat</Text>
            </View>
            <View style={{ height: 32, width: 32 }}></View>
          </View>
          <View style={styles.main}>
            <View style={styles.chatInput}>
              <TextInput style={styles.input} placeholder="Type your message ..." />
              <View style={{backgroundColor: 'white', borderRadius: 30,padding: 8, marginRight:10}}>
                <MaterialIcons
                  name="send"
                  color="#0A79DF"
                  size={30}
                  onPress={() => this.props.closeDisplay()}
                />
              </View>
            </View>
            <View style={styles.chatBox}>
              <SendMsg msg="Hello"/>
              <RecMsg msg="Deal done bla bla bla sa dsgsgsd"/>
              <RecMsg msg="LOREM IPSUM DSG FDHDHG DGDGFDHFGDFDGSFDHGFHFGDF FDGHGDFDGDG "/>
              <RecMsg msg="dsf bla bldsfsgd"/>
              <SendMsg msg="Hello"/>
            </View>
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
    alignItems: 'center',
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
  main: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  chatBox: {
    flex: 1,
    padding: 5,
  },
  chatInput: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    fontSize: 18,
    flex: 1,
    margin: 10,
    borderRadius: 30
  },
  RecMsg: {
    padding: 10,
    maxWidth: 270,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderTopLeftRadius : 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  SendMsg: {
    padding: 10,
    maxWidth: 270,
    backgroundColor: '#192A56',
    borderRadius: 30,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  SendMsgContainer: {
    padding: 2,
    flexDirection: 'row-reverse',
  },
  RecMsgContainer: {
    padding: 2,
    flexDirection: 'row',
  },
  timeStamp: {
    fontSize: 12,
    color: "#7B8788",
    paddingLeft: 10,
  },
})