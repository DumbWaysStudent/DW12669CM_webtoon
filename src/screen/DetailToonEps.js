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
import {banners} from '../components/Banners';

// const banners = [
//   {
//     title: '1',
//     url: 'https://4.bp.blogspot.com/-AJymNNkUGpc/WvP2frFdfXI/AAAAAAAAcNE/AmrKcJhayXc8k1spwyKlXfzh03N-GN--QCLcBGAs/s1600/2.jpg',
//   },
//   {
//     title: '2',
//     url: 'https://4.bp.blogspot.com/-AJymNNkUGpc/WvP2frFdfXI/AAAAAAAAcNE/AmrKcJhayXc8k1spwyKlXfzh03N-GN--QCLcBGAs/s1600/2.jpg',
//   },
//   {
//     title: '3',
//     url: 'https://toonkor.ai/data/file/wtoon/14964915953302.jpg',
//   },
//   {
//     title: '4',
//     url: 'https://toonkor.ai/data/file/wtoon/1496491595436.jpg',
//   },
//   {
//     title: '5',
//     url: 'https://toonkor.ai/data/file/wtoon/14964915955342.jpg',
//   },
//   {
//     title: '6',
//     url: 'https://toonkor.ai/data/file/wtoon/14964915955665.jpg',
//   },
//   {
//     title: '7',
//     url: 'https://toonkor.ai/data/file/wtoon/14964915955665.jpg',
//   },
//   {
//     title: '8',
//     url: 'https://toonkor.ai/data/file/wtoon/14964915955665.jpg',
//   },
//   {
//     title: '9',
//     url: 'https://toonkor.ai/data/file/wtoon/14964915955665.jpg',
//   },
//   {
//     title: '10',
//     url: 'https://image.webtoonguide.com/66/68/5b40890a3b24fcd0f854ac956a9d',
//   },
// ];

const shareOptions = {
  title: 'Title',
  message: 'Message',
  url: 'www.youtube.com',
  subject: 'file',
};

export class Home extends Component {
  listAllEp(item) {
    return (
      <View>
        <View>
          <Image source={{uri: item.url}} style={styles.viewToon} />
        </View>
      </View>
    );
  }
  handleBack() {
    this.props.navigation.navigate('detailToon');
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
                퍼펙트 하프 1 화{' '}
              </Title>
            </Body>
            <Right>
              <Button transparent onPress={() => Share.share(shareOptions)}>
                <Icon name="share-alt-square" size={30} />
              </Button>
            </Right>
          </Header>
        </View>
        <FlatList
          // style={styles.flatList1}
          data={banners}
          renderItem={({item}) => this.listAllEp(item)}
          keyExtractor={item => item.title}
        />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  viewToon: {
    marginTop: 2.5,
    marginBottom: 2.5,
    marginHorizontal: 20,
    width: null,
    height: 2480,
  },
});
