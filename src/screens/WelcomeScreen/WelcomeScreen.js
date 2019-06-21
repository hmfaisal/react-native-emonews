import React, { PureComponent } from "react";
import {
  View,
  ScrollView,
  ViewPagerAndroid,
  AsyncStorage,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { Button, Text, Image, Icon } from "react-native-elements";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Select from "../../components/Select";
import {
  addCategory,
  removeCategory,
  addCountry,
  removeCountry,
  settingsUpdated
} from "../../actions";
import NavigationStateNotifier from "../../utils/NavigationStateNotifier";
import ViewPagerContainer from "../../components/ViewPagerContainer";
import Warning from "../../components/Warning";
import { styles as style } from "./styles";
import { categories, country } from "../../constants";

class WelcomeScreen extends PureComponent {

  componentDidMount = async () => {
    const onEnter = () => {
      this.setState({ activeScreen: true });
    };
    
    const onExit = () => {
      this.setState({ activeScreen: false });
    };

    let root = await AsyncStorage.getAllKeys();

    const { category, country } = this.props;
    const categoryKeys = Object.keys(category);
    const countryKeys = Object.keys(country);

    NavigationStateNotifier.newListener(this, onEnter, onExit);

    if (categoryKeys.length && countryKeys.length && root) {
      this.props.navigation.navigate("news");
    }
  };

  state = {
    activeScreen: true
  };

  checkSubmit = () => {
    const { category, country } = this.props;
    const categoryKeys = Object.keys(category);
    const countryKeys = Object.keys(country);

    if (categoryKeys.length && countryKeys.length) {
      return false;
    }

    return true;
  };

  render() {
    return !this.state.activeScreen ? null : (
      <View style={styles.screenContainer}>
        <ViewPagerContainer style={{ flex: 1 }}>
          <ViewPagerAndroid ref="pages" style={styles.viewPager}>
            <View style={{ flex: 1 }} key="1">
              <Image
                style={{ width: 300, height: 300, alignSelf: "center" }}
                source={require("../../assets/mood_logo.png")}
                PlaceholderContent={<ActivityIndicator />}
              />
              <Text h3 style={styles.logoTitle}>
                Emo News
              </Text>
              <Text h4 style={styles.screenTitle}>
                Get latest news according to your emotion and country preferences.
              </Text>
              <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <Button
                  large
                  icon={
                    <Icon
                      name="ios-arrow-round-forward"
                      type="ionicon"
                      color={styles.colorPrimaryInverse.color}
                      size={24}
                    />
                  }
                  iconRight
                  title="NEXT"
                  type="solid"
                  buttonStyle={{
                    backgroundColor: styles.colorPrimary.color,
                  }}
                  titleStyle={{
                    color:styles.colorPrimaryInverse.color,
                  }}
                  onPress={() => this.refs.pages.setPage(1)}
                />
              </View>
            </View>

            <View key="2">
              <ScrollView 
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}
              >
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                  <Warning
                    country={this.props.country}
                    category={this.props.category}
                  />
                  <Icon
                    name="ios-construct"
                    type="ionicon"
                    color={styles.colorBlackInverse.color}
                    size={48}
                    containerStyle={styles.iconContainer}
                  />

                  <Text style={styles.screenParagraph}>
                    Put your emotions here:{" "}
                  </Text>
                    <Select
                    add={this.props.addCategory}
                    remove={this.props.removeCategory}
                    items={this.props.category}
                    style={{ marginTop: 10, marginBottom: 10 }}
                    type="EMOTION"
                    options={categories}
                    icon="ios-albums"
                  />
                  
                  <Text style={styles.screenParagraph}>
                    Select one or several languages:{" "}
                  </Text>
                  <Select
                    add={this.props.addCountry}
                    remove={this.props.removeCountry}
                    items={this.props.country}
                    style={{ marginTop: 5, marginBottom: 20 }}
                    type="LANGUAGE"
                    options={country}
                    icon="ios-globe"
                  />
                </View>
                
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                  <Button
                    large
                    type="solid"
                    disabled={this.checkSubmit()}
                    buttonStyle={{
                      backgroundColor: styles.colorPrimary.color,
                    }}
                    icon={
                      <Icon
                        type="ionicon"
                        name="ios-checkmark"
                        color={styles.colorPrimaryInverse.color}
                        size={36}
                      />
                    }
                    iconLeft
                    title="DONE"
                    titleStyle={{
                      color:styles.colorPrimaryInverse.color,
                    }}
                    onPress={() => this.props.navigation.navigate("news")}
                  />
                </View>
              </ScrollView>
            </View>
          </ViewPagerAndroid>
        </ViewPagerContainer>
      </View>
    );
  }
}

const mapStateToProps = ({ category, country }) => ({
  category,
  country
});

const styles = StyleSheet.create(style);

WelcomeScreen.propTypes = {
  category: PropTypes.object,
  country: PropTypes.object,
  addCategory: PropTypes.func,
  removeCategory: PropTypes.func,
  addCountry: PropTypes.func,
  removeCountry: PropTypes.func,
  settingsUpdated: PropTypes.func
};

export default connect(
  mapStateToProps,
  { addCategory, removeCategory, addCountry, removeCountry, settingsUpdated }
)(WelcomeScreen);
