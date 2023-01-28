import React from "react";
import { useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home/HomeScreen";
import MyCategoriesScreen from "../screens/Home/MyCategoriesScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";

import { AppTabsParams } from "../types/navigation";

const HomeStack = createNativeStackNavigator();
const MyCategoriesStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator<AppTabsParams>();

const HomeScreenStack = () => {
  const { colors } = useTheme();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
      }}
    >
      <HomeStack.Screen component={HomeScreen} name="Avis" />
    </HomeStack.Navigator>
  );
};

const MyCategoriesScreenStack = () => {
  const { colors } = useTheme();

  return (
    <MyCategoriesStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
      }}
    >
      <MyCategoriesStack.Screen
        component={MyCategoriesScreen}
        name="My Categories"
      />
    </MyCategoriesStack.Navigator>
  );
};

const SettingsScreenStack = () => {
  const { colors } = useTheme();

  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
      }}
    >
      <SettingsStack.Screen component={SettingsScreen} name="Settings" />
    </SettingsStack.Navigator>
  );
};

export const AppTabs = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.card },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        component={HomeScreenStack}
        name="HomeScreen"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-home" : "md-home-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        component={MyCategoriesScreenStack}
        name="MyCategoriesScreen"
        options={{
          tabBarLabel: "My Categories",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-newspaper" : "md-newspaper-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        component={SettingsScreenStack}
        name="SettingsScreen"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "md-settings" : "md-settings-outline"}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
