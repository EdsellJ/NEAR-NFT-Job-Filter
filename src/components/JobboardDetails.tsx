import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import NFTLayout from "layouts/NFTLayout";
import toSlug from "utils/toSlug";
import Button from "components/Button";
import { getWeb3Jobs } from "utils/job";
import { jobType } from "@types";
import SpinnerRipple from "components/SpinnerRipple";
import "styles/jobboardDetails.css";

export default function JobboardDetails() {
	const location = useLocation();

	const { data, status } = useQuery<{ data: jobType[][] }>(["getWeb3Jobs"], getWeb3Jobs);

	const jobDetails =
		status === "success"
			? data.data[2].filter((item) => {
					const jobSlug = toSlug(`${item.title}-at-${item.company}`);
					return location.pathname.includes(jobSlug);
			  })[0]
			: null;

	return (
		<NFTLayout title="Job board" className="jobboard pb-14">
			<section className="container py-8 text-primary">
				{jobDetails && (
					<ul className="breadcrumb flex items-center bg-white pl-4 pr-10 py-1 shadow rounded ">
						<li>
							<Link to="/job-board" className="hover:text-secondary">Job board</Link>
						</li>
						<span className="text-3xl mx-2 -mt-7"> ˲ </span>{" "}
						<li className="font-bold">{jobDetails.company}</li>
					</ul>
				)}
				{status === "error" ? (
					<p>unable to fetch job details</p>
				) : status === "loading" ? (
					<SpinnerRipple centerRipple />
				) : (
					jobDetails && (
						<div className="job-details">
							<div className="button-group my-4 flex items-center justify-between">
								<div className="left flex space-x-4 items-center justify-between">
									<div className="company flex items-center">
										<img
											src="/images/company.png"
											className="w-1/4 mr-1"
											alt="job role"
										/>
										<h3>{jobDetails.company}</h3>
									</div>
									{jobDetails.tags.map((item) => (
										<Button
											key={item}
											text={item}
											className="border-blue px-4 py-1 rounded-full text-primary hover-bg-light-blue"
										/>
									))}
								</div>

								<a
									className="bg-primary px-4 py-2 text-white rounded-full hover-bg-primary"
									href={jobDetails.apply_url}
									target="_blank"
									rel="noreferrer"
								>
									Apply with My Profile
								</a>
							</div>
							<div className="title-row flex items-center">
								<img
									src="/images/briefcase.png"
									className="w-1/12 mr-4"
									alt="job role"
									height="50px"
									width="50px"
								/>
								<h3 className="text-primary my-4">{jobDetails.title}</h3>
							</div>
							<h4 className="flex items-center mb-8">
								<img src="/images/location.svg" alt="location" className="mr-2" />
								{jobDetails.location}
							</h4>
							<div dangerouslySetInnerHTML={{ __html: jobDetails.description }} />
						</div>
					)
				)}
			</section>
		</NFTLayout>
	);
}
