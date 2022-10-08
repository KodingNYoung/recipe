import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

import colors from "../../../assets/theme/colors";

export default function Indicator(props) {
  const { active } = props;
  // hooks
  const widthAnim = useRef(new Animated.Value(10)).current;
  
  const bgInterpolation = widthAnim.interpolate({
    inputRange: [10,24],
    outputRange: [colors.gray[50], colors.primary.main]
  })
  
  useEffect(() => {
    if (active) {
      Animated.timing(widthAnim, {
        toValue: 24,
        duration: 500,
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(widthAnim, {
        toValue: 10,
        duration: 500,
        useNativeDriver: false
      }).start();
    }
  }, [active]);

  return (
    <Animated.View
      style={[
        styles.indicator,
        {
          backgroundColor: bgInterpolation,
          width: widthAnim
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
