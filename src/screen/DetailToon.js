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

const banners = [
  {
    title: 'EP 5',
    date: '10 Oktober 2019',
    url:
      'http://postfiles3.naver.net/20160626_34/juderland_1466924213290Heosh_JPEG/%C1%A6%B8%F1re.jpg?type=w2',
  },
  {
    title: 'EP 4',
    date: '5 Oktober 2019',
    url:
      'https://2.bp.blogspot.com/-bCqRFKQEU7A/XI1Sl4J7k_I/AAAAAAAAACQ/Y9jJBNemwCEHAb9LJC0aNHs80tF1l_pewCLcBGAs/s400/20190316_233825.png',
  },
  {
    title: 'EP 3',
    date: '1 Oktober 2019',
    url: 'https://image.webtoonguide.com/fe/b7/3cc0163681b2c8d23b6209a7d22a',
  },
  {
    title: 'EP 2',
    date: '27 September 2019',
    url: 'https://f01.mrcdn.info/file/mrportal/h/c/1/f/So.AUrX32c.jpg',
  },
  {
    title: 'EP 1',
    date: '20 September 2019',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNcJ0Ycw1dpd1vSqLrpgw8iE41IoKn-yO0zxExYlVkpChNJwI',
  },
];

const shareOptions = {
  title: 'Title',
  message: 'Message',
  url: 'www.youtube.com',
  subject: 'file',
};

export class Home extends Component {
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
  handleDetail() {}

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
                릴리스 코드{' '}
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
          <Image source={{uri: banners[0].url}} style={styles.toon} />
        </View>
        <View style={{flex: 5.75}}>
          <FlatList
            // style={styles.flatList1}
            data={banners}
            renderItem={({item}) => this.listAllEp(item)}
            keyExtractor={item => item.title}
          />
        </View>
      </View>
    );
  }
}

export default Home;

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
