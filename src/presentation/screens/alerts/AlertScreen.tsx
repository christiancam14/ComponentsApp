import {Alert, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import prompt from 'react-native-prompt-android';
import {showPrompt} from '../../../config/adapters/prompt.adapter';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const AlertScreen = () => {
  const {isDark} = useContext(ThemeContext);

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light',
      },
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {
        userInterfaceStyle: isDark ? 'dark' : 'light',
      },
    );

  const onShowPrompt = () => {
    showPrompt({
      title: 'Lorem Impsum',
      subTitle:
        'Incididunt minim non ex eu reprehenderit ipsum magna labore sunt consectetur ad esse incididunt labore.',
      buttons: [
        {
          text: 'Ok',
          onPress: () => console.log('ok'),
        },
      ],
      placeholder: 'Placeholder',
    });

    // ! Codigo nativo
    /*
    Alert.prompt(
      'Correo el electrónico',
      'Enim commodo  ut amet esse aligua',
      (valor: string) => console.log({valor}),
      'secure-text',
      'Soy el valor por defecto',
      'number-pad',
    );
    */
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />

      <Button text={'Alerta - 2 Botones'} onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text={'Alerta - 3 Botones'} onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text={'Alerta - Input'} onPress={onShowPrompt} />
    </CustomView>
  );
};
