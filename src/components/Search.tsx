import { useState } from "react";
import Button from "components/Button";
import { useAppDispatch } from "app/hooks";
import { searchJobs } from "redux/slices/searchSlice";

export default function Search() {
	const dispatch = useAppDispatch();
	const [searchJob, setSearchJob] = useState({
		title: "",
		location: "",
	});

	function handleInput(e: any) {
		setSearchJob({
			...searchJob,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e: any) {
		e.preventDefault();
		dispatch(searchJobs(searchJob));
	}

	return (
		<div className="search mb-4 flex w-full justify-between items-center">
			<Button
				className="bg-primary text-white py-2 px-6 rounded-full hover-bg-primary"
				text="Post a Job"
			/>
			<form
				className="search space-x-6 w-9/12 flex items-center my-4"
				onSubmit={handleSubmit}
			>
				<div className="input w-11/12 relative">
					<img
						src="/images/search.svg"
						alt="search"
						className="absolute top-3.5 w-4 left-8"
					/>
					<input
						className="rounded border-blue w-full py-2 pl-16"
						placeholder="Search by title"
						name="title"
						onChange={handleInput}
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
						name="location"
						onChange={handleInput}
					/>
				</div>
				<Button
					className="text-primary py-2 px-6 border-blue rounded-full hover-bg-light-blue"
					type="submit"
					text="Search"
				/>
			</form>
		</div>
	);
}
