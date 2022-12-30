import NFTLayout from "layouts/NFTLayout";

import Filter from "components/Filter";
import JobGrid from "components/JobGrid";

export default function JobBoard() {
	return (
		<NFTLayout title="Job board" className="jobboard pb-14">
			<section className="container mt-2">
				<div className="view space-x-10 mt-2 flex justify-between">
					<Filter />
					<JobGrid />
				</div>
			</section>
		</NFTLayout>
	);
}
