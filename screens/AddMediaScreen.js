import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon } from 'native-base';

export default class AddMediaScreen extends React.Component {
  static navigationOptions = {
    headerLeft :<View style={{marginLeft:20}}><Icon name="camera" /></View>,
    headerTitleStyle: { 
      textAlign:"left", 
      flex:1 
    },
    title: 'Instagram',
    headerRight: <View style={{marginRight:20}}><Icon name="paper-plane"/></View>
  };

  render() {
    return (
      <View style={styles.container}>
           <Text>Belum</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
