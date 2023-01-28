import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppTabs } from "./src/navigation/AppTabs";
import { AppStack } from "./src/navigation/AppStack";

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
