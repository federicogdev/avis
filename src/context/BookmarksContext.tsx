import React, { FC, createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Article } from "../types/settings";

type BookmarksContextState = {
  bookmarkedNews: Article[];
  addToBookmarkedNews: (article: Article) => void;
  removeFromBookmarkedNews: (article: Article) => void;
};

interface IBookmarksContextProviderProps {
  children: React.ReactNode;
}

const contextDefaultValue: BookmarksContextState = {
  bookmarkedNews: [],

  addToBookmarkedNews: () => {},

  removeFromBookmarkedNews: () => {},
};

export const BookmarksContext =
  createContext<BookmarksContextState>(contextDefaultValue);

export const BookmarksContextProvider: FC<IBookmarksContextProviderProps> = ({
  children,
}) => {
  const [bookmarkedNews, setBookmarkedNews] = useState<Article[]>(
    contextDefaultValue.bookmarkedNews
  );

  const addToBookmarkedNews = (article: Article) => {
    setBookmarkedNews([...bookmarkedNews, article]);
  };

  const removeFromBookmarkedNews = (article: Article) => {
    setBookmarkedNews(
      bookmarkedNews.filter((bookmark) => bookmark.url !== article.url)
    );
  };

  const saveBookmarkedNews = async (value: Article[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@avis/bookmarkedNews", jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  const loadBookmarkedNews = async () => {
    try {
      const value = await AsyncStorage.getItem("@avis/bookmarkedNews");
      if (value !== null) {
        setBookmarkedNews(JSON.parse(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBookmarkedNews();
  }, []);

  useEffect(() => {
    saveBookmarkedNews(bookmarkedNews);
  }, [bookmarkedNews]);

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedNews,
        addToBookmarkedNews,
        removeFromBookmarkedNews,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};
