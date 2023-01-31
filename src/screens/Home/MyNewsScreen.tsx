import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { FC, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { AppStackParams } from "../../types/navigation";
import { SettingsContext } from "../../context/SettingsContext";

import SafeArea from "../../components/layout/SafeArea";
import Typography from "../../components/layout/Typography";
import { getCategoryIcon } from "../../utils/getCategoryIcon";
import Spacer from "../../components/layout/Spacer";

interface IMyNewsScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "AppTabs">;
}
const MyNewsScreen: FC<IMyNewsScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const { selectedCategories, sources, selectedCountry } =
    useContext(SettingsContext);

  return (
    <SafeArea>
      <ScrollView>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Typography variant="bold" size={13} color="subtext">
              CATEGORIES
            </Typography>
          </View>

          <View style={[styles.sectionBoby, { backgroundColor: colors.card }]}>
            {selectedCategories.map((el, index) => (
              <View
                key={index.toString()}
                style={[
                  styles.rowWrapper,
                  index === 0 && styles.rowFirst,
                  index === selectedCategories.length - 1 && styles.rowLast,
                  index === 0 && { borderTopWidth: 0 },
                  { borderColor: colors.separator },
                ]}
              >
                <TouchableOpacity
                  style={styles.row}
                  onPress={() =>
                    navigation.push("NewsByCategoryScreen", {
                      category:
                        el.name.charAt(0).toUpperCase() + el.name.slice(1),
                    })
                  }
                >
                  <View style={styles.rowIcon}>
                    {getCategoryIcon(el.name, colors.primary)}
                  </View>

                  <Typography style={{ textTransform: "capitalize" }}>
                    {el.name}
                  </Typography>
                  <View style={styles.rowSpacer} />

                  <Ionicons
                    name="chevron-forward"
                    size={20}
                    color={colors.subtext}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {sources.filter((source) => source.country === selectedCountry.iso)
          .length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Typography variant="bold" size={13} color="subtext">
                SOURCES
              </Typography>
            </View>

            <View
              style={[styles.sectionBoby, { backgroundColor: colors.card }]}
            >
              {sources
                .filter((source) => source.country === selectedCountry.iso)
                .map((el, index) => (
                  <View
                    key={index.toString()}
                    style={[
                      styles.rowWrapper,
                      index === 0 && styles.rowFirst,
                      index === selectedCategories.length - 1 && styles.rowLast,
                      index === 0 && { borderTopWidth: 0 },
                      { borderColor: colors.separator },
                    ]}
                  >
                    <TouchableOpacity
                      style={styles.row}
                      onPress={() =>
                        el.id &&
                        navigation.push("NewsBySourceScreen", {
                          source: el.name,
                          id: el.id,
                        })
                      }
                    >
                      <Spacer x={5} />

                      <Typography style={{ textTransform: "capitalize" }}>
                        {el.name}
                      </Typography>
                      <View style={styles.rowSpacer} />

                      <Ionicons
                        name="chevron-forward"
                        size={20}
                        color={colors.subtext}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeArea>
  );
};

export default MyNewsScreen;

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionHeader: {
    padding: 8,
    paddingLeft: 12,
  },
  sectionBoby: {
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,.25)",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  rowWrapper: { paddingLeft: 16, borderTopWidth: 1 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 12,
    paddingRight: 12,
    paddingLeft: 0,
  },
  rowFirst: { borderTopLeftRadius: 12, borderTopRightRadius: 12 },
  rowLast: { borderBottomLeftRadius: 12, borderBottomRightRadius: 12 },
  rowSpacer: { flexGrow: 1, flexShrink: 1, flexBasis: 0 },
  rowIcon: { marginRight: 12 },
});
