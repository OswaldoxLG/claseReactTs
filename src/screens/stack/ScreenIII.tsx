import React from "react";
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { appTheme } from '../../themes/appTheme';
import { Fab } from '../../components/Fab';

export const ScreenIII = (  ) => {

  const navigation = useNavigation();

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
        ScreenIII
      </Text>

      <Fab
        title='<-'
        position='button_left'
        onPress={ () => navigation.goBack() }
      />

      <Fab
        title='Home'
        position='button_right'
        onPress={ () => navigation.dispatch(StackActions.popToTop()) }
      />

      {/* <Fab
        title='->'
        position='button_right'
        onPress={ () => navigation.dispatch(StackActions.popToTop() ) }
      />
       */}
    </View>
  );
}
