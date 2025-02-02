import React from "react";
import { View, Text } from 'react-native';
//import { useNavigation } from '@react-navigation/native'
import { RootStackParams } from "../../navigator/StackNavigator";
//import { StackActions } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { Fab } from '../../components/Fab'
import { BtnTouch } from "../../components/BtnTouch";
import { appTheme } from "../../themes/appTheme";

interface Props extends StackScreenProps<RootStackParams, 'ScreenI'> {};

  // export type RootStackParams = {
  //   ScreenI: undefined;
  //   ScreenII: undefined;
  //   ScreenIII: undefined;
  //   userScreen: { userName: string, lastName: string};
  // }
  
interface User {
  userName: string;
  lastName: string;
}

export const ScreenI = ( { navigation }: Props ) => {

  //const navigation = useNavigation();

  const user1:  User = {
    userName: "Maria",
    lastName: "Lopez"
  }

  const user2: User = {
    userName: "Juan",
    lastName: "Suarez"
  }

  return (
    <View
      style={{
        ...appTheme.globalContainer,
        ...appTheme.globalMarging
      }}
    >
      <Text
        style= { appTheme.title }
      >
        ScreenI
      </Text>

      <BtnTouch
        title={ user1.userName }
        background="red"
        onPress={ () => navigation.navigate('UserScreen', {...user1 }) }
      />

      <BtnTouch
        title={ user2.userName }
        background="aqua"
        onPress={ () => navigation.navigate('UserScreen', {...user2 }) }
      />

      <Fab
        title=">"
        position="button_right"
        onPress={ () => navigation.navigate("ScreenII") }
      />

      {/* 
      <Fab
        title="Boton"
        position="button_right"
        onPress={ () => navigation.navigate("ScreenII") }
      />

      <Fab
        title="Boton"
        position="button_right"
        onPress={ () => navigation.goBack() }
      />

      <Fab
        title="Boton"
        position="button_right"
        onPress={ () => navigation.dispatch(StackActions.popToTop) }
      />
       */}
      {/* 
      <BtnTouch
        title={ user1.userName}
        background="gray"
        onPress={() => navigation.navigate('UserScreen', { ...User1 })}
      /> */}
    </View>
  );
}
