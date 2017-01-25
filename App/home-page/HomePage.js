'use strict';

import React, { Component } from 'react'
import { View } from 'react-native'

// Custom components
import ScrollingImageWithText from './ScrollingImageWithText'
import Blink from './Blink'

export default class HomePage extends Component {
    render() {
        let message = {  
            description: 'On iOS, a React Native ScrollView uses a native UIScrollView. On Android, it uses a native ScrollView. On iOS, a React Native Image uses',
            blink: 'Yes blinking is so great'
        };
        return (
            <View style={{alignItems: 'center'}}>
                <ScrollingImageWithText description={message.description} />
                <Blink text={message.blink} />
            </View>
        )
    }
}