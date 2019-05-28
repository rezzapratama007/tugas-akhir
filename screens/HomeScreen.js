import React from 'react';
import {
  FlatList, StyleSheet,
  Text, Image,
  View, ScrollView
} from 'react-native';
import {Container, Content, Icon, Thumbnail } from 'native-base';

export default class HomeScreen extends React.Component {
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
      <View style={{ flex:1}}>
        <View style={{flexDirection:'row', height:30,
          justifyContent:'space-between', alignItems:'center',
          paddingHorizontal:7}}>
          <Text style={{fontWeight:'bold'}}>Stories</Text>
          <Text style={{fontWeight:'bold'}}>Watch All</Text>
        </View>
        <View style={{paddingBottom:10, height:70}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                alignItems:'center',
                paddingStart: 5,
                paddingEnd: 5
              }}
              >
              <Thumbnail
                style={styles.tebalborder}
                source={
                  require('../assets/images/5.png')
                }
              />
              <Thumbnail
                style={styles.tebalborder}
                source={
                  require('../assets/images/4.png')
                }
              />
              <Thumbnail
                style={styles.tebalborder}
                source={
                  require('../assets/images/3.png')
                }
              />
              <Thumbnail
                style={styles.tebalborder}
                source={
                  require('../assets/images/1.png')
                }
              />
              <Thumbnail
                style={styles.tebalborder}
                source={
                  require('../assets/images/5.png')
                }
              />
              <Thumbnail
               style={styles.tebalborder}
                source={
                  require('../assets/images/4.png')
                }
              />
              <Thumbnail
                style={styles.tebalborder}
                source={
                  require('../assets/images/6.png')
                }
              />
            </ScrollView>
        </View>
        <FlatList
          refreshing={this.state.refresh}
          onRefresh={this.loadNew}
          data={this.state.photo_feed}
          keyExtractor={(item, index) => index.toString()}
          style={{flex:7, backgroundColor:'#eee'}}
          renderItem={({item, index}) => (
          <View>
            <View style={{flexDirection:'row',marginTop:20,  width:'100%', justifyContent:'space-between', alignItems:'center'}} >
              <Text style={styles.textall}>5m ago</Text>
              <Text style={styles.textusername}>@Rezza</Text>
            </View>
            <View>
              <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
              style={styles.gambar}/>
            </View>
            <View style={{flexDirection:'row',marginTop:10,marginTop:10}}>
              <View style={{marginLeft:5}}><Icon name="md-heart"></Icon></View>
              <View style={{marginLeft:5}}><Icon name="md-chatbubbles"></Icon></View>
              <View style={{marginLeft:270}}><Icon name="md-return-left"></Icon></View>
            </View>
            <View>
              <Text>Caption Text here ...</Text>
              <Text>View Comment ...</Text>
            </View>

            <View style={{flexDirection:'row',marginTop:20,  width:'100%', justifyContent:'space-between', alignItems:'center'}} >
              <Text style={styles.textall}>10m ago</Text>
              <Text style={styles.textusername}>@Pratama</Text>
            </View>
            <View>
              <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
              style={styles.gambar}/>
            </View>
            <View>
            <Text>Caption Text here ...</Text>
              <Text>View Comment ...</Text>
            </View>

            <View style={{flexDirection:'row',marginTop:20,  width:'100%', justifyContent:'space-between', alignItems:'center'}} >
              <Text style={styles.textall}>20m ago</Text>
              <Text style={styles.textusername}>@Kusuma</Text>
            </View>
            <View>
              <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
              style={styles.gambar}/>
            </View>
            <View>
              <Text>Caption Text here ...</Text>
              <Text>View Comment ...</Text>
            </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tebalborder:{
    borderColor:'pink',
    marginHorizontal:5,
    borderWidth:4,
  },
  textall:{
    color:'grey',
    fontWeight:'bold',
    marginLeft:10
  },
  textusername:{
    color:'black',
    fontWeight:'bold',
    marginRight:10
  },
  gambar:{
    resizeMode:'cover', 
    width:'100%', 
    height:275,
    marginTop:10,
  }
});
