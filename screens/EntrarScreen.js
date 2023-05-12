import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function EntrarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}> Quem está assistindo?</Text>

      <Image style={styles.logo} source={require('../assets/usuarioN.png')} />
      <Text style={styles.text2}> Valentina</Text>

      <Image style={styles.logo} source={require('../assets/usuarioN2.png')} />
      <Text style={styles.text3}> Lucas</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    marginTop: -200,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffff',
    textAlign: 'center',
  },
  text2: {
    marginTop: 10,
    fontSize: 16,
    color: '#ffff',
    textAlign: 'center',
  },
  text3: {
    marginTop: 10,
    fontSize: 16,
    color: '#ffff',
    textAlign: 'center',
  },
  logo: {
    height: 120,
    width: 120,
    marginTop: 30,
  }
});