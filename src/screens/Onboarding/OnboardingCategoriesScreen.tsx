import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useContext } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppStackParams } from "../../types/navigation";
import { SettingsContext } from "../../context/SettingsContext";
import SafeArea from "../../components/layout/SafeArea";
import { useTheme } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import Typography from "../../components/layout/Typography";
import { getCategoryIcon } from "../../utils/getCategoryIcon";

interface IOnboardingCategoriesScreenProps {
  navigation: NativeStackNavigationProp<
    AppStackParams,
    "OnboardingCategoriesScreen"
  >;
}

const OnboardingCategoriesScreen: FC<IOnboardingCategoriesScreenProps> = ({
  navigation,
}) => {
  const {
    categories,
    selectedCategories,
    addCategory,
    removeCategory,
    setFirstVisitFalse,
  } = useContext(SettingsContext);
  const { colors } = useTheme();
  return (
    <SafeArea>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.radioWrapper,
              index === 0 && { borderTopWidth: 0 },
              { borderColor: colors.separator },
            ]}
          >
            <TouchableOpacity
              onPress={() =>
                selectedCategories.find((c) => c.name === item.name)
                  ? removeCategory(item)
                  : addCategory(item)
              }
            >
              <View style={[styles.radio]}>
                <View style={styles.radioIcon}>
                  {getCategoryIcon(item.name, colors.subtext)}
                </View>
                <View style={styles.radioTexts}>
                  <Typography
                    variant="bold"
                    style={{ textTransform: "capitalize" }}
                  >
                    {item.name}
                  </Typography>
                </View>

                <View
                  style={[
                    styles.radioCheck,
                    { borderColor: colors.primary },
                    selectedCategories.find((c) => c.name === item.name) && {
                      backgroundColor: colors.primary,
                    },
                  ]}
                >
                  <FontAwesome
                    name="check"
                    style={
                      selectedCategories.find((c) => item.name === c.name)
                        ? { display: "flex" }
                        : {
                            display: "none",
                          }
                    }
                    color="#fff"
                    size={12}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.bottom}>
        <TouchableOpacity
          disabled={selectedCategories.length === 0}
          onPress={() => {
            selectedCategories.length > 0 && setFirstVisitFalse();
          }}
          style={[
            styles.button,
            {
              backgroundColor:
                selectedCategories.length === 0 ? "grey" : colors.primary,
            },
          ]}
        >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
};

export default OnboardingCategoriesScreen;

const styles = StyleSheet.create({
  radioWrapper: { marginLeft: 24, borderTopWidth: 0.5 },
  radio: {
    position: "relative",
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  radioIcon: {
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  radioFlag: { width: 35, maxWidth: 35 },
  radioTexts: { marginBottom: 2 },
  radioCheck: {
    width: 24,
    height: 24,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    borderWidth: 1,
  },
  bottom: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    // alignItems: "center",
    padding: 15,
  },
  button: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});
