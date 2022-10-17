import React from "react";
import { View, Text, Animated } from "react-native";
import HorizontalPicker from "./lib/HorizontalPicker";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App: React.FC = () => {
  const [valueSelection, setValueSelection] = React.useState<number>(2);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1, justifyContent: "center" }}>
        <HorizontalPicker
          style={{ flex: 0, height: 75 }}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          onChange={(val, index) => {
            console.log({ val, index });
            setValueSelection(val);
          }}
        />
        <View
          style={{
            marginTop: 32,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontWeight: "bold" }}
          >{`Selection: ${valueSelection}`}</Text>
        </View>
      </Animated.View>
    </GestureHandlerRootView>
  );
};

export default App;
