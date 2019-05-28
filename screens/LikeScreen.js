import React from 'react';
import {
  FlatList, StyleSheet,
  Text, Image, Dimensions,
  View, ScrollView
} from 'react-native';
import { Thumbnail, Icon } from 'native-base';

export default class LikeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state={
      photo_feed:[0,1,2,3,4],
      refresh: false
    }
  }

  static navigationOptions = {
    headerLeft :<View style={{marginLeft:20}}><Icon name="camera" /></View>,
    headerTitleStyle: { 
      textAlign:"left", 
      flex:1 
    },
    title: 'Instagram',
    headerRight: <View style={{marginRight:20}}><Icon name="paper-plane"/></View>
  };

  loadNew = () =>{
    this.setState({
      refresh:true
    });
    this.setState({
      photo_feed:[5,6,7,8,9],
      refresh: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          refreshing={this.state.refresh}
          onRefresh={this.loadNew}
          data={this.state.photo_feed}
          keyExtractor={(item, index) => index.toString()}
          style={{flex:1, backgroundColor:'#eee'}}
          renderItem={({item, index}) => (
          <View>
            <View style={{flexDirection:'row',margin:5,padding:5, width:'100%', justifyContent:'space-between', alignItems:'center'}} >
              <Text>You like</Text>
              <View style={{margin:5,padding:5}}>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:50, height:50}}/>
              </View>
            </View>
            <View style={{flexDirection:'row',margin:5,padding:5, width:'100%', justifyContent:'space-between', alignItems:'center'}} >
              <Text>@Marquee like</Text>
              <View style={{margin:5,padding:5}}>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:50, height:50}}/>
              </View>
            </View>
            <View style={{flexDirection:'row',margin:5,padding:5,  width:'100%', justifyContent:'space-between', alignItems:'center'}} >
              <Text>@Marquee1, @Marquee2, and 20 other  started folowwing you</Text>
            </View>
            <View style={{flexDirection:'row',margin:5,padding:5,  width:'100%', justifyContent:'space-between', alignItems:'center'}} >
              <Text>@Marquee2 mentioned you in a comment : Ini orangnya @Ronald</Text>
              <View style={{margin:5,padding:5}}>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:50, height:50}}/>
              </View>
            </View>
            <View style={{flexDirection:'row',margin:5,padding:5,  width:'100%', justifyContent:'space-between', alignItems:'center'}} >
              <Text>Maria like</Text>
              <View style={{margin:5,padding:5}}>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:50, height:50}}/>
              </View>
            </View>
            <View style={{flexDirection:'row',margin:5,padding:5,  width:'100%', justifyContent:'space-between', alignItems:'center'}} >
              <Text>Tenika like</Text>
              <View  style={{margin:5,padding:5}}>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:50, height:50}}/>
              </View>
            </View>
          </View>
          )}/>
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
