import axios from 'axios';

export const registerCompany = (val: Record<any, any>) => {
	console.log(val);
};

export const _getCompanyTypes = async () => {
	const res = await axios.get('/api/company/type');
	return res.data;
};

export const _getCompanySizes = async () => {
	const res = await axios.get('/api/company/size');
	return res.data;
};
