import { configureStore } from "@reduxjs/toolkit";
import paginatePosts from './src/slices/pagination'

export const store = configureStore({
  reducer: { 
    paginate: paginatePosts,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch