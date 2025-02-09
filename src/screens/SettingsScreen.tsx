import React, { useContext} from "react";
import { View, Text } from 'react-native';
import { AuthContext } from "../context/AuthContext";
import { BtnTouch } from "../components/BtnTouch";
import { appTheme } from "../themes/appTheme";


export const SettingsScreen = () => {

  const { authState, } = useContext(AuthContext);
  
  return (
    <View
      style={{
        ...appTheme.globalContainer,
        ...appTheme.globalMarging
      }}
    >
      <Text>
        SettingsScreen
      </Text>
      <Text
        style={ appTheme.title }
      >
        { JSON.stringify(authState)}
      </Text>

      <Text
        style={ appTheme.title }
      >
        { JSON.stringify(authState.FormData)}
      </Text>

    </View>
  );
}