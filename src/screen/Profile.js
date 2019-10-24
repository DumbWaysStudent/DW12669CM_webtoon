/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, TouchableOpacity, Text, AsyncStorage} from 'react-native';
import {Header, Title, Right, Body, Image} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
const name = 'Cerkhachacu';
// const image= this.props.navigation.getParam('image');
// const profName= this.props.navigation.getParam('name');
export class Profile extends Component {
  state = {
    // image: this.props.navigation.getParam('image'),
    // name: this.props.navigation.getParam('name'),
    image: '',
    name: '',
  };
  async handleLogOut() {
    await AsyncStorage.removeItem('token');
    await this.props.navigation.navigate('login');
  }
  handleEditProfile(item) {
    this.props.navigation.navigate('editProfile', {name: item});
  }
  handleMytoon() {
    this.props.navigation.navigate('myWebToon');
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <Header style={styles.header}>
            <Body>
              <Title style={styles.titleHeader}> Profile </Title>
            </Body>
            <Right>
              <TouchableOpacity onPress={() => this.handleEditProfile(name)}>
                <Icon name="pencil" style={styles.iconHeader} />
              </TouchableOpacity>
            </Right>
          </Header>
        </View>
        {this.state.image === '' ? (
          <View style={styles.profile}>
            <Icon name="user-circle" style={styles.iconProfile} />
            <Text style={styles.iconName}>Cerkhachacu</Text>
          </View>
        ) : (
          <View style={styles.profile}>
            <Image style={styles.imageProfile} source={this.state.image} />
            <Text style={styles.iconName}>{this.state.name}</Text>
          </View>
        )}
        <View style={{flex: 5.2}}>
          <View style={styles.viewButtonText}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => this.handleMytoon()}>
              <Text style={styles.text}> My Webtoon Creation </Text>
              <Icon name="angle-right" style={styles.iconButtonText} />
            </TouchableOpacity>
          </View>
          <View style={styles.viewButtonText}>
            <TouchableOpacity
              style={styles.opacity}
              onPress={() => this.handleLogOut()}>
              <Text style={styles.text}> Log Out </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;

const styles = {
  header: {
    backgroundColor: 'white',
    height: 100,
  },
  titleHeader: {
    color: 'black',
    fontSize: 40,
  },
  iconHeader: {
    color: 'orange',
    fontSize: 50,
    marginRight: 10,
  },
  profile: {
    alignSelf: 'center',
    flex: 3.8,
    marginTop: 40,
  },
  iconProfile: {
    fontSize: 200,
    color: 'grey',
  },
  iconName: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  viewButtonText: {
    borderColor: 'black',
    borderWidth: 1.1,
    flex: 0.13,
  },
  opacity: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    fontSize: 40,
    marginBottom: 10,
    flex: 9,
  },
  iconButtonText: {
    flex: 1,
    marginTop: 5,
    fontSize: 40,
  },
  imageProfile: {
    alignSelf: 'center',
    width: 200,
    height: 200,
    marginTop: 25,
    borderRadius: 100,
  },
};
