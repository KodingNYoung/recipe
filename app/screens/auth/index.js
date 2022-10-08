import { StyleSheet, View } from "react-native";
import React from "react";
import AppText from "../../components/AppText";
import AppSafeScreen from "../../components/AppSafeScreen";
import AppLogo from "../../components/AppLogo";




export default function Auth() {
  return (
    <AppSafeScreen style={styles.content}>
      <AppLogo />
      <AppText>Auth</AppText>
    </AppSafeScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
