import React, {Component} from 'react';
import {View, StyleSheet, Image, Share} from 'react-native';
import {Button, Header, Left, Title, Right, Body} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import {FlatList} from 'react-native-gesture-handler';
import {banners} from '../components/Banners';

const shareOptions = {
  title: 'Title',
  message: 'Message',
  url: 'www.youtube.com',
  subject: 'file',
};

export class DetailToonEps extends Component {
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

export default DetailToonEps;

const styles = StyleSheet.create({
  viewToon: {
    marginTop: 2.5,
    marginBottom: 2.5,
    marginHorizontal: 20,
    width: null,
    height: 2480,
  },
});
