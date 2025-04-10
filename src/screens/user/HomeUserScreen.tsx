import React, { useEffect} from "react";
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { BtnTouch } from "../../components/BtnTouch";
import { UserResponse } from "../../interfaces/userInterfaces";
import { useUserApi } from "../../hooks/useUserApi";
import { UserCard } from '../../components/UserCard';
import { appTheme } from '../../themes/appTheme';

export const HomeUserScreen = () => {

    const createUser: UserResponse = {
      id_user:   '',
      username:   '',
      email:      '',
      image:      '',
      password:   '',
      update:     '',
    }

    const navigation = useNavigation();

    const isFocused = useIsFocused();

    const { isLoading, loadUsers, listUser } = useUserApi();

    useEffect( () => {
      loadUsers();
    },[ isFocused ]);

  return (
    <View
      style={{
        ...appTheme.globalMarging
      }}
    >
      <FlatList
        data={ Object.values( listUser )} //Convertir JSON a string
        keyExtractor={ (item) => '#'+item.id_user }
        ListHeaderComponent={(
            <View>
              <Text
                style={{
                  ...appTheme.title,
                  ...appTheme.globalMarging,
                  marginTop: 20
                }}
              >
                Lista de usuarios
              </Text>
              <BtnTouch
                title="Crear usuario"
                background="blue"
                onPress={ () => navigation.navigate('FormUserScreen', { user: createUser }) }
              />
            </View>
        )}        
        refreshControl={
          <RefreshControl
            refreshing= { (isLoading) }
            onRefresh={ loadUsers } 
            colors={["pink"]}
            progressBackgroundColor={"black"}
          />
        }
        numColumns={2}
        renderItem={ ( {item} ) => (
          <UserCard
            user={item}
          />
        )}
      />
    </View>
  );
}