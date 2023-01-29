import React from "react";
import { Routes } from "./src/navigation/Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {};

const client = new QueryClient();

const App = (props: Props) => {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={client}>
        <Routes />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
