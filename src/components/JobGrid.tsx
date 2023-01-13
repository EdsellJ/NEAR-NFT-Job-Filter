import { useQuery } from "@tanstack/react-query";

import JobCard from "components/JobCard";
import { getWeb3Jobs } from "utils/job";
import JobCardLoader from "components/JobCardLoader";
import type { jobType } from "@types";

interface Props {
	scroll: number;
}

export default function JobGrid({ scroll }: Props) {
	const { data, status } = useQuery<{ data: jobType[][] }>(["getWeb3Jobs"], getWeb3Jobs);
	const jobGridPosition = Number(scroll) > 300 ? "absolute right-0 w-9/12 pl-14" : "w-9/12";

	return (
		<div className={`jobgrid ${jobGridPosition} flex flex-col`}>
			<div className="wrapper mx-auto justify-center flex">
				{status === "error" ? (
					<p>Unable to fetch job due to an error</p>
				) : status === "loading" ? (
					<JobCardLoader />
				) : (
					<div className="grid gap-x-8 gap-y-8 grid-cols-2 w-full">
						{data.data[2].map((job) => (
							<JobCard key={job.id} job={job} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}
