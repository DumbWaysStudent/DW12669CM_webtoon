import React, {Component} from 'react';
import {View, AsyncStorage} from 'react-native';
import {Text} from 'native-base';
import {StackActions, NavigationActions} from 'react-navigation';
import * as actionWebtoons from './../redux/actions/actionWebtoons';
import {connect} from 'react-redux';

class Loading extends Component {
  componentDidMount() {
    setTimeout(async () => {
      await this.props.handleGetWebtoons();
      const id = await AsyncStorage.getItem('userid');
      await this.props.handleGetFav(id);
      // await this.props.handleGetEps();
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: 'home'})],
      });
      this.props.navigation.dispatch(resetAction);
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
    handleGetFav: id => dispatch(actionWebtoons.handleGetFav(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Loading);
