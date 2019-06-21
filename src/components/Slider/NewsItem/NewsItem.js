import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Linking, Animated, StyleSheet,ActivityIndicator } from "react-native";
import PropTypes from "prop-types";
import moment from "moment";
import { Icon, Image } from "react-native-elements";
import { styles as style } from "./styles";

class NewsItem extends Component {
  banItem = () => {
    this.props.banAction(this.props.source.name);
  };

  shouldComponentUpdate(nextProps) {
    if (
      nextProps.ban[this.props.source.name] !==
      this.props.ban[this.props.source.name]
    ) {
      return true;
    }
    return false;
  }

  render() {
    let imgURL=null;
    if (this.props.ban[this.props.source.name]) {
      return null;
    }
    if(this.props.urlToImage && this.props.urlToImage.length>0){
      imgURL=this.props.urlToImage;
    }
    return (
      <Animated.View style={[styles.container, this.props.style]}>
        <Text onPress={() => Linking.openURL(this.props.url)} style={styles.title}>{this.props.title}</Text>
        {/*{imgURL!==null &&
          <Image
              source={{ uri: imgURL }}
              style={[styles.image]}
              PlaceholderContent={<ActivityIndicator />}
          />
        }*/}
        <Text style={styles.description}>{this.props.description}</Text>
        <Text style={styles.author}>{this.props.author}</Text>
        <Text style={styles.publishedAt}>
          {moment.parseZone(this.props.publishedAt).fromNow()}
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text style={styles.name}>{this.props.source.name}</Text>
          <Icon
            containerStyle={[styles.icon]}
            name="external-link"
            type="feather"
            color={styles.mainColors.color}
            onPress={() => Linking.openURL(this.props.url)}
          />
          <Icon
            containerStyle={[styles.icon]}
            name="close"
            color={styles.banedColors.color}
            onPress={this.banItem}
          />
        </View>
      </Animated.View>
    );
  }
}

NewsItem.propTypes = {
  ban: PropTypes.object,
  style: PropTypes.object,
  banAction: PropTypes.func
};

const styles = StyleSheet.create(style);

const mapStateToProps = ({ ban }) => ({
  ban
});

export default connect(mapStateToProps)(NewsItem);
