import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Image, Modal, Dimensions } from 'react-native'
import { MaterialIcons, Feather, AntDesign } from '@expo/vector-icons'
import * as Permissions from 'expo-permissions'
import { Camera } from 'expo-camera'

let height = Dimensions.get('window').height
let width = Dimensions.get('window').width

export default class NewOrderModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      scanned: false,
      current: 1,
      photo: null,
    }
  }

  async componentDidMount() {
    this.getPermissionsAsync()
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  handleBackButtonClick() {
    this.props.closeDisplay()
    return true
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved })
    }
  }

  postAd = () => {
    console.log("Ad Posted")
    this.setState({ current: 3 })
  }

  onPictureSaved = photo => {
    console.log(photo)
    this.setState({ photo: { uri: photo.uri }, current: 2 })
  }


  render() {
    const { hasCameraPermission, scanned } = this.state

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>
    }

    let current

    if (this.state.current == 1) {
      current = <Camera
        style={{ height: height - 80, width: (height - 125) * 3 / 4 }}
        type={Camera.Constants.Type.back}
        ref={(ref) => { this.camera = ref }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            padding: 20
          }}>
          <TouchableWithoutFeedback>
            <View style={{ backgroundColor: '#fff', borderRadius: 100, padding: 20 }}>
              <Feather
                name="camera"
                color="#0A79DF"
                size={30}
                onPress={this.takePicture}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Camera>
    }
    if (this.state.current == 2) {
      current = <View style={{ flex: 1, padding: 20, alignItems: 'center' }}>
        <Image source={this.state.photo} style={{ height: 200, width: 150, marginBottom: 5 }} />
        <Text style={styles.ques}>NAME</Text>
        <TextInput
          style={styles.input}
          value="Carrot"
        />
        <Text style={styles.ques}>DESCRIPTION</Text>
        <TextInput
          style={styles.des}
          value="My random description"
          multiline={true}
        />
        <Text style={styles.ques}>PRICE</Text>
        <TextInput
          style={styles.input}
          value="12"
          multiline={true}
        />
        <Text style={styles.ques}>QUANTITY</Text>
        <TextInput
          style={styles.input}
          value="120 Kg"
          multiline={true}
        />
        <TouchableWithoutFeedback onPress={this.postAd} >
          <View style={styles.btn}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>POST</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    }
    if (this.state.current == 3) {
      current = <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <AntDesign
          name="checkcircle"
          color="#0A79DF"
          size={200}
        />
        <Text style={{margin: 30, fontSize: 25}}>Congratulaions !</Text>
        <Text style={{paddingBottom: 150}}>Your ad will be live shortly.</Text>
        <TouchableWithoutFeedback onPress={() => this.setState({current: 1})} >
          <View style={styles.btn}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Post another ad</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    }

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
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>New Order</Text>
            </View>
            <View style={{ height: 32, width: 32 }}></View>
          </View>
          {current}
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 52
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
  input: {
    borderColor: '#A3CB37',
    borderWidth: 2,
    paddingHorizontal: 7,
    paddingVertical: 4,
    margin: 5,
    width: width - 20,
    borderRadius: 4,
    fontSize: 16
  },
  des: {
    borderColor: '#A3CB37',
    borderWidth: 2,
    paddingHorizontal: 7,
    paddingVertical: 4,
    margin: 5,
    width: width - 20,
    height: 130,
    textAlignVertical: 'top',
    borderRadius: 4,
    fontSize: 16
  },
  ques: {
    fontSize: 17,
    fontWeight: 'bold',
    width: width - 20,
  },
  btn: {
    width: width - 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A3CB37',
    borderRadius: 4
  }
})