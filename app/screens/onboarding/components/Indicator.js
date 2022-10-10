import React from "react";
import { Animated, StyleSheet, View, useWindowDimensions } from "react-native";

import colors from "../../../assets/theme/colors";

export default function Indicator(props) {
  const { scrollX, idx } = props;

  // hooks
  const { width } = useWindowDimensions();

  const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: [10, 24, 10],
    extrapolate: "clamp"
  });
  const bg = scrollX.interpolate({
    inputRange,
    outputRange: [colors.gray[100], colors.primary.main, colors.gray[100]],
    extrapolate: "clamp"
    
  });

  return (
    <Animated.View
      style={[
        styles.indicator,
        {
          backgroundColor: bg,
          width: indicatorWidth
        }
      ]}
    ></Animated.View>
  );
}

const styles = StyleSheet.create({
  indicator: {
    height: 10,
    borderRadius: 5,
    margin: 2
  }
});
