import React from "react";
import { Text, Dimensions, StyleSheet } from "react-native";
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
export const ITEM_WIDTH = width / 5;

interface ItemProps {
  data: any;
  index: number;
  translateX: Animated.SharedValue<number>;
  onPress: (position: { x: number; y: number }) => void;
}

const Item = ({ data, translateX, index, onPress }: ItemProps) => {
  const inputRange = [
    -ITEM_WIDTH * (index + 1),
    -ITEM_WIDTH * index,
    -ITEM_WIDTH * (index - 1),
  ];

  const onGestureEvent = useAnimatedGestureHandler<
    TapGestureHandlerGestureEvent
  >({
    onActive: ({ absoluteX: x, absoluteY: y }) => {
      runOnJS(onPress)({ x, y });
    },
  });

  const style = useAnimatedStyle(() => {
    const angle = interpolate(
      translateX.value - ITEM_WIDTH,
      inputRange,
      [0, 1, 0],
      Extrapolate.CLAMP,
    );
    const scale = 0.8 + 1.2 * Math.sin(angle);
    const opacity = 0.4 + 0.9 * Math.sin(angle);
    return {
      opacity,
      transform: [{ translateX: translateX.value }, { scale }],
    };
  });

  return (
    <TapGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.container, style]}>
        <Text style={styles.textStyle}>{data}</Text>
      </Animated.View>
    </TapGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 16,
  },
});

export default Item;
