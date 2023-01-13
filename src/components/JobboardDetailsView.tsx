import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import NFTLayout from "layouts/NFTLayout";
import toSlug from "utils/toSlug";
import { getWeb3Jobs } from "utils/job";
import { jobType } from "@types";
import SpinnerRipple from "components/SpinnerRipple";
import JobBoardBreadCrumb from "components/JobBoardBreadCrumb";
import JobDetails from "components/JobDetails";
import "styles/jobboardDetails.css";

export default function JobboardDetailsView() {
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
				{jobDetails && <JobBoardBreadCrumb company={jobDetails.company} />}
				{status === "error" ? (
					<p>unable to fetch job details</p>
				) : status === "loading" ? (
					<SpinnerRipple centerRipple />
				) : (
					jobDetails && <JobDetails jobDetails={jobDetails} />
				)}
			</section>
		</NFTLayout>
	);
}
