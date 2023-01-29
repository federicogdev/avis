export type AppTabsParams = {
  HomeScreen: undefined;
  MyNewsScreen: undefined;
  SettingsScreen: undefined;
};

export type AppStackParams = {
  AppTabs: undefined;
  BookmarksScreen: undefined;
  NewsByCategoryScreen: { category: string };
  NewsBySourceScreen: { source: string; id: string };
  OnboardingWelcomeScreen: undefined;
  OnboardingCategoriesScreen: undefined;
  OnboardingCountryScreen: undefined;
  SettingsThemeScreen: undefined;
  SettingsCountryScreen: undefined;
  SettingsCategoriesScreen: undefined;
  SettingsBrowserScreen: undefined;
};
