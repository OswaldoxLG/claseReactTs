import React, { ReactNode } from "react";
//import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
//import { PokemonNavigator } from "./src/navigator/PokemonNavigator";
//import { UseEffectScreen } from "./src/screens/UseEffectScreen"; 
//import { FormScreen } from "./src/screens/FormScreen";
//import { StackNavigator } from "./src/navigator/StackNavigator";
//import { PokemonHomeScreen } from "./src/screens/pokeapi/PokemonHomeScreen";
import { DrawerNavigator } from "./src/navigator/DrawerNavigator";
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {
  return(
    <NavigationContainer>
      <AppState>
        <DrawerNavigator/>
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ( { children } : { children:ReactNode} ) => {
  return (
    <AuthProvider>
        { children }
    </AuthProvider>
  );
}

export default App;


