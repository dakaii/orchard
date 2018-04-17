import React, { Component } from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, Dimensions, WebView }from 'react-native';
import ScrollView from 'react-native-snap-carousel';


class VideoCarousel extends Component {

    render () {
      let videoId = '';
      if (this.props.selectedVideo) {
        videoId = this.props.selectedVideo.id.videoId;
      } else {
        return (
          <Text>...Loading</Text>
        )
      }
      return (
        <View style={styles.container}>
          {/* <ScrollView onSnapToItem={this.setState({ selectedVideo: this.props.videos[3] })}> */}
          <WebView
            source={{ uri: `https://www.youtube.com/embed/${videoId}`}}
            javaScriptEnabled={true}
            style={styles.window}
          />
          {/* </ScrollView> */}
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
  window: {
    width : Dimensions.get('window').width,
    height : Dimensions.get('window').height,
  },
});