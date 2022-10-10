import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import colors from "../../../assets/theme/colors";
import AppText from "../../../components/AppText";

export default function ActionButton(props) {
  const { lastSlideActive, onPress, scrollX, lastIndex } = props;
  const { width } = useWindowDimensions();
  const inputRange = [(lastIndex - 1) * width, lastIndex * width];
  const btnWidth = scrollX.interpolate({
    inputRange,
    outputRange: [60, 170],
    extrapolate: "clamp"
  });
  const btnMargin = scrollX.interpolate({
    inputRange,
    outputRange: [6, 0],
    extrapolate: "clamp"
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.actionBtn}>
        <Animated.View
          style={[styles.chevBtn, { width: btnWidth, margin: btnMargin }]}
        >
          {lastSlideActive ? (
            <AppText
              style={styles.finishBtn}
              numberOfLines={1}
              ellipsizeMode="clip"
            >
              Get started
            </AppText>
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
    fontSize: 20,
    whitespace: "nowrap"
  },
  chevBtn: {
    height: 60,
    backgroundColor: colors.primary.main,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  chev: {
    color: colors.white[80]
  }
});
