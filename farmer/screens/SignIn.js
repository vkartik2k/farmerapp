import React from 'react'
import { StyleSheet, Text, View, TextInput, Modal, Dimensions, Button, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

let height = Dimensions.get('window').height
let width = Dimensions.get('window').width

export default class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      User: ""
    }
    
  }

  handleBackButtonClick() {
    this.props.closeDisplay()
    return true
  }

  _onBtnClick = () => {
    this.props.closeDisplay()
    // if (this.state.User.length != 10) {
    //   Alert.alert('Invalid number', 'The number entered is invalid.')
    // }
    // else {
    //   this.props._storeData(this.state.User)
    //   console.log("Stored")
    //   fetch('http://52.66.72.209/api/register', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       phone: this.state.User.toString()
    //     }),
    //   }).then((response) => {
    //     console.log(response)
    //     response = response.json()
    //     response.then(response => {
    //       if (response.status === 201 || response.status === 202) {

    //         this.props._storeData(this.state.User)
    //       }
    //     })
    //   }).catch((err) => console.error(err));
    // }
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
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Sign In</Text>
            </View>
            <View style={{ height: 32, width: 32 }}></View>
          </View>
          <View style={styles.card}>
            <TextInput style={styles.input} editable={false} value={"India"} />
            <View style={{ flexDirection: 'row' }}>
              <TextInput style={styles.input} editable={false} value={"+91"} />
              <TextInput 
                style={{...styles.input, flex: 1}} 
                placeholder={"Mobile Number"} 
                maxLength={10} 
                keyboardType="phone-pad"
                onChangeText={(text) => this.setState({User :text})}
              />
            </View>
            <View style={{margin: 25, alignItems: 'center'}}>
              <Text style={{color:'#99AAAB', fontSize:16}}>You will get an OTP carrier charges may apply</Text>
            </View>
            <Button title="Proceed" onPress ={ () => this._onBtnClick()}/>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99AAAB',
    alignItems: 'center',
    paddingTop: 85
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
    position: 'absolute',
    bottom: 100,
    shadowColor: '#000000',
    elevation: 7,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    height: 350,
    width: width - 20,
    left: 10,
    borderRadius: 8,
    padding: 20
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