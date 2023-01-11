import { useLocation } from "react-router-dom";

import NFTLayout from "layouts/NFTLayout";
import jobContent from "json/jobs.json";
import toSlug from "utils/toSlug";
import Button from "components/Button";

export default function JobboardDetails() {
	const location = useLocation();
	const jobDetails = jobContent.filter((item) => {
		const jobSlug = toSlug(`${item.title}-at-${item.company}`);
		return location.pathname.includes(jobSlug);
	})[0];

	return (
		<NFTLayout title="Job board" className="jobboard pb-14">
			<section className="container py-8 text-primary">
				<div className="button-group my-4 flex items-center justify-between">
					<div className="left flex space-x-8 items-center justify-between">
						<img src={jobDetails.logo} className="" alt={jobDetails.title} />
						{jobDetails.tags.map((item) => (
							<Button
								key={item}
								text={item}
								className="border-blue px-4 py-2 rounded-full text-primary hover-bg-light-blue"
							/>
						))}
						<p className="flex items-center">
							<img src="/images/location.svg" alt="location" className="mr-2" />{" "}
							{jobDetails.location}
						</p>
					</div>
					<Button
						className="bg-primary px-4 py-2 text-white rounded-full hover-bg-primary"
						text="Apply with My Profile"
					/>
				</div>
				<h2 className="text-primary my-4">{jobDetails.title}</h2>
				<p className="my-3">{jobDetails.salary}</p>
				<h4 className="text-primary my-2">About us</h4>
				<p className="my-1 leading-loose w-4/5">{jobDetails.aboutUs}</p>
				<h4 className="text-primary my-2">Responsibilities</h4>
				<ul>
					{jobDetails.responsibilities.map((item, index) => (
						<li key={`${item}-${index}`} className="my-2">
							{item}
						</li>
					))}
				</ul>
				<h4 className="text-primary my-2">Requirements</h4>
				<ul>
					{jobDetails.responsibilities.map((item, index) => (
						<li key={`${item}-${index}`} className="my-2">
							{item}
						</li>
					))}
				</ul>
			</section>
		</NFTLayout>
	);
}
