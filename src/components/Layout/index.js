import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../../styles';
import Header from '../Header';

export default function Layout({ children }) {

  const isLogged = false; // BUSCAR DEPOIS DO CONTEXT 

  return (
    <SafeAreaView style={styles.stylesLayoutSafeAreaView}>
      {isLogged &&
        <Header />
      }
      <View style={styles.stylesLayoutContainerView}>
        {children}
      </View>
    </SafeAreaView>
  );
}