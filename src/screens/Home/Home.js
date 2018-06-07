import React from 'react';
import { Image, TouchableWithoutFeedback, View, SafeAreaView, StatusBar, Animated, Text } from 'react-native';

import styles from './styles';
import { colors } from '../../config/theme';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    opacityAnimation: new Animated.Value(1),
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1),
  }

  startAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.opacityAnimation, {
        toValue: 0,
        duration: 100,
      }),
      Animated.parallel([
        Animated.timing(this.state.colorAnimation, {
          toValue: 1,
          duration: 500,
        }),
        Animated.timing(this.state.scaleAnimation, {
          toValue: 10,
          duration: 300,
        })
      ])
    ]).start(() => {
      setTimeout(() => {
        this.setState({
          opacityAnimation: new Animated.Value(1),
          colorAnimation: new Animated.Value(0),
          scaleAnimation: new Animated.Value(1),
        });
      }, 700);

      this.props.navigation.navigate('Camera');
    });
  }

  render() {
    const colorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgb(92,160,216)", "rgb(0,0,0)"],
    });

    const boxStyle = {
      backgroundColor: colorInterpolate,
      transform: [
        { scale: this.state.scaleAnimation },
      ],
    };

    const opacityStyles = {
      opacity: this.state.opacityAnimation,
    };

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0.20)"
          animated
        />
        <View style={styles.titleArea}>
          <Text style={styles.titleText}>BARCODE READER</Text>
        </View>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.button, boxStyle]}>
            <Animated.Image style={[styles.barcode, opacityStyles]} source={require('../../../assets/images/barcode.png')} resizeMode="contain" />
          </Animated.View>
        </TouchableWithoutFeedback>

      </SafeAreaView>
    );
  }
}
