import axios from "axios";

export const _getCompanyList = async () => {
	const res = await axios.get("http://localhost:8080/api/company");
	return res.data;
};

export const _getIndustries = async () => {
	const res = await axios.get("http://localhost:8080/api/company/industry");
	return res.data;
};

export const _getCompanySizes = async () => {
	const res = await axios.get("http://localhost:8080/api/company/size");
	return res.data;
};
