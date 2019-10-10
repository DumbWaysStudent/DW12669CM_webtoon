/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Share,
} from 'react-native';
import {Button, Header, Left, Title, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import {FlatList} from 'react-native-gesture-handler';
import {bannersEps} from '../components/Banners';

const shareOptions = {
  title: 'Title',
  message: 'Message',
  url: 'www.youtube.com',
  subject: 'file',
};

export class DetailToon extends Component {
  listAllEp(item) {
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity onPress={() => this.handleDetail()}>
            <Image source={{uri: item.url}} style={styles.listToon} />
          </TouchableOpacity>
        </View>
        <View style={styles.listDetailToonToon}>
          <Text style={styles.titleNDate}> {item.title} </Text>
          <Text> {item.date} </Text>
        </View>
      </View>
    );
  }
  handleBack() {
    this.props.navigation.navigate('home');
  }
  handleDetail() {
    this.props.navigation.navigate('detailToonEps');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View>
          <Header style={{backgroundColor: 'white'}}>
            <Left>
              <Button transparent onPress={() => this.handleBack()}>
                <Icon name="arrow-left" size={30} />
              </Button>
            </Left>
            <Body>
              <Title style={{color: 'black', fontSize: 40, fontWeight: 'bold'}}>
                {' '}
                퍼펙트 하프{' '}
              </Title>
            </Body>
            <Right>
              <Button transparent onPress={() => Share.share(shareOptions)}>
                <Icon name="share-alt-square" size={30} />
              </Button>
            </Right>
          </Header>
        </View>
        <View style={styles.viewToon}>
          <Image source={{uri: bannersEps[4].url}} style={styles.toon} />
        </View>
        <View style={{flex: 5.75}}>
          <FlatList
            // style={styles.flatList1}
            data={bannersEps}
            renderItem={({item}) => this.listAllEp(item)}
            keyExtractor={item => item.title}
          />
        </View>
      </View>
    );
  }
}

export default DetailToon;

const styles = StyleSheet.create({
  viewToon: {
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 4,
    flex: 4.25,
  },
  toon: {
    justifyContent: 'center',
    width: '100%',
    height: 400,
  },
  listToon: {
    height: 120,
    width: 90,
    borderWidth: 3,
    borderColor: 'black',
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 20,
    marginTop: 5,
  },
  listDetailToon: {
    height: 100,
    width: 70,
    marginRight: 10,
    marginVertical: 30,
  },
  titleNDate: {
    fontSize: 25,
    marginBottom: 20,
    marginTop: 15,
  },
});
