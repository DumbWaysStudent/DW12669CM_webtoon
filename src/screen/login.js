/* eslint-disable no-unreachable */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button, Input, Item} from 'native-base';
import {StackActions, NavigationActions} from 'react-navigation';
import PasswordInputText from 'react-native-hide-show-password-input';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isPasswordValid: false,
      isMailValid: false,
    };
  }

  checkPassword(pass) {
    if (pass === '') {
      this.setState({isPasswordValid: false});
    } else {
      this.setState({isPasswordValid: true});
    }
    this.setState({password: pass});
  }
  checkMail(mail) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(mail)) {
      return this.setState({isMailValid: true});
    } else {
      return this.setState({isMailValid: false});
    }
    this.setState({email: mail});
  }
  check(mail, pass) {
    if (mail === true && pass === true) {
      return false;
    } else {
      return true;
    }
  }
  handleLogin() {
    const changeIndex = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'home'})],
    });
    this.props.navigation.dispatch(changeIndex);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.subViewTitle}>
          <Text style={styles.title}> Log In </Text>
          <Text style={styles.subTitle}> Login with your WEBTOON account </Text>
        </View>
        <View style={styles.subViewInput}>
          <Text style={{alignItems: 'flex-start'}}> Email </Text>
          <Item>
            <Input
              onChangeText={text => this.checkMail(text)}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Input your email"
            />
          </Item>

          <PasswordInputText
            placeholder="input your password"
            style={{borderColor: 'black'}}
            onChangeText={password => this.checkPassword(password)}
          />

          <Button
            rounded
            style={{marginTop: 20, justifyContent: 'center'}}
            onPress={() => this.handleLogin()}
            disabled={this.check(
              this.state.isMailValid,
              this.state.isPasswordValid,
            )}>
            <Text>Login</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  subViewTitle: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 100,
  },
  subViewInput: {
    flex: 2,
    marginHorizontal: 25,
  },
  subViewLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default App;
