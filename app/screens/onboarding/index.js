import React, { useState, useRef } from "react";
import { FlatList, StyleSheet, View, Animated } from "react-native";
import colors from "../../assets/theme/colors";

// app components
import ActionButton from "./components/ActionButton";
import Indicators from "./components/Indicators";
import Slide from "./components/Slide";

// utils
import { ONBOARDING_MESSAGES } from "./utils";

export default function Onboarding(props) {
  const { navigation } = props;
  const [slide, setSlide] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const viewableItemsChanged = useRef(props => {
    setSlide(props.viewableItems[0].index);
  }).current;
  const flatlist = useRef(null);

  // functions
  const goForward = () => {
    if (slide < ONBOARDING_MESSAGES.length - 1) {
      setSlide(current => current + 1);
      flatlist.current.scrollToIndex({ index: slide + 1 });
    } else {
      navigation.navigate("auth");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.flatlist}>
        <FlatList
          data={ONBOARDING_MESSAGES}
          renderItem={({ item }) => <Slide message={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          ref={flatlist}
        />
      </View>
      <View style={styles.actions}>
        <Indicators slides={ONBOARDING_MESSAGES} scrollX={scrollX} />
        <ActionButton
          onPress={goForward}
          lastSlideActive={slide === ONBOARDING_MESSAGES.length - 1}
          scrollX={scrollX}
          lastIndex={ONBOARDING_MESSAGES.length -1}
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
  flatlist: {
    flex: 5
  },
  actions: {
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    flex: 1
  }
});
