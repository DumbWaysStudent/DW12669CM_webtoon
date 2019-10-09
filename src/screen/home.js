/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import Slideshow from 'react-native-image-slider-show';
import {FlatList} from 'react-native-gesture-handler';
// import SlideshowTools from '../components/Slider';

const banners = [
  {
    title: 'Lilith Cord',
    url:
      'http://postfiles3.naver.net/20160626_34/juderland_1466924213290Heosh_JPEG/%C1%A6%B8%F1re.jpg?type=w2'
  },
  {
    title: '동데 누나',
    url:
      'https://2.bp.blogspot.com/-bCqRFKQEU7A/XI1Sl4J7k_I/AAAAAAAAACQ/Y9jJBNemwCEHAb9LJC0aNHs80tF1l_pewCLcBGAs/s400/20190316_233825.png'
  },
  {
    title: 'Yuri Part Time Job',
    url: 'https://image.webtoonguide.com/fe/b7/3cc0163681b2c8d23b6209a7d22a'
  },
  {
    title: 'Tsumi To Kai',
    url:
      'data:image/jpeg;base64,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'
  },
  {
    title: 'Perfect Half',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNcJ0Ycw1dpd1vSqLrpgw8iE41IoKn-yO0zxExYlVkpChNJwI'
  },
];

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      dataSource: banners,
    };
  }
  listFavorite(item) {
    return (
      <View>
        <TouchableOpacity>
          <Image source={{uri: item.url}} style={styles.favoriteToon} />
          <Text style={{alignSelf: 'center'}}> {item.title} </Text>
        </TouchableOpacity>
      </View>
    );
  }
  listFavoriteAll(item) {
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity>
            <Image source={{uri: item.url}} style={styles.allToon} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewToon}>
          <Text style={{fontSize: 30}}> {item.title} </Text>
          <Button
            style={{backgroundColor: '#FF9E1B', justifyContent: 'center'}}>
            <Text style={{fontSize: 35, width: 150}}> + Favorite</Text>
          </Button>
        </View>
      </View>
    );
  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1,
        });
      }, 2000),
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <View marginHorizontal={20} style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.view}>
            <Input
              style={styles.searchBar}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Looking for something ..."
            />
            <Icon name="search" size={40} style={styles.search} />
          </View>
        </View>
        <View style={{flex: 12}}>
          <View style={styles.showBorder}>
            <Slideshow
              height={260}
              dataSource={this.state.dataSource}
              position={this.state.position}
              onPositionChanged={position => this.setState({position})}
            />
          </View>
          <View>
            <Text style={styles.favorite}>Favorite</Text>
            <FlatList
              // style={styles.flatList1}
              data={banners}
              renderItem={({item}) => this.listFavorite(item)}
              keyExtractor={item => item.title}
              horizontal
            />
          </View>
          <Text style={styles.favorite}>All</Text>
          <FlatList
            // style={styles.flatList1}
            data={banners}
            renderItem={({item}) => this.listFavoriteAll(item)}
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
    justifyContent: 'center',
  },
  allToon: {
    height: 200,
    width: 170,
    borderWidth: 3,
    borderColor: 'black',
    marginRight: 10,
    marginTop: 5,
  },
  favoriteToon: {
    height: 200,
    width: 170,
    borderWidth: 3,
    borderColor: 'black',
    marginRight: 10,
  },
  search: {
    justifyContent: 'center',
    marginRight: 5,
    marginTop: 4,
  },
  view: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 3,
    marginTop: 5,
    height: 60,
  },
  icon: {
    width: 40,
    height: 40,
  },
  showBorder: {
    height: 270,
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 3,
  },
  showSize: {
    height: '100%',
  },
  favorite: {
    fontSize: 40,
  },
});
