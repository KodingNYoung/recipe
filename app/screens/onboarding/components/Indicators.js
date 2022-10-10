import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import Indicator from "./Indicator";

export default function Indicators(props) {
  const { slides, scrollX } = props;
  return (
    <View style={styles.indicators}>
      {slides
        .map((_, index) => {
          return <Indicator key={index} scrollX={scrollX} idx={index} />;
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  indicators: {
    flexDirection: "row"
  }
});
