import React from 'react';
import {StyleSheet, Text, Image, ImageBackground} from 'react-native';
class MapBackGroundImage extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('./imagefull.jpg')}
        style={styles.container}>
        <Text>... Your Content ...</Text>
      </ImageBackground>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapBackGroundImage;
