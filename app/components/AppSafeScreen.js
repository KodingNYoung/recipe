import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const AppSafeScreen = props => {
  const { children, style } = props;
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  }
});
export default AppSafeScreen;