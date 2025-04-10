import React, { useEffect} from "react";
import { View, Text, TextInput, Image, SafeAreaView, Alert, ScrollView } from 'react-native';
import { RootStackUserParams } from "../../navigator/UserNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { useFormUser } from "../../hooks/useFormUser";
import { BtnTouch } from "../../components/BtnTouch";
import { appTheme } from "../../themes/appTheme";

interface Props extends StackScreenProps<RootStackUserParams, 'FormUserScreen'> {}

  export const FormUserScreen = ( { navigation, route } : Props) => {

    const {
      state, 
      handleSubmit,
      handleInputChange,
      handleDelete
    } = useFormUser();
    
    useEffect(() => {
      //si existe un usuario en la ruta, se cargan los datos en el formulario
      const usuario = route.params?.user;
      if( usuario ){
        handleInputChange('id_user', usuario.id_user);
        handleInputChange('email', usuario.email);
        handleInputChange('username', usuario.username);
        handleInputChange('password', usuario.password);
        handleInputChange('image', usuario.image);
      }
      ( async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if( status !== 'granted'){
          Alert.alert(
            "Permiso requerido",
            "Debes otorgar el permiso para acceder a la galería",
          );
        }
      })();

    },[]);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [4,3],
          quality: 0.5,
          //allowsMultipleSelection: true
        });
        ( !result.canceled ) && ( () => {
          convertImageToBase64( result.assets[0].uri );
        })();
      }

      const convertImageToBase64 = async ( imageUri : string ) => {
        try{
          const base64 = await FileSystem.readAsStringAsync(imageUri, { encoding: FileSystem.EncodingType.Base64 
          });
          handleInputChange( 'image', base64 );
        }catch (error){
          console.log(error);
        }
      }

    return (
      <SafeAreaView 
        style={{ flex: 1 }}
      >
        <ScrollView>
          <View
            style={{
              ...appTheme.globalContainer,
              ...appTheme.globalMarging
            }}
          >
            {
              ( state.id_user !== '' ) && (
                <BtnTouch
                  title="Eliminar"
                  onPress={ () => {
                    handleDelete();
                    navigation.popToTop();
                  }}
                  background="#dc3545"
                />
              )
            }
          </View>
          <View
            style={{ alignItems: 'center' }}
          >
            {/*Formulario*/}
            <TextInput
              style={appTheme.input}
              value={state.email}
              textContentType="emailAddress"
              onChangeText= { ( text ) => handleInputChange('email', text) }
              placeholder="Email"
            />
            <TextInput
              style={appTheme.input}
              value={state.username}
              onChangeText= { ( text ) => handleInputChange('username', text) }
              placeholder="Username"
            />
            <TextInput
              style={appTheme.input}
              value={ state.password }
              textContentType="password"
              secureTextEntry={ true }
              onChangeText= { ( text ) => handleInputChange('password', text) }
              placeholder="Password"
            />
            <BtnTouch
              title="Seleccionar imagen"
              onPress={ pickImage }
              background="#007bff"
            />
            {
              (state.image !== '') && (
                <Image
                  source={{ uri: `data:image/jpeg;base64,${state.image}` }}
                  style={{ width: 200, height: 200, borderRadius: 20 }}
                />
              )
            }
            <BtnTouch
              title={ ( state.id_user !== '' ) ? "Actualizar registro" : "Crear registro" }
              onPress={ () => {
                handleSubmit();
                navigation.popToTop();
              }}
              background="violet"
            />
            <BtnTouch
              title="Regresar"
              onPress={ () => navigation.popToTop() }
              background="violet"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }