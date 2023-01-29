import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";

import { AppStack } from "./AppStack";

export const Routes = () => {
  return (
    <NavigationContainer theme={DarkTheme}>
      <AppStack />
      <StatusBar barStyle={"light-content"} />
    </NavigationContainer>
  );
};
