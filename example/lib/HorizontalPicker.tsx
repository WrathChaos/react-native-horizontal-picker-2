import React, { useState } from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

import Item, { ITEM_WIDTH } from "./Item";

export interface HorizontalPickerProps {
  data: any[];
  style?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
  onChange: (item: any, index: number) => void;
}

const HorizontalPicker: React.FC<HorizontalPickerProps> = ({
  data,
  style,
  onChange,
}) => {
  const snapPoints = data.map((_, i) => (-i + 1) * ITEM_WIDTH);
  const [dataSelection, setDataSelection] = useState({
    previous: data[0]!,
    current: data[0]!,
    position: { x: 0, y: 0 },
  });
  const translateX = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = translateX.value;
    },
    onActive: ({ translationX }, { x }) => {
      translateX.value = x + translationX;
    },
    onEnd: ({ velocityX }) => {
      const dest = snapPoint(translateX.value, velocityX, snapPoints);

      const selectedIndex = snapPoints.findIndex((item) => item === dest);
      const selectedVal = data[selectedIndex];

      translateX.value = withSpring(dest);
      runOnJS(onChange)(selectedVal, selectedIndex);
    },
  });

  const handlePress = (
    position: { x: number; y: number },
    item: any,
    index: number,
  ) => {
    translateX.value = withSpring((-index + 1) * ITEM_WIDTH);
    setDataSelection({
      position,
      previous: dataSelection.current,
      current: item,
    });
    onChange?.(item, index);
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={[styles.container, style]}>
        <View style={styles.placeholder} />
        {data.map((item, index) => (
          <Item
            data={item}
            key={index}
            index={index}
            translateX={translateX}
            onPress={(position: { x: number; y: number }) =>
              handlePress(position, item, index)
            }
          />
        ))}
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  placeholder: {
    width: ITEM_WIDTH,
  },
});

export default HorizontalPicker;
