import React, { useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useTareaApi } from "../../hooks/useTareaApi";
import { TareasResponse } from "../../interfaces/tareasInterfaces";
import { TareaCard } from "../../components/TareaCard";
import { BtnTouch } from "../../components/BtnTouch";
import { appTheme } from "../../themes/appTheme";

export const HomeTarea = () => {

  const { listTarea, isLoading, loadTarea } = useTareaApi();

  const navigation = useNavigation();

  const isFocused = useIsFocused();

  const createTarea: TareasResponse = {
    _id:         '',
    titulo:      '',
    descripcion: '',
    estado:      '',
    __v:         0
  }

  useEffect( () => {
    (isLoading) && loadTarea();
  },[ isFocused ]);

  return (
    <View
      style={appTheme.globalContainer}
    >
      <FlatList
        data={ Object.values(listTarea)}
        keyExtractor={ (item) => '#' + item._id }

        ListHeaderComponent={(
            <View>
              <Text>
                Pan
              </Text>
              <BtnTouch
                title="Crear Tarea"
                background="blue"
                onPress={ () => navigation.navigate('FormTarea', { createTarea }) }
              />
            </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={ (isLoading) }
            onRefresh={ loadTarea }
            colors={ ["pink", "violet"] }
            progressBackgroundColor="black"
          />
        }
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={ ({ item }) => (
          <TareaCard
            tarea={ item }
          />
        )}
      />
    </View>
  );
}