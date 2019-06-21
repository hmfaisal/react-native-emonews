import React, { Component } from "react";
import { View, StatusBar, ActivityIndicator } from "react-native";
import {TextLoader, LinesLoader} from 'react-native-indicator';
import { fetchNews, settingsUpdated, banResourse } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NavigationStateNotifier from "../utils/NavigationStateNotifier";
import CategorySlider from "../components/Slider";
import { colorPrimary, colorBlack, colorBlackInverse } from "../assets/base";
import firebase from 'react-native-firebase';

class NewsScreen extends Component {
  componentDidMount() {
    const onEnter = async () => {
      if (this.props.settings) {
        await this.props.fetchNews();
        this.props.settingsUpdated(false);
        this.setState({ activeScreen: true });
      }
    };

    const onExit = () => {};

    NavigationStateNotifier.newListener(this, onEnter, onExit);

    const advert = firebase.admob().interstitial('ca-app-pub-3939375362961071/9850341923');
    const AdRequest = firebase.admob.AdRequest;
    const request = new AdRequest();
    request.addKeyword('news').addKeyword('news by emotion');
    advert.loadAd(request.build());
    advert.on('onAdLoaded', () => {
      console.log('Advert ready to show.');
    });
    
    // Simulate the interstitial being shown "sometime" later during the apps lifecycle
    setTimeout(() => {
      if (advert.isLoaded()) {
        advert.show();
      } else {
      }
    }, 10000);
  }

  componentWillReceiveProps(props) {
    if (props.settings !== this.props.settings) {
      this.setState((prevState, props) => {
        return {
          activeScreen: !props.settings
        };
      });
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.settings === this.props.settings) {
      return false;
    }
    return true;
  }

  state = {
    activeScreen: false
  };

  renderScreen = () => {
    if (this.state.activeScreen) {
      return (
        <View
          style={{
            backgroundColor: colorBlack,
            
          }}
        >
          <CategorySlider
            banAction={this.props.banResourse}
            baned={this.props.ban}
            news={this.props.news}
            category={this.props.category}
            navigation={this.props.navigation.navigate}
            reload={this.props.fetchNews}
            preloader={this.props.settingsUpdated}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colorBlack
          }}
        >
          <LinesLoader color={colorPrimary}/>
          <TextLoader text="News is Loading" textStyle={{color:colorBlackInverse,fontSize:18}} />
        </View>
      );
    }
  };

  render() {
    return this.renderScreen();
  }
}

NewsScreen.propTypes = {
  news: PropTypes.object,
  category: PropTypes.object,
  ban: PropTypes.object,
  settings: PropTypes.bool,
  fetchNews: PropTypes.func,
  banResourse: PropTypes.func,
  settingsUpdated: PropTypes.func
};

const mapStateToProps = ({ news, category, ban, settings }) => ({
  news,
  category,
  ban,
  settings
});

export default connect(
  mapStateToProps,
  { fetchNews, banResourse, settingsUpdated }
)(NewsScreen);
