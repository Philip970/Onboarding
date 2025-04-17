import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import React, { useEffect } from "react";

import { WINDOW_WIDTH } from "../screens/onborading";

export type ItemType = { image: ImageSourcePropType };

type Props = {
  data: ItemType[];
};

const splitIntoThree = (
  arr: ItemType[]
): [ItemType[], ItemType[], ItemType[]] => {
  const length = arr.length;
  const baseSize = Math.floor(length / 3);
  const remainder = length % 3;

  const result: [ItemType[], ItemType[], ItemType[]] = [[], [], []];
  let index = 0;

  for (let i = 0; i < 3; i++) {
    const currentSize = baseSize + (i < remainder ? 1 : 0);
    result[i] = arr.slice(index, index + currentSize);
    index += currentSize;
  }

  return result;
};

const Items = ({ data }: Props) => {
  const translateY = useSharedValue(0);
  const ITEM_HEIGHT = 300;
  const TRANSLATE_HEIGHT = 1400;
  const ANIMATION_DURATION = 10000;
  const ITEM_WIDTH = WINDOW_WIDTH * 0.4;

  const [items1, items2, items3] = splitIntoThree(data);

  const rLeftAndRightListStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: -translateY.value }],
    };
  });

  const rMiddleListStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value - TRANSLATE_HEIGHT }],
    };
  });

  useEffect(() => {
    translateY.value = withTiming(TRANSLATE_HEIGHT, {
      duration: ANIMATION_DURATION,
    });
  }, []);

  const Item = ({ data }: { data: ItemType }) => (
    <Image
      style={[styles.item, { width: ITEM_WIDTH, height: ITEM_HEIGHT }]}
      source={data.image}
    />
  );

  return (
    <View style={styles.container}>
      <Animated.View style={rLeftAndRightListStyle}>
        {items1.map((item, index) => (
          <Item data={item} key={index} />
        ))}
      </Animated.View>
      <Animated.View style={rMiddleListStyle}>
        {items3.map((item, index) => (
          <Item data={item} key={index} />
        ))}
      </Animated.View>
      <Animated.View style={rLeftAndRightListStyle}>
        {items2.map((item, index) => (
          <Item data={item} key={index} />
        ))}
      </Animated.View>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    flexDirection: "row",
    transform: [{ rotate: "-10deg" }, { translateY: -30 }, { translateX: -30 }],
  },
  item: {
    borderRadius: 16,
    marginBottom: 10,
  },
});
