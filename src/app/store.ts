import { configureStore } from '@reduxjs/toolkit';
import walletSlice from 'redux/slices/walletSlice';
import companySlice from 'redux/slices/companySlice';

export const store = configureStore({
	reducer: {
		walletSlice: walletSlice,
		companySlice: companySlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
