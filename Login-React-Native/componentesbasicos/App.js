import {
  Text,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import mascara from './components/estilo.js';
import loginImage from './img/logo1.png';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const handleLogin = () => {
    console.log('Botão de entrar pressionado');
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={mascara.container}>
      <Text style={mascara.titulo}>Login dos Desenvolvedores!!</Text>
      <Image source={loginImage} style={mascara.img} />
      <TextInput style={mascara.bnt1} placeholder="Digite seu nome" />
      <TextInput
        style={mascara.bnt2}
        placeholder={'Digite sua senha'}
        secureTextEntry={true} // This prop hides the text input
        keyboardType="numeric"
      />
      <TouchableOpacity>
        <Text style={mascara.senha}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={mascara.button} onPress={handleLogin}>
        <View style={mascara.buttonContent}>
          <Text style={mascara.buttonText}>Entrar</Text>
          <MaterialCommunityIcons
            name="check"
            size={20}
            color="#fff"
            style={mascara.checkIcon}
          />
        </View>
      </TouchableOpacity>
      <MaterialCommunityIcons
        name="facebook"
        style={mascara.icon1}
        color="red"
        size={50}
      />
      <MaterialCommunityIcons
        name="instagram"
        style={mascara.icon2}
        color="red"
        size={50}
      />
      <MaterialCommunityIcons
        name="twitter"
        style={mascara.icon3}
        color="red"
        size={50}
      />
    </SafeAreaView>
  );
}

function HomeScreen() {
  return (
    <SafeAreaView style={mascara.container}>
      <Text style={mascara.titulo}>Bem-vindo à página inicial!</Text>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
