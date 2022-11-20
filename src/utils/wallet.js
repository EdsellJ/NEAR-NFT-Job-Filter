import { connect, WalletConnection } from "near-api-js";
import { getConfig } from "config/wallet";
import axios from "axios";

let wallet = null;

const NEAR_ENV = process.env.REACT_APP_NEAR_ENV;

export const login = async () => {
	const nearConnection = await connect(getConfig(NEAR_ENV));
	wallet = new WalletConnection(nearConnection);
	await wallet.requestSignIn("");
};

export const isSignedIn = async () => {
	if (!Boolean(wallet && wallet.isSignedIn())) {
		return false;
	}
	return true;
};

export const getAccountId = () => {
	return wallet?.getAccountId();
};

export const getNFTMetadata = async () => {
	const accountId = wallet.getAccountId();
	const contractId = process.env.REACT_APP_CONTRACT_ID;
	console.log(accountId, contractId);
	try {
		const result = await axios.post("http://localhost:8080/api/getNFTs", { accountId, contractId });
		console.log(result);
	} catch (err) {
		console.log(err);
	}
};

export const logout = () => {
	wallet.isSignedIn() && wallet.signOut();
};
