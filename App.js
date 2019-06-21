import React from "react";
import { StyleSheet, View } from "react-native";
import { TabNavigator } from "react-navigation";
import { Provider } from "react-redux";
import GlobalFont from 'react-native-global-font';
import store from "./src/store";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import NewsScreen from "./src/screens/NewsScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import NavigationStateNotifier from "./src/utils/NavigationStateNotifier";

export default class App extends React.Component {
  componentWillMount() {
    let fontName = 'Lato-Regular';
    GlobalFont.applyGlobal(fontName)
  }
  render() {
    const MainNavigator = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        news: { screen: NewsScreen },
        settings: { screen: SettingsScreen }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        swipeEnabled: false
      }
    );
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator
            onNavigationStateChange={(prevState, currentState) => {
              NavigationStateNotifier.onNavigationStateChange(
                prevState,
                currentState
              );
            }}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
