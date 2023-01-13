import NFTLayout from "layouts/NFTLayout";
import Filter from "components/Filter";
import JobGrid from "components/JobGrid";
import Search from "components/Search";
import useScroll from "hooks/useScroll";

export default function JobBoard() {
	const { scroll } = useScroll();
	return (
		<NFTLayout title="Job board" className="jobboard pb-14">
			<section className="container mt-2">
				<Search />
				<div className="view space-x-10 mt-2 flex relative items-start justify-between">
					<Filter scroll={scroll} />
					<JobGrid scroll={scroll} />
				</div>
			</section>
		</NFTLayout>
	);
}
