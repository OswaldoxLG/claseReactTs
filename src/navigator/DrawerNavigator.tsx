import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import { StackNavigator } from "./StackNavigator";
import { PokemonNavigator } from "./PokemonNavigator";
import { TareaNavigator } from "./TareaNavigator";
import { UserNavigator } from "./UserNavigator";
import { SettingsScreen } from "../screens/SettingsScreen";
import { DrawerMenu } from "../components/DrawerMenu";
import { FormScreen } from "../screens/FormScreen";
import { ImagePickerScreen } from "../screens/ImagePickerScreen";

export type RootDrawerParams = {
  StackNavigator:   undefined;
  PokemonNavigator: undefined;
  TareaNavigator:   undefined;
  SettingsScreen:   undefined;
  FormScreen:       undefined;
  ImagePickerScreen:  undefined;
  UserNavigator:    undefined;
}

const Drawer = createDrawerNavigator<RootDrawerParams>();

const Navigator = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      initialRouteName="StackNavigator"
      screenOptions={{
        headerShown: false, //Desaparece el icono, se muestra deslizandolo
        drawerType: width >= 768 ? 'permanent' : 'front', 
        drawerPosition: "right",
        overlayColor: "transparent",
        drawerStyle: {
          backgroundColor: 'rgba(200, 200, 200, 0.99)',
          width: width * 0.7,
        }
      }}
      drawerContent={ (props) => <DrawerMenu {...props}/> }
    >
      <Drawer.Screen
        name= "StackNavigator"
        options={{ title: "Home" }}
        component={ StackNavigator }
      />

      <Drawer.Screen
        name= "PokemonNavigator"
        options={{ title: "Pokedex" }}
        component={ PokemonNavigator }
      />

      <Drawer.Screen
        name= "SettingsScreen"
        options={{ title: "Configuraciones" }}
        component={ SettingsScreen }
      />

      <Drawer.Screen
        name= "FormScreen"
        options={{ title: "Formulario" }}
        component={ FormScreen }
      />

      <Drawer.Screen
        name= "TareaNavigator"
        options={{ title: "TareaNavigator" }}
        component={ TareaNavigator }
      />

      <Drawer.Screen
        name= "ImagePickerScreen"
        component={ ImagePickerScreen }
      />

      <Drawer.Screen
      name= "UserNavigator"
        component={ UserNavigator }
      />

    </Drawer.Navigator>
  );
}

export const DrawerNavigator = () => {
  return(
    <Navigator/>
  )
}