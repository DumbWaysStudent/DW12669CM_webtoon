import React, {Component} from 'react';
import {View} from 'react-native';
import {Text} from 'native-base';
import * as actionWebtoons from './../redux/actions/actionWebtoons';
import {connect} from 'react-redux';

class Loading extends Component {
  componentDidMount() {
    setTimeout(async () => {
      await this.props.handleGetWebtoons();
      await this.props.handleGetFav();
      // await this.props.handleGetEps();
      this.props.navigation.navigate('home');
    }, 1000);
  }
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Lagi Loading ...</Text>
      </View>
    );
  }
}

const styles = {
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 80,
  },
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    handleGetWebtoons: () => dispatch(actionWebtoons.handleGetWebtoons()),
    handleGetFav: () => dispatch(actionWebtoons.handleGetFav()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Loading);
