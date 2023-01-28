import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppTabs } from "./src/navigation/AppTabs";

type Props = {};

const App = (props: Props) => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};

export default App;
