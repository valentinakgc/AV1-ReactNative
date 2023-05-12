import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, TextInput, Text, TouchableOpacity } from 'react-native';

export default function EntrarCadastrarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text1}>Entrar</Text>

      <TextInput
          style={styles.input}
          placeholder="Email ou número de telefone"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />

<TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Entrar", { language: "french" })} >
        <Text style={styles.text2}>Entrar</Text>
      </TouchableOpacity>

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
  tittle: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#4f58c4"
  },
  input: {
    height: 40,
    margin: 12,
    marginLeft: 30,
    padding: 10,
    borderRadius: 4,
    width: '80%',
    backgroundColor: '#383838',
    color: '#7A7A7A',
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    padding: 30,
  },
  button: {
    backgroundColor: '#b50b17',
    padding: 8,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
  },
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});