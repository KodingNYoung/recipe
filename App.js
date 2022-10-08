import { useCallback, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Onboarding from "./app/screens/onboarding";
import Auth from "./app/screens/auth";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "inter-bold": require("./app/assets/fonts/Inter-Bold.otf"),
    "inter-medium": require("./app/assets/fonts/Inter-Medium.otf"),
    "inter-regular": require("./app/assets/fonts/Inter-Regular.otf"),
    "inter-light": require("./app/assets/fonts/Inter-Light.otf")
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      console.log("Fonts loaded");
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return !fontsLoaded ? (
    <Text>No fonts</Text>
  ) : (
    <NavigationContainer onReady={onLayoutRootView}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="onboarding" component={Onboarding} />
        <Screen name="auth" component={Auth} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
