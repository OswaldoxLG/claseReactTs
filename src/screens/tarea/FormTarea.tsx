import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackTareasParams } from "../../navigator/TareaNavigator";
import { useFormTarea } from "../../hooks/useFormTarea";
import { BtnTouch } from "../../components/BtnTouch";
import { appTheme } from "../../themes/appTheme";

//herencia: recibir datos de las tareas
interface Props extends StackScreenProps<RootStackTareasParams, "FormTarea">{}

interface BtnForm{
  titulo: string;
  estado: string;
  action: () => void;
}

const BtnForm = ( { titulo, estado, action }: BtnForm ) => {

  let colorBtn: string = "white";

  switch( estado ){
    case 'En proceso':
      colorBtn = 'gray';
      break;
    case 'Completado':
      colorBtn = 'green';
      break;
    case 'Pendiente':
      colorBtn = 'yellow';
      break;
  }

  return(
    <TouchableOpacity
      onPress={ action }
    >
      <View
        style={{
          backgroundColor: colorBtn,
          borderRadius: 30,
          borderWidth: ( estado === '' ) ? 1 : 0,
          marginHorizontal: 5,
          justifyContent: 'center',
          height: 60,
          width: 90,
        }}
      >
        <Text
          style={{
            color: ( estado === '' ) ? 'black' : 'white',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 17
          }}
        >
          { titulo }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export const FormTarea = ( { navigation, route }: Props ) => {
  
  const  {
    state, 
    handleInputChange, 
    handleSubmit,
    handleDelete
  } = useFormTarea();

  useEffect(() => {
    const tarea = route.params?.tarea;
    if (tarea) {
      handleInputChange('_id', tarea._id);
      handleInputChange('titulo', tarea.titulo);
      handleInputChange('descripcion', tarea.descripcion);
      handleInputChange('estado', tarea.estado);
    }
  },[route.params?.tarea]);

  return (
    <View
      style={{
        ...appTheme.globalContainer,
        ...appTheme.globalMarging
      }}
    >
      {
        ( state._id  ) &&
        <BtnTouch
          title= 'Eliminar Tarea'
          background='red'
          onPress={ () => {
            handleDelete();
            navigation.popToTop();
          }} 
        />
      }
      <Text
        style={ appTheme.title }
      >
        Formulario de Tareas
      </Text>
      <View
        style={{ alignItems: 'center' }}
      >
        {/* Formulario */}
        <TextInput
          style={{
            ...appTheme.input,
            height: "auto"
          }}
          value={ state.titulo }
          onChangeText={ (text) => handleInputChange('titulo', text) }
          placeholder="Titulo de la tarea"
        />
        <TextInput
          style={{
            ...appTheme.input,
            height: "auto"
          }}
          value={ state.descripcion }
          onChangeText={ (text) => handleInputChange('descripcion', text) }
          multiline={true}
          numberOfLines={5}
          placeholder="Descripción de la tarea"
        />
        <View
          style={{ flexDirection:'row', marginTop:5 }}
        >
          <BtnForm
            titulo="Pendiente"
            action={ () => handleInputChange('estado', 'Pendiente')}
            estado={ (state.estado === 'Pendiente') ? state.estado : '' }
          />
          <BtnForm
            titulo="En proceso"
            action={ () => handleInputChange('estado', 'En proceso')}
            estado={ (state.estado === 'En proceso') ? state.estado : '' }
          />
          <BtnForm
            titulo="Completado"
            action={ () => handleInputChange('estado', 'Completado')}
            estado={ (state.estado === 'Completado') ? state.estado : '' }
          />
        </View>
        <BtnTouch
          onPress={ () => {
            handleSubmit();
            navigation.popToTop();
          }}
          title={ ( state._id != '' ) ? 'Actualizar Registro' : 'Crear Registro' }
          background='black'
        />
        <BtnTouch
          onPress={ () => {navigation.popToTop()} }
          title='Regresar'
          background='violet'
        />
      </View>
    </View>
  );
}