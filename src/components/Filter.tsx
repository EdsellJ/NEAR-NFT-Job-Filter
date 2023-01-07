import CheckboxGroup from "components/CheckboxGroup";
import jobFilter from "json/jobfilter.json";

export default function Filter() {
	return (
		<aside className="w-4/12 bg-white p-8 border border-gray rounded-xl">
			<h4 className="text-xl font-bold text-deep-blue ">Filter</h4>
			<h5 className="text-lg font-bold my-4 text-deep-blue ">Salary</h5>
			<input type="range" className="w-full my-1" />
			<CheckboxGroup title="Job Type" name="jobType" group={jobFilter.jobType} />
			<CheckboxGroup title="Work Style" name="workStyle" group={jobFilter.workStyle} />
		</aside>
	);
}
