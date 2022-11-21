// import { useState } from "react";
import { Link } from "react-router-dom";
import { getDateFormat } from "utils/job";

type Props = {
	job: any;
};

const JobListItem = (props: Props) => {
	// const [shown, setShown] = useState(false);
	const { job } = props;

	return (
		<Link
			// to={`/job/${job._id}`}
			to="/"
			className=" gap-4 transition-all duration-200 ease-in-out border-2 border-lightgrey rounded-md p-4 bg-white hover:shadow-md shadow-indigo-500/50"
			// onClick={() => setShown((prev) => !prev)}
		>
			<div className="text-sm text-darkgrey" style={{ float: "right" }}>
				{getDateFormat(job.postedAt)}{" "}
				<p>
					<b>{job.type.type}</b>
				</p>
			</div>
			<div className="flex gap-4">
				<img
					src={job.companyId.img}
					alt=""
					className="shadow-md shadow-indigo-500/50 border border-lightgrey w-20 h-20 p-0.5"
				/>
				<div className="w-1/5 mt-auto">
					<p className="mt-auto text-md text-[#3F495A] font-bold">{job.companyId.name}</p>
					<p className="text-sm text-[#2F394A]">
						{job.location} {job.remote && "· Remote"}
					</p>
				</div>
				<div className="flex flex-col w-full m-auto ml-4">
					<p className="flex text-lg font-bold">{job.title}</p>
					<div
						className="mt-1 flex flex-wrap gap-x-3 text-base font-semibold"
						style={{ color: "#6B6EF9" }}
					>
						{job.skill.map((skill: string, index: number) => (
							<div className="flex gap-1 items-center" key={index}>
								<div className="rounded-full w-1.5 h-1.5 bg-black bg-opacity-75" />
								{skill}
							</div>
						))}
					</div>
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
