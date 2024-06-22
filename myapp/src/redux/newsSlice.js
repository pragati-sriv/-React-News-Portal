import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWSAPI_KEY;
const BASE_URL = "https://newsapi.org/v2/";

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ query, page }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}everything?q=news&apiKey=f47776f2b0414c708071360081528211`,
        {
          params: {
            q: query,
            from: "2024-06-21",
            sortBy: "popularity",
            page: page,
            apiKey: API_KEY,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    articles: [],
    status: "idle",
    error: null,
    query: "Apple",
    page: 1,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      state.page = 1;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload.articles;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export const { setQuery, setPage } = newsSlice.actions;

export default newsSlice.reducer;