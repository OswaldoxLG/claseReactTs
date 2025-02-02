import React from "react";
import { View, Text } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/StackNavigator";
//import { StackActions } from "@react-navigation/native";
import { appTheme } from "../../themes/appTheme";
import { Fab } from "../../components/Fab";


interface Props extends StackScreenProps<RootStackParams, 'ScreenII'> {}

export const ScreenII = ( { navigation }: Props) => {

  //const navigation = useNavigation();

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
        ScreenII
      </Text>

      <Fab
        title="->"
        position="button_right"
        onPress={ () => navigation.navigate("ScreenIII") }
      />

      <Fab
        title="<-"
        position="button_left"
        onPress={ () => navigation.goBack() }
      />
{/* 
      <Fab
        title="Boton"
        position="button_right"
        onPress={ () => navigation.dispatch(StackActions.popToTop) }
      />
       */}
    </View>
  );
}
