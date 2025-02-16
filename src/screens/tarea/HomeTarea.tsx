import React from "react";
import { View, Text, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { useTareaApi } from "../../hooks/useTareaApi";
import { TareaCard } from "../../components/TareaCard";
import { appTheme } from "../../themes/appTheme";


export const HomeTarea = () => {

  const { listTarea, isLoading, loadTarea } = useTareaApi();

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