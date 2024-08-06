import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {useContext, useRef} from 'react';
import {useAnimation} from '../../hooks/useAnimation';
import {ThemeContext} from '../../context/ThemeContext';
import { CustomView } from '../../components/ui/CustomView';

export const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  const {colors} = useContext(ThemeContext);

  return (
    <CustomView style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {opacity: animatedOpacity, transform: [{translateY: animatedTop}]},
        ]}
      />

      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            duration: 750,
            easing: Easing.elastic(1),
          });
        }}
        style={{marginTop: 10}}>
        <Text style={{color: colors.text}}>FadeIn</Text>
      </Pressable>

      <Pressable onPress={() => fadeOut({})} style={{marginTop: 10}}>
        <Text style={{color: colors.text}}>FadeOut</Text>
      </Pressable>
    </CustomView>
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
