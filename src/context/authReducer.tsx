import { AuthState } from "./AuthContext";
import { FormData } from "../hooks/useFormHook";

type AuthActions = 
    | { type: 'signIn' } 
    | { type: 'logout' } 
    | { type: 'changeFavImage', payload: string }
    | { type: 'changeUserName', payload: string }
    | { type: 'setForm', payload: FormData};

export const authReducer = ( state: AuthState, action: AuthActions ) => {

  switch( action.type ){
    case "signIn":
      return {
        ...state,
        isLoggenIn: true,
        UserName: "no_name_user_yet"
    }
    case "logout":
      return {
        ...state,
        isLoggenIn: false,
        UserName: undefined,
        favoriteImage: undefined,
    };
    case "changeFavImage": 
      return {
        ...state,
        favoriteImage: action.payload,
    };
    case "changeUserName": 
      return {
        ...state,
        UserName: action.payload,
    };
    case "setForm":
      return{
        ...state,
        FormData: action.payload,
      };
    default:
      return { ...state };
  }  
}