import React, { FC, useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";

import { SettingsContext } from "../../context/SettingsContext";
import SafeArea from "../../components/layout/SafeArea";
import Typography from "../../components/layout/Typography";
import { Browsers, Themes } from "../../types/settings";

type Props = {};

const SettingsBrowserScreen = (props: Props) => {
  const { browser, selectBrowser, theme, selectTheme } =
    useContext(SettingsContext);
  const { colors } = useTheme();

  const browsers: Browsers[] = ["safari", "in app"];

  const getBrowserIcon = (_browser: Browsers) => {
    switch (_browser) {
      case "safari":
        return (
          <MaterialCommunityIcons
            name="apple-safari"
            size={24}
            color={colors.primary}
          />
        );
      case "in app":
        return <Entypo name="browser" size={24} color={colors.primary} />;

      default:
        break;
    }
  };
  return (
    <SafeArea>
      <FlatList
        ListHeaderComponent={
          <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
            <Typography color="subtext">
              Choose your preferred browser
            </Typography>
          </View>
        }
        showsVerticalScrollIndicator={false}
        data={browsers}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.radioWrapper,
              index === 0 && { borderTopWidth: 0 },
              { borderColor: colors.separator },
            ]}
          >
            <TouchableOpacity onPress={() => selectBrowser(item)}>
              <View style={[styles.radio]}>
                <View style={styles.radioIcon}>{getBrowserIcon(item)}</View>
                <View style={styles.radioTexts}>
                  <Typography
                    variant="bold"
                    style={{ textTransform: "capitalize" }}
                  >
                    {item}
                  </Typography>
                </View>

                <View
                  style={[
                    styles.radioCheck,
                    { borderColor: colors.primary },
                    browser === item && {
                      backgroundColor: colors.primary,
                    },
                  ]}
                >
                  <FontAwesome
                    name="check"
                    style={browser !== item && { display: "none" }}
                    color="#fff"
                    size={12}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeArea>
  );
};

export default SettingsBrowserScreen;

const styles = StyleSheet.create({
  radioWrapper: { marginLeft: 24, borderTopWidth: 0.3 },
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
