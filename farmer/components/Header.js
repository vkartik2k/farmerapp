import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function Header(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="settings-outline"
        color="#0A79DF"
        size={30}
        onPress={() => { }}
      />
      <View style={{ flex: 1, alignItems: 'center', paddingBottom: 4 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Farmers App</Text>
      </View>
      <SimpleLineIcons
        name="user"
        color="#0A79DF"
        size={30}
        onPress={() => { props.loginBtn() }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 8,
    position: 'absolute',
    height: 80,
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
});
