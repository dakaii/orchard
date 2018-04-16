import React, { Component } from 'react';
import {connect} from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';
import Carousel from 'react-native-snap-carousel';


class VideoCarousel extends Component {

    render () {
      let videoId = '';
      if (this.props.selectedVideo) {
        videoId = this.props.selectedVideo.id.videoId;

      } else {
        return <Text>...Loading</Text>
      }
      const url = `https://www.youtube.com/embed/${videoId}`;

      return (
        <View style={styles.container}>
        <Video
          source={url}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={"cover"}
          style={styles.video}
        />
      </View>
      );
    }
  }

  function mapStateToProps(state) {
    return { videos: state.videos,
             selectedVideo: state.videos[0]}
  }

export default connect(mapStateToProps, [])(VideoCarousel)
  

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