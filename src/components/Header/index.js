import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Image, TouchableWithoutFeedback, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import styles from '../../styles';

export default function Header() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.styleHeaderContainerSafeAreaView}>
      <View style={{ ...styles.styleHeaderContainerView }}>
        <TouchableWithoutFeedback style={styles.styleHeaderButtonMenu}>
          <Feather
            name="menu"
            color={colors.primary}
            size={35}
            onPress={() => { navigation.toggleDrawer() }}
          />
        </TouchableWithoutFeedback>
        {/* <Image
          source={require('../../assets/Logo.png')}
          style={styles.styleHeaderIconLogo}
        /> */}
        <Text style={styles.styleHeaderTextLogo}>
          APP - SYSTEM
        </Text>
      </View>
    </SafeAreaView>
  );
}