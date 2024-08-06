import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {useRef} from 'react';

export const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.purpleBox, pan.getLayout()]}
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
