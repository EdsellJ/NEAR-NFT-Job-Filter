import NFTLayout from "layouts/NFTLayout";
import Filter from "components/Filter";
import JobGrid from "components/JobGrid";
import Search from "components/Search";

export default function JobBoard() {
	return (
		<NFTLayout title="Job board" className="jobboard pb-14">
			<section className="container mt-2">
				<Search />
				<div className="view space-x-10 mt-2 flex relative items-start justify-between">
					<Filter />
					<JobGrid />
				</div>
			</section>
		</NFTLayout>
	);
}
