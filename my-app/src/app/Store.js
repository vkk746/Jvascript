

import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../app/todoSlice"



const store= configureStore({
    reducer : todoSlice,
})
