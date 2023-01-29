import React from "react";
import { Routes } from "./src/navigation/Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { SettingsContextProvider } from "./src/context/SettingsContext";
import { BookmarksContextProvider } from "./src/context/BookmarksContext";

type Props = {};

const client = new QueryClient();

const App = (props: Props) => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={client}>
        <SettingsContextProvider>
          <BookmarksContextProvider>
            <Routes />
          </BookmarksContextProvider>
        </SettingsContextProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
