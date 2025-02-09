import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackPokemonParams } from "../../navigator/PokemonNavigator";
import { UseTypeColorPokemon } from "../../hooks/useTypeColorPokemon";
import { StackScreenProps } from "@react-navigation/stack";
import { PokemonDetail } from "../../components/PokemonDetail";
import { usePokemon } from "../../hooks/usePokemon";
import { AuthContext } from "../../context/AuthContext";

interface Props extends StackScreenProps<RootStackPokemonParams, "PokemonScreen"> {}

export const PokemonScreen = ( { navigation, route }: Props ) => {
  
  const { authState} = useContext(AuthContext);

  const { NewPokemonList } = route.params;
  const { id, name, picture } = NewPokemonList;
  const { color, isLoading } = UseTypeColorPokemon( `${ id }` );
  const { pokemon, isLoadingPokemon } = usePokemon( `${ id }` );

  return (
    <View
      style={{ flex:1 }}
    >
        <View
          style = {{
            ...styles.leftContainer,
            backgroundColor: (isLoading) 
              ? 'gray'
              : ( color.length > 1 ) ? color[1] : color[0]
          }}
        />
        <View
          style = {{
            ...styles.rightContainer,
            backgroundColor: (isLoading) 
              ? 'gray'
              : color[0]
          }}
        />

        <View
          style={ styles.headerContainer}
        >
          <TouchableOpacity
            style={ styles.backBtn }
            onPress={ () => navigation.goBack() }
          >
            <View>
              <Text
                style={ styles.row }
              >
                { "<-" }
              </Text>
              <Text
                style={ styles.pokemonName }
              >
                { name } { "\n#"+id}
                { authState.username }
              </Text>
            </View>
          </TouchableOpacity>

          <Image
            source={ require("./../../../assets/pokeball.png")}
            style={styles.pokeball}
          />

        <Image
            source={{ uri:picture }}
            style={styles.pokemonImage}
          />
        </View>
        <Image
          source={{ uri: NewPokemonList.picture }}
        />
          {/* PokemonDetail */}
        {
          isLoadingPokemon
          ? 
          (
            <View>
            <ActivityIndicator
              color={ "black" }
              size={ 60 }
              style={{ height:100 }}
            />
            </View>
          )
          : <PokemonDetail pokemon={ pokemon }/>
        }
    </View>
  
  );
}

const styles = StyleSheet.create({
  leftContainer: {
    position: "absolute",
    left: 0,
    height: 370,
    width: "50%",
    backgroundColor: "gray",
    borderBottomLeftRadius: 1000,
    borderTopLeftRadius: 1000,
  },
  rightContainer:{
    position: "absolute",
    right: 0,
    height: 370,
    width: "50%",
    backgroundColor: "pink",
    borderBottomRightRadius: 1000,
    borderTopRightRadius: 1000 
  },
  headerContainer: {
    alignItems: "center",
    height: 370,
    zIndex: 999,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backBtn:{
    position: "absolute",
    left: -10,
    top: -30
  },
  row:{
    color: "black",
    fontSize: 60,
    top: 20
  },
  pokemonName: {
    alignSelf: "flex-start",
    color:"black",
    fontSize: 15,
    fontWeight:"black",
    left: 15,
    marginTop: 30,
  },
  pokeball:{
    height: 300,
    width: 300,
    opacity: 0.7,
    position: "absolute",
    top: 30,
  },
  pokemonImage: {
    top: 60,
    height: 240,
    position: "absolute",
    width: 240,
  }
});
