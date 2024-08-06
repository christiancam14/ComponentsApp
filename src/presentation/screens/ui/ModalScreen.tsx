import {Modal, Platform, Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <Button text="Abrir Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <CustomView style={{flex: 1}}>
          <View style={{paddingHorizontal: 10}}>
            <Title text="Modal Content" safe />
          </View>
          <View style={{flex: 1}} />
          <Button
            text="Cerrar modal"
            onPress={() => setIsVisible(false)}
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
              borderRadius: 0,
            }}
          />
        </CustomView>
      </Modal>
    </CustomView>
  );
};
