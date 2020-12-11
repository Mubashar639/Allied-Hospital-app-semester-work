'use strict';

import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {View} from 'native-base';

class ScanScreen extends Component {
  state = {
    qrshow: true,
    list: [],
  };
  onSuccess = e => {
    console.log(e);
    let data = e.data.split(' ');
    console.log(data);
    if (data.indexOf('OPD') < 0) {
      Alert.alert('Qr code is not seem to be hospital');
    }
    this.setState({
      list: data,
      qrshow: false,
    });
  };

  render() {
    const {qrshow, list} = this.state;
    return (
      <View style={styles.centerText}>
        {qrshow ? (
          <QRCodeScanner
            onRead={this.onSuccess}
            // flashMode={RNCamera.Constants.FlashMode.torch}
            topContent={
              <Text style={styles.centerext}>
                Scan the Qr Code to estimate the location{' '}
              </Text>
            }
            bottomContent={
              <TouchableOpacity style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>OK. Got it!</Text>
              </TouchableOpacity>
            }
          />
        ) : (
          <View style={styles.listStyle}>
            {list.map((value, key) => {
              return (
                <Text
                  onPress={() =>
                    this.props.navigation.navigate('MapBackGroundImage')
                  }
                  style={{
                    ...styles.classesStyle,
                    backgroundColor: key % 2 === 0 ? 'blue' : 'green',
                  }}
                  key={key}>
                  Go {value}{' '}
                </Text>
              );
            })}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    color: '#777',
  },
  classesStyle: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'blue',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  listStyle: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  centerext: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 15,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
export default ScanScreen;
