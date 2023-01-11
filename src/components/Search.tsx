import Button from "components/Button";

export default function Search() {
	return (
		<div className="search mb-4 flex w-full justify-between items-center">
			<Button
				className="bg-primary text-white py-2 px-6 rounded-full hover-bg-primary"
				text="Post a Job"
			/>
			<form className="search space-x-6 w-9/12 flex items-center my-4">
				<div className="input w-11/12 relative">
					<img
						src="/images/search.svg"
						alt="search"
						className="absolute top-3.5 w-4 left-8"
					/>
					<input
						className="rounded border-blue w-full py-2 pl-16"
						placeholder="Search by title"
					/>
				</div>
				<div className="input w-11/12 relative">
					<img
						src="/images/location.svg"
						alt="search"
						className="absolute top-3.5 w-4 left-8"
					/>
					<input
						className="rounded w-full border-blue py-2 pl-16"
						placeholder="City, state or zipcode"
					/>
				</div>
				<Button
					className="text-primary py-2 px-6 border-blue rounded-full hover-bg-light-blue"
					text="Search"
				/>
			</form>
		</div>
	);
}
