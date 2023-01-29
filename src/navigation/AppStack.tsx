import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";

import { AppTabs } from "./AppTabs";
import BookmarksScreen from "../screens/Home/BookmarksScreen";
import NewsByCategoryScreen from "../screens/Home/NewsByCategoryScreen";

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
import { SettingsContext } from "../context/SettingsContext";
import { ActivityIndicator, View } from "react-native";
import NewsBySourceScreen from "../screens/Home/NewsBySourceScreen";

const Stack = createNativeStackNavigator<AppStackParams>();

export const AppStack = () => {
  const { colors } = useTheme();
  const { isFirstVisit, isFirstVisitLoading } = useContext(SettingsContext);

  if (isFirstVisitLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={200} color={colors.primary} />
      </View>
    );
  }

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
            options={{
              headerLargeTitle: true,
              headerTitle: "Select Categories",
            }}
          />
          <Stack.Screen
            name="OnboardingCountryScreen"
            component={OnboardingCountryScreen}
            options={{ headerLargeTitle: true, headerTitle: "Select Country" }}
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
            name="NewsByCategoryScreen"
            component={NewsByCategoryScreen}
            options={({ route }) => ({
              headerLargeTitle: true,
              headerTitle: route.params.category,
            })}
          />
          <Stack.Screen
            name="NewsBySourceScreen"
            component={NewsBySourceScreen}
            options={({ route }) => ({
              headerLargeTitle: true,
              headerTitle: route.params.source,
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
