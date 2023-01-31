import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { FC, useContext } from "react";
import { RouteProp, useTheme } from "@react-navigation/native";
import { AppStackParams } from "../../types/navigation";
import SafeArea from "../../components/layout/SafeArea";
import { SettingsContext } from "../../context/SettingsContext";
import { BASE_URL, API_KEY } from "@env";
import { useQuery } from "@tanstack/react-query";
import { Article } from "../../types/settings";
import axios from "axios";
import NewsTile from "../../components/NewsTile";

interface INewsResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

interface INewsBySourceScreenProps {
  route: RouteProp<AppStackParams, "NewsBySourceScreen">;
}

const NewsBySourceScreen: FC<INewsBySourceScreenProps> = ({ route }) => {
  const { source, id } = route.params;
  const { colors } = useTheme();
  const { selectedCountry } = useContext(SettingsContext);

  const fetchAllArticles = () =>
    axios
      .get(
        `${BASE_URL}/top-headlines?sources=${id}&pageSize=30&apiKey=${API_KEY}`
      )
      .then((res) => {
        return res.data;
      });

  const { isLoading, data } = useQuery<INewsResponse>(
    ["news", id],
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
      {/* <Typography>{}</Typography> */}

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

export default NewsBySourceScreen;

const styles = StyleSheet.create({
  listItemWrapper: { paddingVertical: 20 },
  flatlistContent: { paddingHorizontal: 15 },
});
