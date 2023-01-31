import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { BookmarksContext } from "../../context/BookmarksContext";
import SafeArea from "../../components/layout/SafeArea";
import NewsTile from "../../components/NewsTile";
import { useTheme } from "@react-navigation/native";
import Typography from "../../components/layout/Typography";
import Spacer from "../../components/layout/Spacer";

type Props = {};

const BookmarksScreen = (props: Props) => {
  const { bookmarkedNews } = useContext(BookmarksContext);
  const { colors } = useTheme();
  return (
    <SafeArea>
      {bookmarkedNews.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.flatlistContent}
          data={bookmarkedNews}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.listItemWrapper,
                {
                  borderBottomColor: colors.separator,
                  borderBottomWidth:
                    index + 1 < bookmarkedNews.length! ? 0.17 : 0,
                },
              ]}
            >
              <NewsTile article={item} />
            </View>
          )}
        />
      ) : (
        <View style={styles.centeredPage}>
          <Typography style={styles.textCenter}>
            There is no saved news
          </Typography>
          <Spacer y={10} />
          <Typography style={styles.textCenter}>
            They will appear on this page once you click on the{" "}
            <Ionicons name="md-bookmark" color={colors.primary} /> button on
            each article.
          </Typography>
        </View>
      )}
    </SafeArea>
  );
};

export default BookmarksScreen;

const styles = StyleSheet.create({
  listItemWrapper: { paddingVertical: 20 },
  flatlistContent: { paddingHorizontal: 15 },
  centeredPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textCenter: { textAlign: "center" },
});
