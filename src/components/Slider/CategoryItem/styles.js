import {
  colorBlack,
  colorGreyLight,
  colorPrimary
} from "../../../assets/base";

import { Dimensions } from "react-native";

export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SWIPE_THRESHOLD = 0.6 * SCREEN_HEIGHT;
export const SWIPE_OUT_DURATION = 250;

export const styles = {
  colorBlack: {
    color: colorBlack
  },
  colorGreyLight: {
    color: colorGreyLight
  },
  colorPrimary: {
    color: colorPrimary
  },
  image: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: colorBlack
  },
  viewPager: {
    height: SCREEN_HEIGHT
  },
  pageStyle: {
    flex: 1,
    backgroundColor: colorBlack
  },
  pageTitile: {
    marginLeft: 28,
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 14,
    backgroundColor: "transparent",
    color: colorGreyLight,
    zIndex: 10
  },
  itemTitle: {
    color: colorGreyLight,
    fontWeight: "bold",
    fontSize: 22,
    backgroundColor: "transparent",
    textAlign: "left"
  },
  itemTime: {
    color: colorGreyLight,
    marginBottom: 20,
    fontSize: 16
  },
  itemSource: {
    fontStyle: "italic",
    color: colorGreyLight,
    fontSize: 16
  }
};
