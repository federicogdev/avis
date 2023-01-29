import React from "react";
import { Routes } from "./src/navigation/Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { SettingsContextProvider } from "./src/context/SettingsContext";

type Props = {};

const client = new QueryClient();

const App = (props: Props) => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={client}>
        <SettingsContextProvider>
          <Routes />
        </SettingsContextProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
