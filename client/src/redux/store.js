// src/redux/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage for web

// reducers
import userReducer from "./userSlice";
import orderReducer from "./orderSlice";
import idolReducer from "./idolSlice";

// persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "order", "idols"], // choose which slices to persist
};

// combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  order: orderReducer,
  idols: idolReducer,
});

// wrap root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignore redux-persist actions that cause warnings
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// persistor
export const persistor = persistStore(store);
