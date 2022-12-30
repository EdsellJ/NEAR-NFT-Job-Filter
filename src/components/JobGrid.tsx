import JobCard from "components/JobCard";
import jobs from "json/jobs.json";

export default function JobGrid() {
	return (
		<div className="grid gap-x-16 gap-y-8 grid-cols-2 w-4/6">
			{jobs.map((job, index) => (
				<JobCard key={`${job}-${index}`} job={job} />
			))}
		</div>
	);
}
