import { useQuery } from "@tanstack/react-query";
import FuzzySearch from "fuzzy-search";

import { getWeb3Jobs } from "utils/job";
import type { jobType } from "@types";

export default function useSearch() {
	const { data, status } = useQuery<{ data: jobType[][] }>(["getWeb3Jobs"], getWeb3Jobs);

	const jobs = status === "success" ? data.data[2] : [];
	const searcher = new FuzzySearch(jobs, ["title", "company", "location", "tags"]);


	return { status, searcher };
}
