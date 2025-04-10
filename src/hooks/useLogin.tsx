import { useReducer, useState, useEffect, useContext } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { LoginResponse } from "../interfaces/userInterfaces";
import { AuthContext } from "../context/AuthContext";

export interface LoginData{
  email: string;
  password: string;
}

const initialLoginData: LoginData = {
  email: '',
  password: ''
}

type Action = { type: 'handleInputChange', payload: { fieldName: keyof LoginData, value: string } }

const dataReducer = ( state: LoginData, action: Action ) => {
  switch( action.type ){
    case 'handleInputChange':
      return{
        ...state,
        [ action.payload.fieldName ] : action.payload.value
      };
      default:
        return{
          ...state
        };
  }
}

export const useLogin = () => {

  const [ loading, setLoading ] = useState<boolean>(true);
  const [ state, dispatch] = useReducer( dataReducer, initialLoginData);
  const [ request, setRequest] = useState<LoginResponse>();
  const { signIn, changeUserName, changeFavImage} = useContext( AuthContext );


  const handleInputChange = ( fieldName: keyof  LoginData, value: string) => {
    dispatch( { type: "handleInputChange", payload: { fieldName, value}})
  }

  const handleLogin = async () => {
    const apiUrl = 'http://192.168.1.2:3000/api/v1/user/login';

    const dataBody = {
      email: state.email,
      password: state.password
    }

    try{
      const response = await pandoraApi.post<LoginResponse>(apiUrl, dataBody);

      ( response.data !== false) && ( () => {
        signIn();
        changeFavImage( response.data.image);
        changeUserName( response.data.username );
        setRequest( response.data );
      })()
    }catch(error){
      console.log(error);
      setRequest(false);
    }
  }


  return { 
    loading, 
    state, 
    handleLogin, 
    handleInputChange, 
    request 
  };
}

