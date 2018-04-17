import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { ExpoConfigView } from '@expo/samples';
import styles from './Style';


class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <ExpoConfigView />
      <Text>
        {'...'}
      </Text>
      </ScrollView>
    );
  }
}

export default SettingsScreen;
