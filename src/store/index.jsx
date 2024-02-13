import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./slices/UserSlice";

const store=configureStore({
    reducer:{
        // users:userSlice.reducer, you can also write this type
        users:userSlice,
    },
});

export default store;  