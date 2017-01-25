'use strict';

import React, { Component } from 'react'

import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'

export default class ScrollingImageWithText extends Component {
  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
        <ScrollView>
            <Image source={pic} style={styles.image}></Image>
            <Text>{this.props.description}</Text>
        </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  image: {
      width: 193,
      height: 110
  },
});