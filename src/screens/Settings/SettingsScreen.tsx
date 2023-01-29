import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FC, useContext } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { AppStackParams } from "../../types/navigation";
import SafeArea from "../../components/layout/SafeArea";
import Typography from "../../components/layout/Typography";
import { useTheme } from "@react-navigation/native";
import { SettingsContext } from "../../context/SettingsContext";

interface ISettingsScreenProps {
  navigation: NativeStackNavigationProp<AppStackParams, "AppTabs">;
}

const SettingsScreen: FC<ISettingsScreenProps> = ({ navigation }) => {
  const { colors } = useTheme();
  const { theme, selectedCountry } = useContext(SettingsContext);
  return (
    <SafeArea>
      <ScrollView>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Typography variant="bold" size={13} color="subtext">
              PREFERENCES
            </Typography>
          </View>

          <View style={[styles.sectionBoby, { backgroundColor: colors.card }]}>
            <View
              style={[
                styles.rowWrapper,
                styles.rowFirst,
                { borderTopWidth: 0 },
              ]}
            >
              <TouchableOpacity
                style={styles.row}
                onPress={() => navigation.push("SettingsThemeScreen")}
              >
                <Typography>Theme</Typography>
                <View style={styles.rowSpacer} />
                <Typography
                  color="subtext"
                  style={{ textTransform: "capitalize" }}
                >
                  {theme}
                </Typography>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.subtext}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.rowWrapper,
                styles.rowLast,
                { borderColor: colors.separator },
              ]}
            >
              <TouchableOpacity
                style={styles.row}
                onPress={() => navigation.push("SettingsBrowserScreen")}
              >
                <Typography>Browser</Typography>
                <View style={styles.rowSpacer} />
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.subtext}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Typography variant="bold" size={13} color="subtext">
              CONTENT
            </Typography>
          </View>

          <View style={[styles.sectionBoby, { backgroundColor: colors.card }]}>
            <View
              style={[
                styles.rowWrapper,
                styles.rowFirst,
                { borderTopWidth: 0 },
              ]}
            >
              <TouchableOpacity
                style={styles.row}
                onPress={() => navigation.push("SettingsCategoriesScreen")}
              >
                <Typography>Categories</Typography>
                <View style={styles.rowSpacer} />

                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.subtext}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[styles.rowWrapper, { borderColor: colors.separator }]}
            >
              <TouchableOpacity
                style={styles.row}
                onPress={() => navigation.push("SettingsCountryScreen")}
              >
                <Typography>Country</Typography>
                <View style={styles.rowSpacer} />
                <Typography
                  color="subtext"
                  style={{ textTransform: "capitalize" }}
                >
                  {selectedCountry.name}
                </Typography>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.subtext}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.rowWrapper,
                styles.rowLast,
                { borderColor: colors.separator },
              ]}
            >
              <TouchableOpacity
                style={styles.row}
                onPress={() => navigation.push("BookmarksScreen")}
              >
                <Typography>Saved</Typography>
                <View style={styles.rowSpacer} />
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.subtext}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Typography variant="bold" size={13} color="subtext">
              HELP
            </Typography>
          </View>

          <View style={[styles.sectionBoby, { backgroundColor: colors.card }]}>
            <View
              style={[
                styles.rowWrapper,
                styles.rowFirst,
                { borderTopWidth: 0 },
              ]}
            >
              <TouchableOpacity style={styles.row}>
                <Typography>About</Typography>
                <View style={styles.rowSpacer} />

                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.subtext}
                />
              </TouchableOpacity>
            </View>
            <View
              style={[
                styles.rowWrapper,
                styles.rowLast,
                { borderColor: colors.separator },
              ]}
            >
              <TouchableOpacity style={styles.row}>
                <Typography>Contact Us</Typography>
                <View style={styles.rowSpacer} />
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={colors.subtext}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export default SettingsScreen;

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
});
