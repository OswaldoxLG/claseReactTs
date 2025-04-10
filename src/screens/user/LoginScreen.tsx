import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useLogin } from "../../hooks/useLogin";
import { appTheme } from "../../themes/appTheme";

export const LoginScreen = () => {

  const {
    loading,
    state,
    handleInputChange,
    handleLogin,
    request
  } = useLogin();
  
  return (
    <View
      style={{
        ...appTheme.globalMarging,
        ...appTheme.globalContainer
      }}
    >
      <View style={{ alignItems: "center" }}>
      {
        (request === false) && 
        <Text
          style={{ fontSize: 30, color: 'pink', fontWeight: 'bold'}}
        >
          { 'Contraseña fue incorrecta \n' }
          { 'Envío de datos faltantes' }
        </Text>
      }
      <TextInput
        style={ appTheme.input }
        value={ state.email }
        onChangeText={ (text) => handleInputChange('email', text) }
        placeholder="E-mail"
        keyboardType="email-address"
        editable={ loading }
      />
      <TextInput
        style={ appTheme.input }
        value={ state.password }
        secureTextEntry={ true }
        onChangeText={ (text) => handleInputChange('password', text) }
        placeholder="Password"
        editable={ loading }
      />
      <TouchableOpacity
        onPress={ handleLogin } 
        disabled={ !loading }
      >
        <View
          style={{ 
            backgroundColor: "purple",
            height: 50,
            width: 100,
            justifyContent: "center",
            borderRadius: 20
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: "white",
              alignSelf: "center"
            }}
          >
            Login
          </Text>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}