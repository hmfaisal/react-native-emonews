import {
  colorPrimary,
  colorGreyLight,
  colorBlack
} from "../../../assets/base";

export const styles = {
  container: {
    borderRadius: 100,
    backgroundColor: colorGreyLight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 30,
    marginLeft: 10,
    marginBottom: 10
  },
  text: {
    fontSize: 14,
    color: colorBlack,
    marginLeft: 10
  },
  iconContainer: {
    height: 30,
    width: 30,
    marginLeft: 10,
    borderRadius: 50,
    backgroundColor: colorPrimary,
    elevation: 3,
    transform: [{ translateX: 0.3 }]
  }
};
