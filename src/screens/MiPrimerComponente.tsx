import React from 'react';
import { View, Text } from 'react-native';


export interface Props {
  nombre: string,
}

const MiPrimerComponente = ({nombre}:Props) => {

  return(
    <View>
      <Text
        style={{
          color: "red",
          fontWeight: "bold"
        }}
      >
        Hello {nombre}
      </Text>
    </View>
  );
}

export default MiPrimerComponente;