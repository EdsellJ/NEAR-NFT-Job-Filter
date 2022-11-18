import { useState } from "react";
import { Link } from "react-router-dom";
import { getDateFormat } from "utils/job";

type Props = {
	job: any;
};

const JobListItem = (props: Props) => {
	const [shown, setShown] = useState(false);
	const { job } = props;
	return (
		<Link
			// to={`/job/${job._id}`}
			to="/"
			className="flex gap-4 transition-all duration-200 ease-in-out rounded-md p-4 bg-white cursor-pointer hover:shadow-md"
			onClick={() => setShown((prev) => !prev)}
		>
			<img src={job.companyId.img} alt="" className="shadow-md w-20 h-20" />
			<div className="flex flex-col w-full">
				<p className="text-base font-bold">{job.title}</p>
				<p className="text-sm text-[#3F495A]">{job.companyId.name}</p>
				<p className="mt-auto text-sm text-[#2F394A]">
					{job.location} {job.remote && "· Remote"}
				</p>
				<div className="flex flex-wrap gap-x-3 text-sm text-darkgrey">
					<p>{job.type.type}</p> {getDateFormat(job.postedAt)}
				</div>
				<div className="mt-1 flex flex-wrap gap-x-3 text-sm font-semibold text-warning">
					{job.skill.map((skill: string, index: number) => (
						<div className="flex gap-1 items-center" key={index}>
							<div className="rounded-full w-1.5 h-1.5 bg-black bg-opacity-75" />
							{skill}
						</div>
					))}
				</div>
				{/* <div
					className={`${
						shown ? "h-[100%]" : "h-0"
					} overflow-hidden transition-transform duration-200 ease-in-out w-full text-sm`}
				>
					<p className="mt-4 font-bold">
						Description
						<br />
					</p>
					<textarea className="w-full p-2" max-rows={10} disabled defaultValue={job.description} />
				</div> */}
			</div>
			{/* <div className="text-primary mt-12 ml-auto font-bold sm:hidden">Read more</div> */}
		</Link>
	);
};

export default JobListItem;
