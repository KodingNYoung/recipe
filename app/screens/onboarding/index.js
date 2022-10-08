import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../assets/theme/colors";

// app components
import ActionButton from "./components/ActionButton";
import Indicators from "./components/Indicators";
import Slide from "./components/Slide";

// utils
import { ONBOARDING_MESSAGES } from "./utils";

export default function Onboarding(props) {
  const {navigation} = props;
  const [slide, setSlide] = useState(0);

  const goForward = () => {
    if (slide < ONBOARDING_MESSAGES.length -1) {
      setSlide(current => current + 1);
    }else {
      navigation.navigate("auth")
    }
  };

  return (
    <View style={styles.container}>
      <Slide message={ONBOARDING_MESSAGES[slide]} />
      <View style={styles.actions}>
        <Indicators current={slide} totalSlides={ONBOARDING_MESSAGES.length} />
        <ActionButton
          onPress={goForward}
          lastSlideActive={slide === ONBOARDING_MESSAGES.length - 1}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white[80]
  },
  actions: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30
  }
});
