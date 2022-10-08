import { StyleSheet, View } from "react-native";
import React from "react";
import Indicator from "./Indicator";

export default function Indicators(props) {
  const { current, totalSlides } = props;
  return (
    <View style={styles.indicators}>
      {Array(totalSlides)
        .fill(null)
        .map((_, index) => {
          return <Indicator active={index === current} key={index} />;
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  indicators: {
    flexDirection: "row"
  }
});
