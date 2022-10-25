import { View, Text, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';

import styles from '../../styles';

export default function CustomDrawer(props) {
  const { colors } = useTheme();

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.stylesCustomDrawerContainerView}>
        <Image
          source={require('../../assets/Logo.png')}
          style={styles.stylesCustomDrawerImageLogo}
          resizeMode="contain"
        />
        <Text style={styles.stylesCustomDrawerTextWellcome} >
          Bem vindo!
        </Text>
        <Text style={styles.stylesCustomDrawerTextUserName} >
          MAIQUEL
        </Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        {...props}
        label="Sair do APP"
        activeTintColor={colors.white}
        inactiveBackgroundColor={colors.drawerInactiveBackground}
        inactiveTintColor={colors.inactiveTint}
        labelStyle={styles.stylesCustomDrawerLabelStyleDrawerItem}
        onPress={() => { }}

      />
    </DrawerContentScrollView>
  );
}