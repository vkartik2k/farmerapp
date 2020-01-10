import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Modal, Dimensions, Button } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

let height = Dimensions.get('window').height
let width = Dimensions.get('window').width

export default class NewOrderModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
      scanned: false,
    };
  }

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  handleBackButtonClick() {
    this.props.closeDisplay();
    return true;
  }

  takePicture = () => {
    if (this.camera) {
      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
    }
  };

  onPictureSaved = photo => {
    console.log(photo);
  }


  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
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
          <Camera
            style={{ height: height - 125, width: (height - 125) * 3 / 4 }}
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
              <TouchableHighlight>
                <View style={{ backgroundColor: '#fff', borderRadius: 100, padding: 20 }}>
                  <Feather
                    name="camera"
                    color="#0A79DF"
                    size={30}
                    onPress={this.takePicture}
                  />
                </View>

              </TouchableHighlight>
            </View>
          </Camera>
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
})