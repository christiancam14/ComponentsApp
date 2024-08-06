import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  subTitle?: string;
  buttons: PropmtButton[];
  propmtType?: 'default' | 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PropmtButton {
  text: string;
  onPress: () => void;
  style?: 'default' | 'cancel' | 'destructive';
}

export const showPrompt = ({
  buttons,
  subTitle,
  title,
  propmtType = 'plain-text',
  defaultValue,
  placeholder,
}: Options) => {
  prompt(title, subTitle, buttons, {
    type: propmtType,
    cancelable: false,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
};
