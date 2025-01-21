import React from 'react';
import { View, Text } from 'react-native';
import { Fab } from '../components/Fab';
import { appTheme } from '../themes/appTheme';

interface Props {
  title: string, 
  position: 'button_right' | 'button_left'
  onPress: () => void;
}

export const FabScreen = ({title, position, onPress }:Props) => {


  return (
    <View style={{
      ...appTheme.globalMarging,
      ...appTheme.globalContainer
    }}>

      <Text
        style={{
          ...appTheme.title
        }}
      >
        Screen Fab
      </Text>

        <Fab title="Boton" position={position} onPress={onPress} />
      
    </View>
  );
}
