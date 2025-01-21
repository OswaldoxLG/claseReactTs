import React, {useState} from 'react';
import { View, Text, Button, useWindowDimensions, StyleSheet } from 'react-native';

export const DimensionesScreens = () => {

  const  {width, height } = useWindowDimensions();
  
  return(
    <View
      style = { style.container}

    >
      {/*comentario*/}
    <View
      style = {{
        ...style.cajaMorada,
        width: width * 0.6,
      }}
    />

    <View
      style = {{
        ...style.cajaNaranja,
        width: width * 0.4,
      }}
    />

    <Text
      style={ style.title }
    >
      { width } x { height }
    </Text>

    </View>
  );
}

const style = StyleSheet.create({
  container:{
    width: "100%",
    height: 200,
    backgroundColor: "violet"
  },
  cajaMorada:{
    backgroundColor: "violet",
    height: "50%",
  },
  cajaNaranja:{
    backgroundColor: "orange",
    height: "50%",
  },
  title:{
    fontSize:30,
    alignSelf:"center",
  }
});
