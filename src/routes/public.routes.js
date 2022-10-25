import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from 'react-native-paper'

import SignIn from '../pages/public/SignIn';
import SignUp from '../pages/public/SignUp';

const PublicStack = createStackNavigator();

export default function PublicRoutes() {
  const { colors } = useTheme();
  return (
    <PublicStack.Navigator>
      {/* TELA DE LOGIN SEM O CABEÇARIO */}
      {/* <PublicStack.Screen
        name="SigIn"
        component={SignIn}
        options={{
          headerShown: false
        }}
      /> */}

      {/* TELA DE LOGIN COM O CABEÇARIO */}
      <PublicStack.Screen
        name="SigIn"
        component={SignIn}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
            borderBottomWidth: 1,
            borderBottomColor: colors.primary
          },
          headerTintColor: colors.white,
          headerBackTitleVisible: false,
          headerTitle: 'APP - System',
        }}
      />
      <PublicStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
            borderBottomWidth: 1,
            borderBottomColor: colors.primary
          },
          headerTintColor: colors.white,
          headerBackTitleVisible: false,
          headerTitle: 'Voltar',
        }}
      />
    </PublicStack.Navigator>
  );
}