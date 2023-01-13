import { useQuery } from "@tanstack/react-query";
import { jobType } from "@types";
import JobCard from "components/JobCard";
import { getWeb3Jobs } from "utils/job";
import JobCardLoader from "./JobCardLoader";

export default function JobGrid() {
	const { data, status } = useQuery<{ data: jobType[][] }>(["getWeb3Jobs"], getWeb3Jobs);

	return (
		<div className="jobgrid flex flex-col w-11/12">
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
