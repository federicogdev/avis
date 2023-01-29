import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";

import { AppTabs } from "./AppTabs";
import BookmarksScreen from "../screens/Home/BookmarksScreen";
import NewsListScreen from "../screens/Home/NewsListScreen";

//Onboarding
import OnboardingWelcomeScreen from "../screens/Onboarding/OnboardingWelcomeScreen";
import OnboardingCategoriesScreen from "../screens/Onboarding/OnboardingCategoriesScreen";
import OnboardingCountryScreen from "../screens/Onboarding/OnboardingCountryScreen";

//Settings
import SettingsThemeScreen from "../screens/Settings/SettingsThemeScreen";
import SettingsCountryScreen from "../screens/Settings/SettingsCountryScreen";
import SettingsCategoriesScreen from "../screens/Settings/SettingsCategoriesScreen";
import SettingsBrowserScreen from "../screens/Settings/SettingsBrowserScreen";
import { AppStackParams } from "../types/navigation";

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => {
  const { colors } = useTheme();
  const isFirstVisit = true;
  return (
    <Stack.Navigator
      screenOptions={{
        headerLargeStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.card },
        headerShadowVisible: false,
        headerTransparent: true,
      }}
    >
      {isFirstVisit ? (
        <>
          <Stack.Screen
            name="OnboardingWelcomeScreen"
            component={OnboardingWelcomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingCategoriesScreen"
            component={OnboardingCategoriesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OnboardingCountryScreen"
            component={OnboardingCountryScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="AppTabs"
            component={AppTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BookmarksScreen"
            component={BookmarksScreen}
            options={{ headerLargeTitle: true, headerTitle: "Bookmarked News" }}
          />
          <Stack.Screen
            name="NewsListScreen"
            component={NewsListScreen}
            options={({ route }) => ({
              headerLargeTitle: true,
              headerTitle: route.params.category,
            })}
          />
          <Stack.Screen
            name="SettingsThemeScreen"
            component={SettingsThemeScreen}
            options={{ headerLargeTitle: true, headerTitle: "Select Theme" }}
          />
          <Stack.Screen
            name="SettingsCountryScreen"
            component={SettingsCountryScreen}
            options={{
              headerLargeTitle: true,
              headerTitle: "Select Country",
            }}
          />
          <Stack.Screen
            name="SettingsCategoriesScreen"
            component={SettingsCategoriesScreen}
            options={{
              headerLargeTitle: true,
              headerTitle: "Select Categories",
            }}
          />
          <Stack.Screen
            name="SettingsBrowserScreen"
            component={SettingsBrowserScreen}
            options={{ headerLargeTitle: true, headerTitle: "Select Browser" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
