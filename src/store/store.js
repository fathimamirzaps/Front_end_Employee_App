import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { baseApi } from "../services/api";

export const store = configureStore({
  reducer: { counterReducer ,
    [baseApi.reducerPath]: baseApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
setupListeners(store.dispatch);
