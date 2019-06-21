import React, { PureComponent } from "react";
import { View, StatusBar, ScrollView } from "react-native";
import { Icon, Button, Text } from "react-native-elements";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addCategory,
  removeCategory,
  addCountry,
  removeCountry,
  unbanResourse
} from "../actions";
import { colorBlack, colorBlackInverse, colorPrimary, colorPrimaryInverse } from "../assets/base";
import Select from "../components/Select";
import Baned from "../components/Baned";
import Warning from "../components/Warning";
import { categories, country } from "../constants";

class SettingsScreen extends PureComponent {
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
    return (
      <View
        style={{
          paddingTop: StatusBar.currentHeight,
          backgroundColor: colorBlack,
          flex: 1
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: 60,
            alignItems: "center"
          }}
        >
          <Icon
            name="ios-arrow-round-back"
            type="ionicon"
            color={colorBlackInverse}
            size={32}
            containerStyle={{ marginLeft: 20, borderRadius: 50 }}
            onPress={() =>
              !this.checkSubmit()
                ? this.props.navigation.navigate("news")
                : console.log("warning")
            }
          />
          <Text
            style={{
              color: colorBlackInverse,
              fontSize: 22,
              fontWeight: "bold",
              paddingLeft: 20
            }}
          >
            Settings
          </Text>
        </View>

        <Warning category={this.props.category} country={this.props.country} />

        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}
        >
          <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Select
                add={this.props.addCategory}
                remove={this.props.removeCategory}
                items={this.props.category}
                style={{ marginTop: 10, marginBottom: 10 }}
                type="EMOTIONS"
                options={categories}
                icon="ios-albums"
              />

              <Select
                add={this.props.addCountry}
                remove={this.props.removeCountry}
                items={this.props.country}
                style={{ marginTop: 5, marginBottom: 20 }}
                type="LANGUAGE"
                options={country}
                icon="ios-globe"
              />

              <Baned unban={this.props.unbanResourse} ban={this.props.ban} />
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Button
              large
              type="solid"
              disabled={this.checkSubmit()}
              buttonStyle={{ backgroundColor: colorPrimary }}
              icon={
                <Icon
                  type="ionicon"
                  name="ios-checkmark"
                  color={colorPrimaryInverse}
                  size={36}
                />
              }
              iconLeft
              title="DONE"
              titleStyle={{
                color:colorPrimaryInverse,
              }}
              onPress={() => this.props.navigation.navigate("news")}
            />
          </View>
          
        </ScrollView>
      </View>
    );
  }
}

SettingsScreen.propTypes = {
  category: PropTypes.object,
  country: PropTypes.object,
  ban: PropTypes.object,
  addCategory: PropTypes.func,
  removeCategory: PropTypes.func,
  addCountry: PropTypes.func,
  removeCountry: PropTypes.func,
  unbanResourse: PropTypes.func
};

const mapStateToProps = ({ category, country, ban }) => ({
  category,
  country,
  ban
});

export default connect(
  mapStateToProps,
  { addCategory, removeCategory, addCountry, removeCountry, unbanResourse }
)(SettingsScreen);
