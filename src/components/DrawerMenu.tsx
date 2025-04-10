import React, { useContext} from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from "../context/AuthContext";
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer' 
import { appTheme } from "../themes/appTheme";
import { BtnTouch } from "./BtnTouch";

export const DrawerMenu = ( { navigation } : DrawerContentComponentProps ) => {
  
  const { authState, logout } = useContext(AuthContext);

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
          ? { uri: `data:image/jpeg;base64,${authState.favoriteImage}`}
          : require( assets + 'avatar1.png' )
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
          <BtnTouch
            title="Cerar Sesión"
            onPress={ () => logout() }
            background="gray"
          />
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

          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("CharScreen")}
          >
            <Text style={ appTheme.texBtn }>
              Gráficos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("SensorDataScreen")}
          >
            <Text style={ appTheme.texBtn }>
              Sensor Data
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ appTheme.menuBtn}
            onPress={ () => navigation.navigate("TopTabNavigator")}
          >
            <Text style={ appTheme.texBtn }>
              Tabs
            </Text>
          </TouchableOpacity>
          
        </View>
      </DrawerContentScrollView>
    
  );
}