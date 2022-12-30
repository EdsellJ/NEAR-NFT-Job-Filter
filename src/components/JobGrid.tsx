import Search from "components/Search";
import JobCard from "components/JobCard";
import jobs from "json/jobs.json";

export default function JobGrid() {
	return (
		<div className="jobgrid flex flex-col w-11/12">
			<Search />
			<div className="wrapper mt-2 mx-auto justify-center flex">
				<div className="grid gap-x-16 gap-y-8 grid-cols-2 w-full">
					{jobs.map((job, index) => (
						<JobCard key={`${job}-${index}`} job={job} />
					))}
				</div>
			</div>
		</div>
	);
}
