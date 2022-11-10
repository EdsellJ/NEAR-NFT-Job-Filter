import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { connect, WalletConnection } from 'near-api-js';
import { WalletProps } from 'redux/types/walletProps';
import { getConfig } from 'config/wallet';

const NEAR_ENV = process.env.REACT_APP_NEAR_ENV;

const initialState: WalletProps = {
	wallet: null,
};

export const login = createAsyncThunk('walletSlice/login', async () => {
	const nearConnection = await connect(getConfig(NEAR_ENV));
	let walletConnection = new WalletConnection(nearConnection, null);
	walletConnection.requestSignIn('' as any);
	return walletConnection;
});

export const WalletSlice = createSlice({
	name: 'walletSlice',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
			state.wallet = action.payload;
			return state;
		});
	},
});

export default WalletSlice.reducer;
