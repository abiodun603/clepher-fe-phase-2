// store.ts

import { configureStore } from '@reduxjs/toolkit';
import { postApi } from './feature/post/PostService';


const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    const postApiMiddleware = postApi.middleware;
    return getDefaultMiddleware()
      .concat(postApiMiddleware)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;