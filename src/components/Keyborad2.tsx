import React, { useRef} from "react";
import { Dimensions, StyleSheet, Text, View, Animated, PanResponder } from "react-native";

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH} = Dimensions.get("window");

export default function BottomSheet() {

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ]
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    }),
    
  ).current;

  
  return (
      <Animated.View 
        style={{
          transform: [{translateX: pan.x}],
          backgroundColor: "#b05d04",
          borderRadius: 5,
          height: SCREEN_HEIGHT,
          width: SCREEN_WIDTH,
          position: "absolute",
          left: SCREEN_WIDTH / 1.00,
        }}
        {...panResponder.panHandlers}
      >
        
      </Animated.View>
  );
}

