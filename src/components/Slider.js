import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';

import Slideshow from 'react-native-image-slider-show';
import {bannersFavorite} from './Banners';

const {height, width} = Dimensions.get('window');

export default class SlideshowTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 1,
      interval: null,
      dataSource: bannersFavorite,
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
          height={height * 0.364}
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({position})}
        />
      </View>
    );
  }
}
const styles = {
  showBorder: {
    height: height * 0.37,
    width: width * 0.933,
    marginTop: 5,
    borderColor: 'silver',
    borderWidth: 3,
    borderRadius: 5,
  },
};
