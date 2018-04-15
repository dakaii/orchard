import _ from 'lodash';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { TextInput, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { videoAPI} from '../actions/Index';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { video: ''};
    videoAPI('surfboards');
  }

  render () {
    return (
      <TextInput 
        style={styles.TextInputStyleClass}
        onChangeText={_.debounce((keyword) => { videoAPI(keyword) }, 500)}
        placeholder="Search Here"
      />
    );
  }
}

function mapStateToProps(state) {
  return { video: state.video[0] }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ videoAPI }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)

const styles = StyleSheet.create({
  TextInputStyleClass: {
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 7 ,
    backgroundColor : "#FFFFFF"
  },
});