export type Themes = "automatic" | "light" | "dark";

export type Browsers = "safari" | "in app";

export type Country = {
  name: string;
  language: string;
  iso: string;
  flag: any;
};

export type Category = {
  name: string;
};

export type Article = {
  source: Source;
  author: null | string;
  title: string;
  description: null | string;
  url: string;
  urlToImage: null | string;
  publishedAt: Date;
  content: null | string;
};

export type Source = {
  id: null | string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
};
