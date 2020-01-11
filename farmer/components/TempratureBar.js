import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function TempratureBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.temp}>
        <View style={{ padding: 10, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 38, fontWeight: '100' }}>12°C</Text>
          <Text style={{ color: 'white' }}>LOW</Text>
        </View>
        <View style={{ padding: 10, alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{paddingTop: 15}}>
              <Feather
                name="sun"
                color="white"
                size={20}
                onPress={() => { props.loginBtn() }}
              />
            </View>
            <Text style={{ color: 'white', fontSize: 48, fontWeight: '100' }}>22°C</Text>
          </View>
          <Text style={{ color: 'white' }}>NOW</Text>
        </View>
        <View style={{ padding: 10, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 38, fontWeight: '100' }}>14°C</Text>
          <Text style={{ color: 'white' }}>HIGH</Text>
        </View>
      </View>
      <View style={styles.extra}>
        <View>
          <Text style={{ color: 'white', paddingHorizontal: 10, paddingVertical: 5, fontWeight: 'bold' }}>Humidity: 51%</Text>
        </View>
        <View style={{ borderLeftColor: 'white', borderLeftWidth: 0.5 }}>
          <Text style={{ color: 'white', paddingHorizontal: 10, paddingVertical: 5, fontWeight: 'bold' }}>Wind Speed: 51%</Text>
        </View>
      </View>
    </View>
  )
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