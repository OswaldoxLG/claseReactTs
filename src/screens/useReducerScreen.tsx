import React, { useReducer} from 'react';
import { View, Text, Button } from 'react-native';

interface AuthState{
  count:number;
}

export const useReducerScreen = () => {
  
  const initialState: AuthState = {
    count: 10
  }

  type Action = 
      | { type: "add" }
      | { type: "decrement" }
      | { type: "reset" }
      | { type: "add2" };
  
  const counterReducer = (state: AuthState, action: Action) => {
    switch( action.type ){
      case 'add':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1}
      case 'reset':
        return { ...initialState }
      case 'add2':
        return { count: state.count + 2 }
    }
  }

  const [ estado, dispatch ] = useReducer( counterReducer, initialState );

  return(
    <View>
      <Text
        style = {{
          fontSize: 30, 
          textAlign: "center"
        }}
      >
        { estado.count }
      </Text>

      <Button
        title='Añadir'
        onPress={ () => dispatch({ type:"add" }) }
      />

      <Button
        title='Decrementar'
        onPress={ () => dispatch({ type:"decrement" }) }
      />

      <Button
        title='Reset'
        onPress={ () => dispatch({ type:"reset" }) }
      />

      <Button
        title='Add2'
        onPress={ () => dispatch({ type:"add2" }) }
      />
      
    </View>
  );
}
