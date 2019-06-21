import React, { PureComponent } from "react";
import { CheckBox } from "react-native-elements";
import PropTypes from "prop-types";
import { colorPrimary, colorGreyLight } from "../../assets/base";

export default class SelectItem extends PureComponent {
  state = {
    checked: false
  };

  componentDidMount() {
    if (this.props.options[this.props.item]) {
      this.setState({ checked: true });
    }
  }

  change = () => {
    const { update, remove, add, item } = this.props;
    const { checked } = this.state;
    update(true);
    checked ? remove(item) : add(item);
    this.setState({ checked: !checked });
  };

  render() {
    const title = this.props.item.substr(0, this.props.item.indexOf('('));
    return (
      <CheckBox
        uncheckedColor={colorGreyLight}
        textStyle={{
          color: colorGreyLight,
          fontSize: 16,
          fontWeight: "normal"
        }}
        checkedColor={colorPrimary}
        title={title}
        checked={this.state.checked}
        onPress={this.change}
        containerStyle={{
          borderRadius: 0,
          backgroundColor: "transparent",
          borderColor: "transparent"
        }}
      />
    );
  }
}

SelectItem.propTypes = {
  update: PropTypes.func,
  add: PropTypes.func,
  remove: PropTypes.func,
  item: PropTypes.string,
  options: PropTypes.object
};
