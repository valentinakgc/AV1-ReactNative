import EntrarCadastrarScreen from "./screens/EntrarCadastrarScreen";
import EntrarScreen from "./screens/EntrarScreen";
import CadastrarScreen from "./screens/CadastrarScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="EntrarCadastrar"
          component={EntrarCadastrarScreen}
          options={{title: "Entrar"}}
        />
        <Stack.Screen 
          name="Entrar"
          component={EntrarScreen}
          options={{title: "Contas"}}
        />
        <Stack.Screen 
          name="Cadastrar"
          component={CadastrarScreen}
          options={{title: "Cadastrar-se"}}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}