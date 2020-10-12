/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {createRef} from 'react';
import {
  StyleSheet,
  StatusBar,
  Dimensions,
  Platform,
} from 'react-native';
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');
const url = 'https://vimeo.com/148184873';
const App: () => React$Node = () => {
  const video = createRef();

  const onBuffer = (props) => {
    console.log('all props of buffer: ', props);
  }

  const onError = (error) => {
    console.log('error: ', error);
  }

  return (
    <>
      <StatusBar barStyle="dark-content"/>
      {/*<Video*/}
      {/*  ref={video}*/}
      {/*  src={{uri: url}}*/}
      {/*  source={{uri: url}}*/}
      {/*  style={styles.container}*/}
      {/*  presentFullscreenPlayer*/}
      {/*/>*/}
      <Video
        source={require('./videoplayback.mp4')}   // Can be a URL or a local file.
        ref={video}                                    // Store reference
        onBuffer={onBuffer}                // Callback when remote video is buffering
        onError={onError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo}/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: height / 3,
    paddingTop: Platform.select({
      ios: 20,
      android: StatusBar.currentHeight,
    }),
    alignItems: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: Platform.select({
      ios: 20,
      android: StatusBar.currentHeight,
    }),
    bottom: 500,
    right: 0,
    left: 0
  }
});

export default App;
