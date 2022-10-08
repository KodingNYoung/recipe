import { Animated, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "../../../assets/theme/colors";
import AppText from "../../../components/AppText";

export default function ActionButton(props) {
  const { lastSlideActive, onPress } = props;

  const btnWidth = useRef(new Animated.Value(60)).current
  const btnMargin = btnWidth.interpolate({
    inputRange: [60, 170],
    outputRange: [6, 0]
  })

  useEffect(() => {
    if (lastSlideActive) {
      Animated.timing(btnWidth, {
        toValue: 170,
        duration: 500,
        useNativeDriver: false
      }).start();
    } 
  }, [lastSlideActive])
 
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.actionBtn}>
        <Animated.View style={[styles.chevBtn, {width: btnWidth, margin: btnMargin }]}>
          {lastSlideActive ? (
            <AppText style={styles.finishBtn}>Get started</AppText>
          ) : (
            <Entypo
              name="chevron-thin-right"
              size={24}
              color="black"
              style={styles.chev}
            />
          )}
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  actionBtn: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: colors.primary.main,
    borderRadius: 60,
    overflow: "hidden"
  },
  finishBtn: {
    color: colors.white.main,
    fontSize: 20
  },
  chevBtn: {
    height: 60,
    backgroundColor: colors.primary.main,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chev: {
    color: colors.white[80]
  }
});
