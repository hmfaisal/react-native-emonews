import { StatusBar } from "react-native";
import {
  colorPrimary,
  colorPrimaryInverse,
  colorBlack,
  colorBlackInverse
} from "../../assets/base";

export const styles = {
  colorPrimary: {
    color: colorPrimary
  },
  colorPrimaryInverse: {
    color: colorPrimaryInverse
  },
  colorBlack: {
    color: colorBlack
  },
  colorBlackInverse: {
    color: colorBlackInverse
  },
  viewPager: {
    flex: 1
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colorBlack,
    paddingTop: StatusBar.currentHeight
  },
  logoTitle: {
    textAlign: "center",
    color: colorPrimary,
    padding: 20
  },
  screenTitle: {
    textAlign: "center",
    color: colorBlackInverse,
    padding: 10
  },
  screenParagraph: {
    textAlign: "center",
    color: colorBlackInverse,
    padding:10,
    fontSize:20
  },
  iconContainer: {
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10
  }
};
