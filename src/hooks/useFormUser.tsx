import { useReducer } from "react";
import { useUserApi } from "./useUserApi";

export interface FormUserData{
  _id_user:         number | string;
  username:         string;
  email:            string;
  password:         string;
  image:            string;
}

  //valor inicial del formulario
  export const InitialStateUserForm: FormUserData = {
    _id_user: '',
    username: '',
    email:    '',
    password: '',
    image:    ''
  };

  type Action =
    { type: 'handleInputChange', payload: { fieldName: keyof FormUserData, value: string | number} };

  const formReducer = ( state: FormUserData, action: Action) => {
    switch (action.type) {
      case 'handleInputChange':
        return {
          ...state,
          [ action.payload.fieldName ] : action.payload.value
        }
        default: 
          return {
            ...state
          }
    }
  }

  export const useFormUser = () => {
    const [ state, dispatch ] = useReducer( formReducer, InitialStateUserForm );

    const { createUser, updateUser, deleteUser } = useUserApi();

    const handleInputChange = ( fieldName: keyof FormUserData, value: string | number ) => {
      dispatch({ type: 'handleInputChange', payload: { fieldName, value }} )
    }

    const handleSubmit = () => {
      ( state._id_user !== '' )
      ? updateUser( state )
      : createUser( state );
    }

    const handleDelete = () => {
      deleteUser( state );
    }

    return {
      state,
      handleInputChange,
      handleSubmit,
      handleDelete
    }
  }