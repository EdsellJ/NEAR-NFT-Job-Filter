interface Props {
	job: {
		title: string;
		salary: string;
		tags: string[];
		logo: string;
		posted: string;
	};
}

export default function JobCard({ job }: Props) {
	return (
		<div className="border bg-white border-gray rounded-xl py-5 px-4">
			<div className="top flex justify-between">
				<div className="w-1/5">
					<img className="w-4/5" src={job.logo} alt={job.title} />
				</div>
				<div className="w-4/5">
					<h5 className="text-lg">{job.title}</h5>
					<p>{job.salary}</p>
					<ul className="space-x-3 flex mt-4">
						{job.tags.map((item) => (
							<li key={item} className="rounded-full border border-blue py-1 px-4">
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="bottom mt-6 flex justify-between items-center">
				<p>{job.posted}</p>
				<img src="/images/bookmark.png" alt="bookmark this job" className="w-3.5" />
			</div>
		</div>
	);
}
