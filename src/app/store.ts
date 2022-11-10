import { configureStore } from '@reduxjs/toolkit';
import walletSlice from 'redux/slices/walletSlice';

export const store = configureStore({
	reducer: {
		walletSlice: walletSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
