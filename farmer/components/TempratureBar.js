import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default class TempratureBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      temp : null,
      region: null,
    }
    this._getLocationAsync()
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      console.log("Permission to location denied!")
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })
    let region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    }
    this.setState({ region: region })
    fetch('http://192.168.43.161:3000/farmer/weather', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }),
    }).then((response) => {
      response = response.json()
      response.then(response => {
        this.setState({temp : response})
      })
    }).catch((err) => console.error(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.temp}>
          <View style={{ padding: 10, alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 38, fontWeight: '100' }}>{this.state.temp.minTemp+'°C'}</Text>
            <Text style={{ color: 'white' }}>LOW</Text>
          </View>
          <View style={{ padding: 10, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ paddingTop: 15 }}>
                <Feather
                  name="sun"
                  color="white"
                  size={20}
                  onPress={() => { this.props.loginBtn() }}
                />
              </View>
              <Text style={{ color: 'white', fontSize: 48, fontWeight: '100' }}>{this.state.temp.currentTemp+'°C'}</Text>
            </View>
            <Text style={{ color: 'white' }}>NOW</Text>
          </View>
          <View style={{ padding: 10, alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 38, fontWeight: '100' }}>{this.state.temp.maxTemp+'°C'}</Text>
            <Text style={{ color: 'white' }}>HIGH</Text>
          </View>
        </View>
        <View style={styles.extra}>
          <View>
            <Text style={{ color: 'white', paddingHorizontal: 10, paddingVertical: 5, fontWeight: 'bold' }}>{"Humidity:"+(this.state.temp.humidity * 100)+"%"}</Text>
          </View>
          <View style={{ borderLeftColor: 'white', borderLeftWidth: 0.5 }}>
            <Text style={{ color: 'white', paddingHorizontal: 10, paddingVertical: 5, fontWeight: 'bold' }}>{"Wind Speed:"+ this.state.temp.windSpeed+"Kmph"}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: '#A3CB37',
    color: 'white',
    paddingTop: 80,
    paddingBottom: 5,
  },
  temp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  extra: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center'
  }
})