import React from 'react';
import {
  StyleSheet,
  Text,
  View, ScrollView
} from 'react-native';
import { Image, Card, Thumbnail, Body, CardItem, Left } from 'native-base';

export default class CardComponent extends React.Component {
    render() {
      return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={require('../assets/images/pic-circle.png') } />
                    <Body>
                        <Text>Varun</Text>
                        <Text note>Jan 14, 18 </Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem>
                <Image source={require('../assets/images/k3.jpg')} />
            </CardItem>
        </Card>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });