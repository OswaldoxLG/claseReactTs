import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { TareasResponse } from "../interfaces/tareasInterfaces";

interface Props {
  tarea: TareasResponse;
}

export const TareaCard = ( { tarea }:Props) => {

  const { width } = Dimensions.get("window");

  const status = ( tarea : TareasResponse) => {
    switch(tarea.estado){
      case "En proceso":
        return 'gray';
      case "Completado":
        return 'green';
      case "Pendiente":
        return "brown";
      default:
        return 'white';
    }
  }
  return (
    <TouchableOpacity
      key={ `${tarea._id}${tarea.__v}` }
      activeOpacity={ 0.9 }
    >
      <View
        style={{
          ...styles.cardContainer,
          backgroundColor: status(tarea),
          width: width * 0.4
        }}
      >
        <Text
          style={ styles.title }
        >
          { `Titulo: \n ${tarea.titulo}` }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer:{
    marginHorizontal: 10,
    height: 120,
    width: 120,
    marginBottom: 25,
    borderRadius: 20, 
    overflow: "hidden"
  },
  title:{
    marginHorizontal: 15, 
    color: "white",
    fontSize: 15, 
    fontWeight: "bold"
  }
})