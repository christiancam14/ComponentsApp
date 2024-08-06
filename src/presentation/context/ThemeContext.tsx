import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {
  colors,
  darkColors,
  lightColors,
  ThemeColors,
} from '../../config/theme/theme';
import {Appearance, AppState, useColorScheme} from 'react-native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;

  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  // const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  const isDark = currentTheme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  /*
  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);
  */

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      const colorScheme = Appearance.getColorScheme();

      setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          colors: colors,
          isDark: isDark,
          setTheme: setTheme,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
