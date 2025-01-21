import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FlexScreen = () => {

  return(
    <View
      style={ style.conatiner}
    >
      <View
        style={ style.box1 }
      />
      <View
        style={ style.box2 }
      />
      <View
        style={ style.box3 }
      />

    </View>
  );
}

const style = StyleSheet.create({
  // caja1: flex:3, caja2: 5, caja3: 2
  conatiner:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  box1: {
    backgroundColor: "pink",
    width: 100,
    height: 100,
    alignSelf: "flex-start",
  },
  box2: {
    backgroundColor: "green",
    width: 100,
    height: 100,
  }, 
  box3: {
    backgroundColor: "blue",
    width: 100,
    height: 100,
    alignSelf: "flex-end"
  }

}); 