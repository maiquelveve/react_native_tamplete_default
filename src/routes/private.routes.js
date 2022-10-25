import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';

import CustomDrawer from '../components/CustomDrawer';

import Home from '../pages/private/Home';
import Profile from '../pages/private/Profile';

const PrivateDrawer = createDrawerNavigator();

function AppRoutes() {
  const { colors } = useTheme();

  return (
    <PrivateDrawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colors.drawerBackground
        },
        drawerActiveTintColor: colors.black,
        drawerActiveBackgroundColor: colors.primary,
        drawerInactiveBackgroundColor: colors.black,
        drawerInactiveTintColor: colors.inactiveTint,
        drawerItemStyle: {
          marginVertical: 5,
        }
      }}
    >
      <PrivateDrawer.Screen name='Home' component={Home} />
      <PrivateDrawer.Screen name='Perfil' component={Profile} />
    </PrivateDrawer.Navigator>
  )
}

export default AppRoutes;
