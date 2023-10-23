import { configureStore } from "@reduxjs/toolkit"
import { wogdApi } from "@/services/wogdApi"
import wogdReducer from "@/services/wogdSlice";
export const store = configureStore({
  reducer: {
    [wogdApi.reducerPath]: wogdApi.reducer,
    wogdAppData: wogdReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(wogdApi.middleware),
})

export default store;