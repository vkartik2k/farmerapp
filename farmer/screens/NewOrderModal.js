import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image, Modal, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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
          <Camera style={{ height: 800, width: 600 }} type={Camera.Constants.Type.back}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
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
})