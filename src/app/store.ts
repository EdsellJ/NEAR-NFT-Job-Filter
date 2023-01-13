import { configureStore } from "@reduxjs/toolkit";
import companySlice from "redux/slices/companySlice";
import jobSlice from "redux/slices/jobSlice";
import searchSlice from "redux/slices/searchSlice";

export const store = configureStore({
	reducer: {
		companySlice,
		jobSlice,
		searchSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
