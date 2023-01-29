import React, { FC, useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

import { SettingsContext } from "../../context/SettingsContext";
import SafeArea from "../../components/layout/SafeArea";
import Typography from "../../components/layout/Typography";

type Props = {};

const SettingsCountryScreen = (props: Props) => {
  const { countries, selectCountry, selectedCountry } =
    useContext(SettingsContext);
  const { colors } = useTheme();
  return (
    <SafeArea>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={countries}
        keyExtractor={(item) => item.iso}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.radioWrapper,
              index === 0 && { borderTopWidth: 0 },
              { borderColor: colors.separator },
            ]}
          >
            <TouchableOpacity onPress={() => selectCountry(item)}>
              <View style={[styles.radio]}>
                <View style={styles.radioIcon}>
                  <Image source={item.flag} style={styles.radioFlag} />
                </View>
                <View style={styles.radioTexts}>
                  <Typography variant="bold">{item.name}</Typography>
                  <Typography size={14} color="subtext">
                    {item.language}
                  </Typography>
                </View>

                <View
                  style={[
                    styles.radioCheck,
                    { borderColor: colors.primary },
                    selectedCountry.name === item.name && {
                      backgroundColor: colors.primary,
                    },
                  ]}
                >
                  <FontAwesome
                    name="check"
                    style={
                      selectedCountry.name !== item.name && { display: "none" }
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
    </SafeArea>
  );
};

export default SettingsCountryScreen;

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
