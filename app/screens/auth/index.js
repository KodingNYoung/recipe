import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../../components/AppText";
import AppSafeScreen from "../../components/AppSafeScreen";
import AppLogo from "../../components/AppLogo";
import colors from "../../assets/theme/colors";

export default function Auth() {
  return (
    <AppSafeScreen style={styles.content}>
      <View>
        <AppLogo />
      </View>
      <AppText style={styles.headerText}>
        <>
          Join us and cook like a{" "}
          <AppText style={[styles.headerText, { color: colors.primary.main }]}>
            professional
          </AppText>
        </>
      </AppText>
    </AppSafeScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 45,
    textAlign: "center",
    width: "80%",
    marginVertical: 30,
    fontFamily: "inter-semibold"
  }
});
