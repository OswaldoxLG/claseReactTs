import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
//import { Fab } from '../components/Fab';
import { useCounterHook, Data } from '../hooks/useCounterHook';

export const ContadorSimple = () => {

  const initial : Data = {
    count: 10
  }

  const { value, add, decrement, reset } = useCounterHook( initial );

  return(
    <View>

      {/*Comentario*/}

      <Text>
        Contador: {value.count}
      </Text>

      <Button
        title = "Incrementar"
        onPress= {() => add()}
      />
      <Button
        title = "Decrementar"
        onPress= {() => decrement()}
      />
      <Button
        title = "Resetear"
        onPress= {() => reset()}
      />

    </View>
  );
}
