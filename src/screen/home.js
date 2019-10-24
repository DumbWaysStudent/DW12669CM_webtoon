/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Input, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import {FlatList} from 'react-native-gesture-handler';
import SlideshowTools from '../components/Slider';
import {connect} from 'react-redux';

const {height, width} = Dimensions.get('window');

// console.log(webtoons);
class Home extends Component {
  listFavorite(item) {
    return (
      <View key={item.id}>
        <TouchableOpacity onPress={() => this.handleDetailFav(item)}>
          <Image
            source={{uri: item.webtoonId.image}}
            style={styles.favoriteToon}
          />
          <Text style={styles.text}> {item.webtoonId.title} </Text>
          {console.log(item.webtoonId)}
        </TouchableOpacity>
      </View>
    );
  }
  listAll(item) {
    return (
      <View style={styles.allList}>
        <View>
          <TouchableOpacity onPress={() => this.handleDetail(item)}>
            <Image source={{uri: item.image}} style={styles.allToon} />
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

  handleDetail(item) {
    this.props.navigation.navigate('detailToon', {
      id: item.id,
      title: item.title,
      cover: item.cover,
      genre: item.genre,
      description: item.description,
      name: item.createdBy.name,
    });
  }

  handleDetailFav(item) {
    this.props.navigation.navigate('detailToon', {
      id: item.webtoonId.id,
      title: item.webtoonId.title,
      cover: item.webtoonId.cover,
      genre: item.webtoonId.genre,
      description: item.webtoonId.description,
      name: item.userId.name,
    });
  }

  render() {
    console.disableYellowBox = true;
    const {webtoons} = this.props.webtoonLocal;
    const {fav} = this.props.favLocal;
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
                data={fav}
                renderItem={({item}) => this.listFavorite(item)}
                keyExtractor={item => item.title}
                horizontal
              />
            </View>
            <View>
              <Text style={styles.favorite}>All</Text>
              <FlatList
                // style={styles.flatList1}
                data={webtoons}
                renderItem={({item}) => this.listAll(item)}
                keyExtractor={item => item.title}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    webtoonLocal: state.webtoons,
    favLocal: state.fav,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

const styles = StyleSheet.create({
  viewToon: {
    justifyContent: 'center',
  },
  allToon: {
    height: height * 0.2,
    width: width * 0.3,
    borderWidth: 3,
    borderColor: 'silver',
    marginRight: 100,
    marginVertical: 15,
    marginLeft: 10,
    borderRadius: 5,
  },
  favoriteToon: {
    height: 200,
    width: 170,
    borderWidth: 3,
    borderColor: 'silver',
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
    borderColor: 'silver',
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
    marginVertical: 15,
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
  allList: {
    borderColor: 'silver',
    borderWidth: 3,
    flexDirection: 'row',
    borderRadius: 30,
  },
});
