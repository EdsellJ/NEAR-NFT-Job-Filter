import { Form, Field } from "react-final-form";
import MainLayout from "layouts/MainLayout";
import FinalFormInput from "components/FinalFormInput";
import { useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { registerJob } from "utils/job";

const Company = () => {
	const _companyList = useAppSelector(
		(state: RootState) => state.companySlice.companyList
	);

	const companyNames = _companyList.map((_company: Record<any, any>) => {
		return { value: _company._id, label: _company.name };
	});

	return (
		<MainLayout title="Register Company">
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
								<div className="flex items-center gap-2 mt-5">
									<label htmlFor="remote" className="">
										Remote
									</label>
									<input type="checkbox" id="remote" />
								</div>
							</div>
							<div></div>
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
