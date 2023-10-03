import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./slices/appSlice";
import authReducer from "./slices/authSlice";
import authApi from "./apis/authApi";
import userApi from "./apis/userApi";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  // whitelist: [],
  // blacklist: [],
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  app: appReducer,
  auth: authReducer,
});

export { rootPersistConfig, rootReducer };
