import Button from "components/Button";

export default function Search() {
	return (
		<div className="search mb-4 flex w-full justify-between items-center">
			<Button
				className="bg-deep-blue text-white py-2 px-6 rounded-full"
				text="Post a Job"
			/>
			<form className="search space-x-6 w-9/12 flex items-center my-4">
				<div className="input w-11/12 relative">
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
				<div className="input w-11/12 relative">
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
				<Button
					className="text-deep-blue py-2 px-6 border-blue rounded-full"
					text="Search"
				/>
			</form>
		</div>
	);
}