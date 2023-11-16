"use client";

import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "@/app/features/loadingSlice";

const store = configureStore({
  reducer: {
    loading: loadingSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;