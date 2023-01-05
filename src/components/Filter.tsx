import Checkbox from "./Checkbox";

export default function Filter() {
	return (
		<aside className="w-4/12 mt-20 bg-white p-8  border border-gray h-96 rounded-xl">
			<h4 className="text-xl font-bold text-deep-blue ">Filter</h4>
			<h5 className="text-lg font-bold my-4 text-deep-blue ">Salary</h5>

			<input type="range" className="w-full my-1" />

			<h5 className="text-lg font-bold my-4 text-deep-blue ">Job Type</h5>
			<Checkbox label="Full Time" />
			<Checkbox label="Contract" />
			<Checkbox label="Internship" />
		</aside>
	);
}
