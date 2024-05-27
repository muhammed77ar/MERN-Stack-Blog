import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "../InitialState";

export const ArticleSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: InitialState.articles,
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  }
});

export const { setArticles } = ArticleSlice.actions;
export const getAllArticles = (({articles}) => articles.articles)
export default ArticleSlice.reducer;