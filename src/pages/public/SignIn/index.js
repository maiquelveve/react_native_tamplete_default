import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../../../components/Layout';


export default function SignIn() {
  const navitagion = useNavigation();

  return (
    <Layout>
      <View>
        <Text style={{ color: 'red' }}>SIGNIN - LOGIN</Text>
        <Button
          title='CADASTRAR'
          onPress={() => navitagion.navigate('SignUp')}
        />
      </View>
    </Layout>
  );
}