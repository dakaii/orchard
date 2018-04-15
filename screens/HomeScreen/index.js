import React from 'react';
import { View } from 'react-native';
import styles from './Style';
import SearchBar from '../../components/SearchBar';
import VideoCarousel from '../../components/VideoCarousel';


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Video',
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar/>
        <VideoCarousel/>
      </View>
    );
  }
}

export default HomeScreen;
