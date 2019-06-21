import { colorBlackInverse } from "../../../assets/base";
import { Dimensions } from "react-native";

export const SCREEN_HEIGHT = Dimensions.get("window").height;

export const styles = {
  colorBlackInverse: {
    color: colorBlackInverse
  },
  viewPager: {
    height: SCREEN_HEIGHT,
  },
  reload: {
    position: "absolute",
    top: 25,
    right: 60,
    borderRadius: 50,
    width: 50,
    height: 50
  },
  dots: {
    position: "absolute",
    top: 25,
    right: 15,
    borderRadius: 50,
    width: 50,
    height: 50
  }
};
