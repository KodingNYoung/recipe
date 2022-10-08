import { Image, StyleSheet, View } from "react-native";
import React from "react";

import AppText from "../../../components/AppText";

// assets
import colors from "../../../assets/theme/colors";

export default function Slide(props) {
  const { message } = props;
  return (
    <View style={styles.slide}>
      <Image source={message.src} style={styles.image} />
      <View style={styles.textContent}>
        <AppText style={styles.subtitle}>{message?.subtitle}</AppText>
        <AppText style={styles.desc}>
          {message?.description}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    height: "85%"
  },
  image: {
    minWidth: "100%",
    resizeMode: "cover",
    height: "65%"
  },
  textContent: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    height: "35%",
    justifyContent: "center"
  },
  subtitle: {
    color: colors.gray[400],
    textTransform: "uppercase",
    fontSize: 18
  },
  desc: {
    fontSize: 30,
    color: colors.gray.main,
    lineHeight: 50,
    width: "90%",
    marginTop: 15
  }
});
