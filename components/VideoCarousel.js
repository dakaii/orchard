import React, { Component } from 'react';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, Dimensions, WebView }from 'react-native';
import Swiper from 'react-native-swiper';


class VideoCarousel extends Component {
  
  render () {
    const videos = this.props.videos;

    function produceVideoList (v) {
        return (
          v.filter(function(video) {
            return video
          }).map(function(video) { return (
            <WebView
              source={{ uri: `https://www.youtube.com/embed/${video.id.videoId}` }}
              javaScriptEnabled={true}
              style={styles.video}
              key={video.id.videoId}
            />
          )})
        )
    }

    function createVideoViews() {
      if (videos.length) {
        return (
          <Swiper showsButtons={true} loop={false}>
            {produceVideoList(videos)}
          </Swiper> 
        );
      }
    }

    return (
      <View style={styles.container}>
          {createVideoViews()}
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

// class VideoCarousel extends Component {

//   render () {
//       if (this.props.selectedVideo) {
//       videoId = this.props.selectedVideo.id.videoId;
//       } else {
//       return (
//           <Text>...Loading</Text>
//       )
//       }
//       const uri = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;
//       return (
//       <View style={styles.container}>
//           <WebView
//           source={{ uri }}
//           javaScriptEnabled={true}
//           style={styles.video}
//           />
//       </View>
//       );
//   }
// }
