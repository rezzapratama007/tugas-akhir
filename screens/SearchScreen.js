import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text, Image,
  ScrollView
} from 'react-native';
import { Icon } from 'native-base';

export default class SearchScreen extends React.Component {

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
      <View>
        <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
              style={styles.gambar}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gambar:{
    resizeMode:'cover', 
    width:'100%', 
    height:50,
    marginTop:10,
  }
});
