import { useState } from "react";
import { Form, Field } from "react-final-form";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MainLayout from "layouts/MainLayout";
import FinalFormInput from "components/FinalFormInput";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { getAllJobs } from "redux/slices/jobSlice";

const Company = () => {
	const dispatch = useAppDispatch();
	const [requiredSkill, setRequiredSkill] = useState([""]);
	const [remote, setRemote] = useState(false);
	const navigate = useNavigate();
	const _companyList = useAppSelector(
		(state: RootState) => state.companySlice.companyList
	);

	const companyNames = (_companyList ?? []).map((_company: Record<any, any>) => {
		return { value: _company._id, label: _company.name };
	});

	const _skills = useAppSelector((state: RootState) => state.jobSlice.skill);

	const skills = (_skills ?? []).map((_skill: Record<any, any>) => {
		return { label: _skill.name, value: _skill.name };
	});

	const _types = useAppSelector((state: RootState) => state.jobSlice.type);

	const types = (_types ?? []).map((_type: Record<any, any>) => {
		return { value: _type._id, label: _type.type };
	});

	const handleSelectSkill = async (items: any) => {
		let temp = [];
		for (let item of items) {
			temp.push(item.value);
		}
		setRequiredSkill(temp);
	};

	const registerJob = async (val: any) => {
		try {
			await axios.post("/api/job", {
				...val,
				remote: remote,
				skill: requiredSkill,
				walletAddress: "educoinapp.testnet",
			});
			toast.success("Job Posted Successfully");
			dispatch(getAllJobs(""));
			navigate("/");
		} catch (err: any) {
			toast.error(err.response.data.message);
		}
	};

	return (
		<MainLayout title="POST JOB">
			<Form
				onSubmit={(val) => registerJob(val)}
				render={({ handleSubmit }) => (
					<form className="container py-8" onSubmit={handleSubmit}>
						<h1 className="text-primary text-center">POST A JOB</h1>
						<div className="grid">
							<Field
								id="companyId"
								name="companyId"
								label="Company Name*"
								placeholder="Select your company"
								options={companyNames}
							>
								{(props: any) => (
									<FinalFormInput component="select" {...props} required />
								)}
							</Field>
							<Field
								id="title"
								name="title"
								label="Title*"
								placeholder="Senior Full Stack Engineer"
							>
								{(props: any) => <FinalFormInput {...props} required />}
							</Field>
							<div className="flex gap-4">
								<Field
									id="location"
									name="location"
									label="Location*"
									placeholder="123 St, Washington DC"
								>
									{(props: any) => <FinalFormInput {...props} required />}
								</Field>
								<div
									className="flex items-center gap-2 mt-5"
									onClick={() => setRemote((prev) => !prev)}
								>
									<label htmlFor="remote">Remote</label>
									<input type="checkbox" id="remote" defaultChecked={remote} />
								</div>
							</div>
							<div className="flex gap-x-4 md:flex-col">
								<Field
									id="type"
									name="type"
									label="Type*"
									placeholder="Select your job type"
									options={types}
								>
									{(props: any) => (
										<FinalFormInput component="select" {...props} required />
									)}
								</Field>
								<Field
									id="from"
									name="from"
									label="Salary Range(Annual - From)"
									placeholder="100000"
								>
									{(props: any) => <FinalFormInput {...props} />}
								</Field>
								<Field
									id="to"
									name="to"
									label="Salary Range(Annual - To)"
									placeholder="100000"
								>
									{(props: any) => <FinalFormInput {...props} />}
								</Field>
							</div>
							<Select
								options={skills}
								isMulti
								className="my-3"
								placeholder="Select required skills"
								onChange={handleSelectSkill}
							/>
						</div>
						<Field
							id="description"
							name="description"
							label="Description*"
							placeholder="Please write about your company"
						>
							{(props: any) => (
								<FinalFormInput component="textarea" rows={10} {...props} required />
							)}
						</Field>
						<button className="primary ml-auto mt-6">POST</button>
					</form>
				)}
			/>
		</MainLayout>
	);
};

export default Company;
