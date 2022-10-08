import { StyleSheet, Text } from "react-native";
import React from "react";

export default function AppText(props) {
  const {children, style, ...otherProps} = props;
  return <Text style={[styles.text, style]} {...otherProps}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "inter-medium"
  }
});
