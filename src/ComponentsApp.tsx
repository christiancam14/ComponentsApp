import 'react-native-gesture-handler';

import {Text, View} from 'react-native';
import {AirplaneIcon} from './presentation/screens/icons/Icons';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './presentation/navigator/Navigator';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};
