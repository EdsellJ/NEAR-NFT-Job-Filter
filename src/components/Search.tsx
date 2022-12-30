import Button from "components/Button";

export default function Search() {
	return (
		<form className="search space-x-6 w-full flex items-center my-4">
			<div className="input w-full relative">
				<img
					src="/images/search.png"
					alt="search"
					className="absolute w-full top-3.5 left-8 w-4"
				/>
				<input
					className="rounded border-blue w-full py-2 pl-16"
					placeholder="Search by title"
				/>
			</div>
			<div className="input w-full relative">
				<img
					src="/images/location.png"
					alt="search"
					className="absolute top-3.5 w-4 left-8"
				/>
				<input
					className="rounded w-full border-blue py-2 pl-16"
					placeholder="City, state or zipcode"
				/>
			</div>
			<Button className="bg-deep-blue py-2 px-6 text-white rounded-full" text="Search" />
		</form>
	);
}
