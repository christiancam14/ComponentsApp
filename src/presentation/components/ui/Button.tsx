import {Pressable, StyleProp, Text, View, ViewStyle} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  text: string;
  styles?: StyleProp<ViewStyle>;

  onPress: () => void;
}

export const Button = ({onPress, text, styles}: Props) => {

  const {colors} = useContext(ThemeContext);

  
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
      ]}>
      <Text
        style={[globalStyles.btnPrimaryText, {color: colors.buttonTextColor}]}>
        {text}
      </Text>
    </Pressable>
  );
};
