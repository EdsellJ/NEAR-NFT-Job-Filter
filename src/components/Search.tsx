import Button from "components/Button";

export default function Search() {
	return (
		<form className="space-x-8 flex items-center justify-center my-4">
			<div className="input rounded-md bg-white w-80">
				<input
					className="rounded border-blue w-full py-1 px-6"
					placeholder="Search by title"
				/>
			</div>
			<div className="input w-80">
				<input
					className="rounded w-full border-blue py-1 px-6"
					placeholder="City, state or zipcode"
				/>
			</div>
			<Button className="bg-deep-blue py-2 px-8 text-white rounded-full" text="Search" />
		</form>
	);
}
