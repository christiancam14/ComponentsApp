import {Text, TextInput, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Card} from '../../components/ui/Card';
import {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <ScrollView>
      <CustomView margin>
        <Title text="Text Inputs" />

        <Card>
          <TextInput
            style={globalStyles.input}
            placeholder="Nombre completo"
            autoCapitalize={'words'}
            autoCorrect={false}
            onChangeText={value => setForm({...form, name: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Correo electrónico"
            autoCapitalize={'none'}
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={value => setForm({...form, name: value})}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Teléfono"
            keyboardType="phone-pad"
            onChangeText={value => setForm({...form, name: value})}
          />
        </Card>

        <View style={{height: 20}} />

        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
      </CustomView>
      <View style={{height: 20}} />
    </ScrollView>
  );
};
