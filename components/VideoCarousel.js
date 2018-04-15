import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import Carousel from 'react-native-snap-carousel';


class VideoCarousel extends React.Component {

    render () {
      return (
        <View style={styles.container}>

        {/* <Video
          source={this.props.selectedVideo}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          style={styles.video}
        /> */}
      </View>
      );
    }
  }

export default VideoCarousel;
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});