import axios from "axios";

export const _getSkills = async () => {
	const res = await axios.get("http://localhost:8080/api/job/skill");
	return res.data;
};

export const _getJobTypes = async () => {
	const res = await axios.get("http://localhost:8080/api/job/type");
	return res.data;
};

export const _getAllJobs = async (badges: string[]) => {
	const res = await axios.post("http://localhost:8080/api/job/search", {
		badges: badges,
	});
	return res.data;
};

export const getDateFormat = (date: string) => {
	return `${date.slice(5, 7)}/${date.slice(8, 10)}/${date.slice(0, 4)}`;
};

export function getWeb3Jobs() {
	return axios.get("http://localhost:8080/api/job/web3");
}
