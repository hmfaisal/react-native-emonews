import {
  colorBlack,
  colorGreyLight,
  colorPrimary,
  colorSilver,
  colorBlue,
  colorRed
} from "../../../assets/base";

export const styles = {
  container: {
    backgroundColor: colorGreyLight,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: colorSilver,
    padding: 20
  },
  title: {
    color: colorBlack,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom:10
  },
  description: {
    color: colorBlack,
    fontSize: 16,
    marginBottom:10
  },
  author: {
    color: colorPrimary
  },
  publishedAt: {
    color: colorBlack
  },
  name: {
    color: colorBlack,
    marginRight: "auto",
    fontStyle: "italic"
  },
  image:{
    height:200,
    marginBottom:10
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginLeft: 10
  },
  mainColors: {
    color: colorBlue
  },
  banedColors: {
    color: colorRed
  }
};
