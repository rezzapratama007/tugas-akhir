import React from 'react';
import {
  FlatList, StyleSheet,
  Text, Image, Dimensions,
  View, ScrollView
} from 'react-native';
import {Container, Content, Icon, Thumbnail, Left, Button } from 'native-base';

var images = [
  require('../assets/images/k3.jpg'),
  require('../assets/images/2.png'),
  require('../assets/images/3.png'),
  require('../assets/images/4.png'),
  require('../assets/images/5.png'),
  require('../assets/images/6.png'),
  require('../assets/images/7.png'),
  require('../assets/images/8.png'),
]

var {width, height} = Dimensions.get('window');
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    headerLeft :<View style={{marginLeft:20}}><Icon name="md-person-add" /></View>,
    headerTitleStyle: { 
      textAlign:"center", 
      flex:1 
    },
    title: '@Rezza',
    headerRight: <View style={{marginRight:20}}><Icon name="md-timer"/></View>
  };

  constructor(props){
    super(props);
    this.state={
      activeIndex:0
    }
  }
  segmentClicked = (index) => {
    this.setState({
      activeIndex:index
    })
  }

  renderSectionOne = () => {
    var images = [
      require('../assets/images/k3.jpg'),
      require('../assets/images/2.png'),
      require('../assets/images/3.png'),
      require('../assets/images/4.png'),
      require('../assets/images/5.png'),
      require('../assets/images/6.png'),
      require('../assets/images/7.png'),
      require('../assets/images/8.png'),
    ];

  // images.map(image,index => {
     return (
      <View>
        <Text>tes</Text>
      </View>)
      /*<View key={index} style={[{width:(width)/3},{height:(width)/3},
        {marginBottom:2},
        index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft:0}
      ]}>
        <Image style={{flex:1, width: undefined, height: undefined}}
        source={images}
        />
      </View>*/
    // )
    //})
  }

  componentDidMount(){
    this.renderSection();
  }

  renderSection = () => {
    this.state.activeIndex = 0;
    if(this.state.activeIndex == 0){
      return(
        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            {this.renderSectionOne()}
        </View>
      )
    }
  }

  render() {
    return (
      <Container style={{flex:1, backgroundColor:'white'}}>
        <Content>
          <View style={{paddingTop:10}}>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1, alignItems:'center'}}>
                <Image source={require('../assets/images/6.png')}
                style={{width:75, height:75, borderRadius:37}}/>
              </View>
              <View style={{flex:3}}>
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <View style={{alignItems:'center'}}>
                    <Text>5</Text>
                    <Text style={{fontSize: 10, color: 'grey'}}>Posts</Text>
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Text>1994</Text>
                    <Text style={{fontSize: 10, color: 'grey'}}>Followers</Text>
                  </View>
                  <View style={{alignItems:'center'}}>
                    <Text>666</Text>
                    <Text style={{fontSize: 10, color: 'grey'}}>Following</Text>
                  </View>
                </View>
                <View style={{flexDirection:'row', paddingTop:10, paddingRight:10}}>
                  <Button bordered dark style={{flex:3, marginLeft:10, 
                    justifyContent:'center', height:30,width:10}}>
                      <Icon name="settings"></Icon>
                      <Text>Edit Profile</Text>
                  </Button>
                </View>
              </View>
            </View>
            <View style={{paddingBottom:10, paddingHorizontal:10}}>
              <Text style={{fontWeight:'bold'}}>UserName</Text>
              <Text>Aku cinta React</Text>
              <Text>www.react-bikin-pusing.com</Text>
            </View>
            <View>
              <View style={{flexDirection:'row',
                justifyContent:'space-around', borderTopWidth:1,
                borderTopColor:'#eae5e5'}}>
                <Button transparent 
                  onPress={()=>this.segmentClicked(0)}
                  active={this.state.activeIndex==0}>
                  <Icon name="md-list"
                  style={[this.state.activeIndex==0 
                    ? {}
                    : {color:grey}
                  ]}></Icon>
                </Button>
                <Button transparent>
                  <Icon name="md-apps"></Icon>
                </Button>
                <Button transparent>
                  <Icon name="md-people"></Icon>
                </Button>
                <Button transparent>
                  <Icon name="md-bookmark"></Icon>
                </Button>
              </View>
            </View>
            <View style={{flex:1}}>
              <View style={{flex:1, flexDirection:'row'}}>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'25%', height:80}}/>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'25%', height:80}}/>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'25%', height:80}}/>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'25%', height:80}}/>
              </View>
              <View style={{flex:1, flexDirection:'row'}}>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'25%', height:80}}/>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'25%', height:80}}/>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'25%', height:80}}/>
                <Image source={{uri:'https://source.unsplash.com/random/500x'+Math.floor((Math.random()*800)+500)}}
                style={{resizeMode:'cover', width:'25%', height:80}}/>
              </View>
            </View>

          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
