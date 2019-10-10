import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Slideshow from 'react-native-image-slider-show';
// import DataDummy from './Banners';

const bannersI = [
  {
    title: 'Lilith Cord',
    url:
      'http://postfiles3.naver.net/20160626_34/juderland_1466924213290Heosh_JPEG/%C1%A6%B8%F1re.jpg?type=w2',
  },
  {
    title: '동데 누나',
    url:
      'https://2.bp.blogspot.com/-bCqRFKQEU7A/XI1Sl4J7k_I/AAAAAAAAACQ/Y9jJBNemwCEHAb9LJC0aNHs80tF1l_pewCLcBGAs/s400/20190316_233825.png',
  },
  {
    title: 'Yuri Part Time Job',
    url: 'https://image.webtoonguide.com/fe/b7/3cc0163681b2c8d23b6209a7d22a',
  },
  {
    title: 'Tsumi To Kai',
    url: 'https://f01.mrcdn.info/file/mrportal/h/c/1/f/So.AUrX32c.jpg',
  },
  {
    title: 'Perfect Half',
    url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNcJ0Ycw1dpd1vSqLrpgw8iE41IoKn-yO0zxExYlVkpChNJwI',
  },
];

export default class SlideshowTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      dataSource: bannersI,
    };
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
      <View style={styles.showBorder}>
        <Slideshow
          height={264}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({position})}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  showBorder: {
    height: 270,
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 3,
  },
});
