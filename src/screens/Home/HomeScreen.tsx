import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext } from "react";
import { API_KEY, BASE_URL } from "@env";
import SafeArea from "../../components/layout/SafeArea";
import { SettingsContext } from "../../context/SettingsContext";
import { useQuery } from "react-query";
import { Article } from "../../types/settings";
import axios from "axios";
import NewsTile from "../../components/NewsTile";
import { useTheme } from "@react-navigation/native";

type Props = {};

interface INewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

const HomeScreen = (props: Props) => {
  const { selectedCountry } = useContext(SettingsContext);
  const { colors } = useTheme();
  const fetchAllArticles = () =>
    axios
      .get(
        `${BASE_URL}/top-headlines?country=${selectedCountry.iso}&pageSize=30&apiKey=${API_KEY}`
      )
      .then((res) => {
        return res.data;
      });

  const { isLoading, data } = useQuery<INewsResponse>(
    ["news", selectedCountry],
    fetchAllArticles
  );

  if (isLoading)
    return (
      <SafeArea>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={colors.primary} size={200} />
        </View>
      </SafeArea>
    );
  return (
    <SafeArea>
      <FlatList
        contentContainerStyle={styles.flatlistContent}
        data={data?.articles}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.listItemWrapper,
              {
                borderBottomColor: colors.separator,
                borderBottomWidth:
                  index + 1 < data?.articles.length! ? 0.17 : 0,
              },
            ]}
          >
            <NewsTile article={item} />
          </View>
        )}
      />
    </SafeArea>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  listItemWrapper: { paddingVertical: 20 },
  flatlistContent: { paddingHorizontal: 15 },
});
