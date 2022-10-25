import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes';
import theme from './src/theme';

console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor={theme.colors.background} barStyle='light-content' />
        <Routes />
      </PaperProvider>
    </NavigationContainer>
  );
}
