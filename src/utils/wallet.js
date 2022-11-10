import { connect, WalletConnection } from 'near-api-js';
import { getConfig } from 'config/wallet';

let wallet = null;

const NEAR_ENV = process.env.REACT_APP_NEAR_ENV;

export const login = async () => {
	const nearConnection = await connect(getConfig(NEAR_ENV));
	wallet = new WalletConnection(nearConnection);
	wallet.requestSignIn('');
};

export const logout = () => {
	wallet.isSignedIn() && wallet.signOut();
};
