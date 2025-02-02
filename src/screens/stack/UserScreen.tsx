import React from 'react';
import { View, Text } from 'react-native';
import { RootStackParams } from '../../navigator/StackNavigator';
import { StackScreenProps } from '@react-navigation/stack';
import { Fab } from '../../components/Fab';
import { appTheme } from '../../themes/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'UserScreen'> {};

export const UserScreen = ( { navigation, route }: Props ) => {

  const { userName, lastName } = route.params;

  return (
    <View 
      style={{
        ...appTheme.globalContainer,
        ...appTheme.globalMarging
      }}
    >
      <Text
        style={ appTheme.title }
      >
        UserScreen: { `${userName} ${lastName}` }
      </Text>

      <Fab
        title="Back"
        position="button_left"
        onPress={ () => navigation.popToTop() }
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
    </View>
  );
}