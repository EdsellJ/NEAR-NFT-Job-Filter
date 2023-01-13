import { useQuery } from "@tanstack/react-query";
import { jobType } from "@types";
import JobCard from "components/JobCard";
import { getWeb3Jobs } from "utils/job";

export default function JobGrid() {
	const { data, status } = useQuery<{ data: jobType[][] }>(["getWeb3Jobs"], getWeb3Jobs);

	return (
		<div className="jobgrid flex flex-col w-11/12">
			{status === "success" && (
				<div className="wrapper mx-auto justify-center flex">
					<div className="grid gap-x-8 gap-y-8 grid-cols-2 w-full">
						{data.data[2].map((job) => (
							<JobCard key={job.id} job={job} />
						))}
					</div>
				</div>
			)}
		</div>
	);
}
