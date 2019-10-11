/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, View, TouchableOpacity, Text, Image} from 'react-native';
import {Header, Left, Body, Title, Input, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import {FlatList} from 'react-native-gesture-handler';

import {bannersEps} from '../components/Banners';

export class EditWebtoon extends Component {
  listFavoriteAll(item) {
    return (
      <View style={{flexDirection: 'row'}}>
        <View>
          <TouchableOpacity onPress={() => this.handleDetail()}>
            <Image source={{uri: item.url}} style={styles.listToon} />
          </TouchableOpacity>
        </View>
        <View style={styles.listDetailToon}>
          <Text style={styles.title}> {item.title} </Text>
          <Text style={styles.favorite}> {item.date} </Text>
        </View>
      </View>
    );
  }
  handleDetail() {}
  handleBack() {
    this.props.navigation.goBack();
  }
  handleFinishAdd() {
    this.props.navigation.navigate('myWebToon');
  }
  addEps() {
    this.props.navigation.navigate('addEps');
  }
  delWeb() {}

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header style={styles.header}>
          <Left style={{flex: 1}}>
            <TouchableOpacity onPress={() => this.handleBack()}>
              <Icon name="arrow-left" style={styles.iconHeader} />
            </TouchableOpacity>
          </Left>
          <Body style={{flex: 8}}>
            <Title style={styles.titleHeader}> Edit Webtoon </Title>
          </Body>
          <Right style={{flex: 1}}>
            <TouchableOpacity onPress={() => this.handleFinishAdd()}>
              <Icon name="check" style={styles.iconHeader} color={'orange'} />
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={{flex: 1}}>
          <View>
            <Text style={styles.textTitle}> Title </Text>
          </View>
          <View style={styles.view}>
            <Input
              style={styles.search}
              autoCapitalize="none"
              placeholder="Type in the title">
              <Text>{this.props.navigation.getParam('title')}</Text>
            </Input>
          </View>
        </View>
        <View style={{flex: 4, marginTop: 20, marginHorizontal: 20}}>
          <Text style={styles.textEpisode} paddingTop={20}>
            {' '}
            Episode{' '}
          </Text>
          <FlatList
            // style={styles.flatList1}
            data={bannersEps}
            renderItem={({item}) => this.listFavoriteAll(item)}
            keyExtractor={item => item.title}
          />
        </View>
        <View style={styles.viewAddDel}>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => this.addEps()}>
            <Text style={styles.buttonAddText}> + Add Episode </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonDel}
            onPress={() => this.delWeb()}>
            <Text style={styles.buttonDelText}> Delete Webtoon </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default EditWebtoon;

const styles = {
  header: {
    backgroundColor: 'white',
    height: 100,
  },
  titleHeader: {
    color: 'black',
    fontSize: 40,
  },
  view: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 3,
    marginTop: 5,
    height: 60,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  viewToon: {
    marginBottom: 5,
    borderColor: 'black',
    borderWidth: 4,
    flex: 4.25,
  },
  search: {
    justifyContent: 'center',
    marginRight: 5,
    marginTop: 4,
    fontSize: 30,
    fontWeight: 'bold',
  },
  toon: {
    justifyContent: 'center',
    width: '100%',
    height: 400,
  },
  listToon: {
    height: 120,
    width: 100,
    borderWidth: 3,
    borderColor: 'black',
    marginBottom: 5,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  listDetailToon: {
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 30,
    marginTop: 20,
  },
  favorite: {
    fontSize: 20,
    marginBottom: 20,
    color: 'grey',
  },
  viewAddDel: {
    flex: 3.0,
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonAdd: {
    borderColor: 'black',
    width: 580,
    height: 70,
    borderWidth: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    borderBottomWidth: 7,
    borderRightWidth: 7,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonDel: {
    borderColor: 'black',
    width: 580,
    height: 70,
    borderWidth: 3,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    borderBottomWidth: 7,
    borderRightWidth: 7,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: 'red',
  },
  buttonAddText: {
    fontSize: 40,
  },
  buttonDelText: {
    fontSize: 40,
    color: 'white',
  },
  iconHeader: {
    fontSize: 45,
  },
  textTitle: {
    fontSize: 45,
    marginRight: 30,
  },
  textEpisode: {
    fontSize: 45,
    marginRight: -20,
  },
};
