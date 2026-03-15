import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import listingReducer from "../slices/listingSlice";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    listings: listingReducer,
    users: userReducer,
  },
});

export default store;
