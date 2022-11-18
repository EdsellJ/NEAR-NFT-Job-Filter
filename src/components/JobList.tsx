import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import JobListItem from "./JobListItem";

const JobList = () => {
	const jobs = useAppSelector((state: RootState) => state.jobSlice.jobs);
	return (
		<div className="grid gap-3 w-full">
			{jobs.map((job, index) => (
				<JobListItem job={job} key={index} />
			))}
		</div>
	);
};

export default JobList;
