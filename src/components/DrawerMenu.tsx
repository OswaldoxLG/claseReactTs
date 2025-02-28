import React, { useContext} from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from "../context/AuthContext";
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer' 
import { appTheme } from "../themes/appTheme";

export const DrawerMenu = ( { navigation } : DrawerContentComponentProps ) => {
  
  const { authState } = useContext(AuthContext);

  const assets: string = './../../assets/';

  return (
      <DrawerContentScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
        <Image
        style={ appTheme.avatar }
        source=
        {
          ( authState.isLoggenIn )
          ? require( assets + 'avatar1.png' )
          : { uri: 'https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png'}
        }
        />
        <Text
          style={{
            ...appTheme.title,
            marginTop: 10
          }}
        >
          {
            (authState.isLoggenIn) 
            ? authState.UserName
            : 'Iniciar Sesión'
          }
        </Text>
        </View>

        <View
          style={ appTheme.menuContainer }
        >
          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("StackNavigator") }
          >
            <Text style={ appTheme.texBtn }>
              Home
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("SettingsScreen") }
          >
            <Text style={ appTheme.texBtn }>
              Configuraciones
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("PokemonNavigator") }
          >
            <Text style={ appTheme.texBtn }>
              POKEDEX
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("FormScreen")}
          >
            <Text style={ appTheme.texBtn }>
              Formulario
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("TareaNavigator")}
          >
            <Text style={ appTheme.texBtn }>
              CRUD Tareas
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("ImagePickerScreen")}
          >
            <Text style={ appTheme.texBtn }>
              Cargar Imagenes
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("UserNavigator")}
          >
            <Text style={ appTheme.texBtn }>
              CRUD Usuarios
            </Text>
          </TouchableOpacity>
          
        </View>
      </DrawerContentScrollView>
    
  );
}