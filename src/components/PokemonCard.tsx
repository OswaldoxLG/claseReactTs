import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { NewPokemonList } from "../interfaces/pokemonInterfaces";
import { UseTypeColorPokemon } from "../hooks/useTypeColorPokemon";
import { useNavigation } from '@react-navigation/native';

interface Props {
  pokemon: NewPokemonList;
}

const widthWindows = Dimensions.get('window').width;

export const PokemonCard = ( { pokemon }: Props) => {

  const navigation = useNavigation();
  const { color, isLoading } = UseTypeColorPokemon( `${pokemon.id}`);  

  return (
    <TouchableOpacity
      activeOpacity={ 0.9 }
      onPress={() => navigation.navigate("PokemonScreen", { NewPokemonList: pokemon })}
    >
      <View
        style={{
          ...styles.containerCard,
          width: widthWindows * 0.4,
        }}
      >

        <View
          style={{ 
            ...styles.backgroundTop,
            backgroundColor: (isLoading) ? 'gray' : (color.length > 1) ? color[1] : color[0],
          }}
        />

        <View
        style={{
          ...styles.backgroundBottom,
          backgroundColor: (isLoading) ? 'gray' : color[0],
        }}  
        />

        <View
          style={{ marginHorizontal:5 }}
        >
            <Text
              style= {styles.name}
            >
              { `${pokemon.name}` }
              { `\n#${pokemon.id}`}
            </Text>
        </View>

          {/* Background pokeball */}
        <Image
          style= { styles.pokeball}
          source={ require("./../../assets/pokeball.png")}
        />

        <Image
          source={{ uri: pokemon.picture }}
          style={ styles.pokemon }
        />

        </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  containerCard:{
    marginHorizontal: 10, 
    width: 180,
    height: 115,
    marginBottom:25, 
    borderRadius: 20, 
    overflow: 'hidden' // ocultar marco
  },
  backgroundTop:{
    position:"absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "50%",
    backgroundColor: "blue",
    transform: [
      { rotateX: "20deg" },
      { rotateY: "-45deg" },
      { scale: 2 }
    ]
  },
  backgroundBottom:{
    position:"absolute",
    top: "50%",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "red",
    transform: [
      { rotateX: "20deg" },
      { rotateY: "-45deg" },
      { scale: 2 }
    ]
  }, 
  pokeball:{
    height: 120, 
    width: 120,
    position: "absolute", //Mantener fijo
    bottom: -20, 
    right: -20,
    opacity: 0.5,
  },
  pokemon: {
    height:90, 
    width: 90, 
    position: "absolute",
    right: -8,
    bottom: -5,
  },
  name:{
    color:"white",
    fontSize: 22,
  }
})

