import { useLocation } from "react-router-dom";
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
				{status === "error" ? (
					<p>unable to fetch job details</p>
				) : status === "loading" ? (
					<SpinnerRipple centerRipple />
				) : (
					jobDetails && (
						<div className="job-details">
							<div className="button-group my-4 flex items-center justify-between">
								<div className="left flex space-x-4 items-center justify-between">
									<h3>{jobDetails.company}</h3>
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
							<h3 className="text-primary my-4">{jobDetails.title}</h3>
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
