/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import {FlatList} from 'react-native-gesture-handler';
import SlideshowTools from '../components/Slider';

import {bannersHome} from '../components/Banners';

export class Home extends Component {
  listFavorite(item) {
    return (
      <View>
        <TouchableOpacity onPress={() => this.handleDetail()}>
          <Image source={{uri: item.url}} style={styles.favoriteToon} />
          <Text style={styles.text}> {item.title} </Text>
        </TouchableOpacity>
      </View>
    );
  }
  listFavoriteAll(item) {
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity onPress={() => this.handleDetail()}>
            <Image source={{uri: item.url}} style={styles.allToon} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewToon}>
          <Text style={{fontSize: 30}}> {item.title} </Text>
          <Button
            style={{
              backgroundColor: '#FF9E1B',
              justifyContent: 'center',
              width: 150,
            }}>
            <Text style={{fontSize: 35, width: 150}}> + Favorite</Text>
          </Button>
        </View>
      </View>
    );
  }

  handleDetail() {
    this.props.navigation.navigate('detailToon');
  }

  render() {
    return (
      <View marginHorizontal={20} style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <View style={styles.view}>
              <Input
                style={styles.search}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Looking for something ..."
              />
              <Icon name="search" style={styles.search} />
            </View>
          </View>
          <View style={{flex: 12}}>
            <SlideshowTools />
            <View>
              <Text style={styles.favorite}>Favorite</Text>
              <FlatList
                // style={styles.flatList1}
                data={bannersHome}
                renderItem={({item}) => this.listFavorite(item)}
                keyExtractor={item => item.title}
                horizontal
              />
            </View>
            <Text style={styles.favorite}>All</Text>
            <FlatList
              // style={styles.flatList1}
              data={bannersHome}
              renderItem={({item}) => this.listFavoriteAll(item)}
              keyExtractor={item => item.title}
            />
          </View>
        </ScrollView>
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
    borderRadius: 5,
  },
  favoriteToon: {
    height: 200,
    width: 170,
    borderWidth: 3,
    borderColor: 'black',
    marginRight: 10,
    borderRadius: 5,
  },
  search: {
    justifyContent: 'center',
    marginRight: 5,
    marginTop: 4,
    fontSize: 30,
  },
  view: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 3,
    marginTop: 20,
    height: 60,
    borderRadius: 5,
  },
  icon: {
    width: 40,
    height: 40,
  },
  showSize: {
    height: '100%',
  },
  favorite: {
    fontSize: 40,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
