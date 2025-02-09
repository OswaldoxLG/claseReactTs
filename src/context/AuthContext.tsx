import React, { createContext, useReducer, ReactNode } from 'react';
import { authReducer } from './authReducer';
import { FormData } from '../hooks/useFormHook';

//Definir estructura del context
export interface AuthState {
  isLoggenIn:     boolean;
  UserName:       string | undefined;
  favoriteImage:  string | undefined;
  FormData:       FormData  | undefined;
}

//Definición del estado inicial
export const AuthInitialState: AuthState = {
  isLoggenIn:     false,
  UserName:       undefined,
  favoriteImage:  undefined,
  FormData:       undefined,
}

//Exportacion de metodos y atributos
export interface AuthContextProps{
  authState:      AuthState;
  signIn:         () => void;
  logout:         () => void;
  changeUserName: ( userName: string ) => void;
  changeFavImage: ( sourceImage: string ) => void;
  setForm:        ( Formulario : FormData ) => void;
}

//Creación de context
export const AuthContext = createContext( {} as AuthContextProps );

//creacion de provider
export const AuthProvider = ( { children }: { children: ReactNode} ) => {

  //reducer
  const [ authState, dispatch ] = useReducer( authReducer, AuthInitialState );

  const signIn = () => dispatch( { type: "signIn" } ); 

  const logout = () => dispatch( { type: "logout" } );

  const changeFavImage = ( sourceImage: string ) => {
    dispatch( { type: "changeFavImage", payload: sourceImage } );
  }

  const changeUserName = ( userName: string ) => {
    dispatch( { type: "changeUserName", payload: userName } );
  }

  const setForm = ( Formulario: FormData ) => {
    dispatch( { type: "setForm", payload: Formulario  } );
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logout,
        changeFavImage,
        changeUserName,
        setForm,
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}