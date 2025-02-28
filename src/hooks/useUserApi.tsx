import { useEffect, useState } from "react";
import { pandoraApi } from "../api/pandoraApi";
import { UserResponse } from "../interfaces/userInterfaces";
import { FormUserData } from "./useFormUser";

export const useUserApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listUser, setListUser] = useState<UserResponse>({} as UserResponse);

  const apiUrl: string = 'http://192.168.1.2:3000/api/v1/user';

  const loadUser = async () => {
    setIsLoading(false);
    const response = await pandoraApi.get<UserResponse>(apiUrl);
    setListUser(response.data);
    setIsLoading(true);
  }

  const createUser = async (data: FormUserData) => {
    const dataBody = {
      username: data.username,
      email: data.email,
      password: data.password,
      image: data.image
    }
    await pandoraApi.post( apiUrl, dataBody );
  }

  const updateUser = async (data: FormUserData) => {
    const dataBody = {
      username: data.username,
      email: data.email,
      image: data.image
    }

    //si el password no esta vacio, se agrega al objeto dataBody
    const dataPass = 
      ( data.password !== '' ) 
      ? { ...dataBody, password: data.password } 
      : dataBody;

    await pandoraApi.patch( apiUrl + `/${data._id_user}`, dataPass );
  }

  const deleteUser = async (data: FormUserData) => {
    await pandoraApi.delete( apiUrl + `/${data._id_user}` );
  }

  useEffect(() => {
    loadUser();
  }, []);

  return {
    isLoading,
    listUser,
    loadUser,
    createUser,
    updateUser,
    deleteUser
  }
}

