import { configureStore } from "@reduxjs/toolkit";
import companySlice from "redux/slices/companySlice";
import jobSlice from "redux/slices/jobSlice";

export const store = configureStore({
	reducer: {
		companySlice: companySlice,
		jobSlice: jobSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
