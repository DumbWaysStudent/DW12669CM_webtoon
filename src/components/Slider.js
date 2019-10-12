import React, {Component} from 'react';
import {View} from 'react-native';

import Slideshow from 'react-native-image-slider-show';
import {bannersFavorite} from './Banners';

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
          height={264}
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
    height: 270,
    marginTop: 5,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 5,
  },
};
