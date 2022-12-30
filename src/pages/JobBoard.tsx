import NFTLayout from "layouts/NFTLayout";

import Search from "components/Search";
import Filter from "components/Filter";
import JobGrid from "components/JobGrid";

export default function JobBoard() {
	return (
		<NFTLayout title="Job board" className="jobboard">
			<section className="container mt-2">
				<Search />
				<div className="view flex justify-between">
					<Filter />
					<JobGrid />
				</div>
			</section>
		</NFTLayout>
	);
}
