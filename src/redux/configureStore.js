import {
  configureStore,
  // getDefaultMiddleware,
  // applyMiddleware,
} from "@reduxjs/toolkit";
import monitorReducersEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middleware/logger";
import { combineReducers } from "redux";
import { RoomSlice } from "./reducers/reducer";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({ RoomSlice });
const persistedReducer = persistReducer(persistConfig, reducers);

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    // reducer: reducers,
    reducer: persistedReducer,
    // middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    middleware: (getDefaultMiddleware) => {
      return [
        loggerMiddleware,
        ...getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
      ];
    },
    preloadedState,
    enhancers: [monitorReducersEnhancer],
  });

  // if (process.env.NODE_ENV !== "production" && module.hot) {
  //   module.hot.accept("./reducers/reducer", () =>
  //     store.replaceReducer(RoomSlice)
  //   );
  // }

  return store;
}
