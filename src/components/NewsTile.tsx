import React, { FC, useContext, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import dayjs from "dayjs";
import { useTheme } from "@react-navigation/native";

import { Article } from "../types/settings";
import Typography from "./layout/Typography";
import Spacer from "./layout/Spacer";
import NewsTileBookmarkButton from "./NewsTileBookmarkButton";
import { openLink } from "../utils/openLink";
import { SettingsContext } from "../context/SettingsContext";

interface INewsTileProps {
  article: Article;
}

const NewsTile: FC<INewsTileProps> = ({ article }) => {
  const { colors } = useTheme();
  const { browser } = useContext(SettingsContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <TouchableOpacity onPress={() => openLink(article.url, browser)}>
      {isLoading && (
        <View
          style={[styles.placeholderImage, { backgroundColor: colors.card }]}
        >
          <ActivityIndicator color={colors.primary} />
        </View>
      )}

      {article.urlToImage !== "" || article.urlToImage ? (
        <Image
          style={styles.image}
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          source={{ uri: article.urlToImage! }}
        />
      ) : (
        <View
          style={[styles.placeholderImage, { backgroundColor: colors.card }]}
        >
          <ActivityIndicator color={colors.primary} />
        </View>
      )}

      <Spacer y={20} />

      <View style={styles.row}>
        <Typography variant="bold" style={{ flex: 0.9 / 1 }}>
          {article.title}
        </Typography>
        <NewsTileBookmarkButton article={article} />
      </View>

      <Spacer y={10} />

      <Typography color="subtext" size={14}>
        {article.content}
      </Typography>

      <Spacer y={10} />

      <View style={styles.row}>
        <Typography color="subtext" size={14}>
          {dayjs(article.publishedAt).format("MMMM D, YYYY")}
        </Typography>

        <Typography
          variant="bold"
          color="primary"
          style={{ textTransform: "lowercase" }}
        >
          {article.source.name}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

export default NewsTile;

const styles = StyleSheet.create({
  placeholderImage: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    zIndex: 0,
    width: "100%",
    position: "absolute",
    aspectRatio: 1.7 / 1,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: { width: "100%", aspectRatio: 1.7 / 1, zIndex: 0, borderRadius: 10 },
});
