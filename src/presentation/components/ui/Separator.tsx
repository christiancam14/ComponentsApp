import {StyleProp, Text, View, ViewStyle} from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({style}: Props) => {

  const {colors} = useContext(ThemeContext);
  
  return (
    <View >
      <View
        style={[
          {
            alignSelf: 'center',
            width: '80%',
            height: 1,
            backgroundColor: colors.primary,
            opacity: 0.1,
            marginVertical: 8,
          },
          style,
        ]}
      />
    </View>
  );
};
