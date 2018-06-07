import React from 'react';
import { View, StatusBar, Platform, Vibration, Alert, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import { colors } from '../../config/theme';

export default class Camera extends React.Component {
  state = {
    ean: null,
    cameraFlashToggle: RNCamera.Constants.FlashMode.off,
    cameraFlashIcon: "zap",
  }

  handleBack = () => {
    this.props.navigation.goBack();
  }

  handleBarcodeRead = (e) => {
    if (this.state.ean !== null) {
      return undefined;
    }
    if (e) {
      return this.setState({
        ean: e.data,
      }, () => {
        if (Platform.OS === 'ios') {
          Vibration.vibrate(200, false);
        } else {
          Vibration.vibrate([0, 200], false);
        }
        Alert.alert(
          'CODE READ',
          `${e.type}: ${e.data}`,
          [
            { text: 'OK', onPress: () => this.setState({ ean: null }) },
          ],
          { cancelable: false }
        )
      });
    }
    return null;
  }

  handleFlash = () => {
    const state = this.state;
    state.cameraFlashToggle = state.cameraFlashToggle === RNCamera.Constants.FlashMode.off
      ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off;
    state.cameraFlashIcon = state.cameraFlashToggle === RNCamera.Constants.FlashMode.off
      ? "zap-off" : "zap";
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.blue}
          barStyle="light-content"
          translucent
          backgroundColor="rgba(0, 0, 0, 0.20)"
          animated
        />
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.5} onPress={this.handleBack}>
            <Icon name="chevron-left" style={[styles.headerIcon, styles.bigIcon]} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={this.handleFlash}>
            <Icon name="zap" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>

        <RNCamera
          ref={(ref) => { this.camera = ref; }}
          style={styles.camera}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={this.handleBarcodeRead}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={this.state.cameraFlashToggle}
        />

        <View style={styles.mask}>
          <View style={styles.top} />

          <View style={styles.middle}>
            <View style={styles.middleTop}>
              <View style={styles.middleTopLeft} />
              <View style={styles.middleTopCenter} />
              <View style={styles.middleTopRight} />
            </View>

            <View style={styles.middleCenter} />

            <View style={styles.middleBottom}>
              <View style={styles.middleBottomLeft} />
              <View style={styles.middleBottomCenter} />
              <View style={styles.middleBottomRight} />
            </View>
          </View>

          <View style={styles.bottom} />
        </View>
      </View>
    );
  }
}
