import { useState } from "react";
import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import MainLayout from "layouts/MainLayout";
import FinalFormInput from "components/FinalFormInput";
import Dropzone from "components/Dropzone";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";
import { generateRandomToken } from "utils";
import { getCompanyList } from "redux/slices/companySlice";
import '../../styles/mixin/_title.css';

const Company = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [token, setToken] = useState("");
	const [file, setFile] = useState<any>();
	const [image, setImage] = useState<any>();

	const industries = useAppSelector((state: RootState) => state.companySlice.industry);

	const companySizes = useAppSelector((state: RootState) => state.companySlice.size);

	const _industries = (industries ?? []).map((industry) => {
		return {
			value: industry._id,
			label: industry.type,
		};
	});

	const _companySizes = (companySizes ?? []).map((companySize) => {
		return {
			value: companySize._id,
			label: companySize.size,
		};
	});

	const registerCompany = async (val: Record<any, any>) => {
		if (file === undefined) {
			toast.warning("Please upload logo");
			return;
		}
		try {
			await axios.post("http://localhost:8080/api/company", {
				...val,
				img: image,
				token,
			});
			toast.success("Company registered!");
			dispatch(getCompanyList());
			navigate("/");
		} catch (err: any) {
			toast.error(err.response.data);
		}
	};

	const classes = {
		form: {
			border: '1px solid #ccc',
			padding: '20px',
			boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
			borderRadius: '3px',
			marginTop: '5vh',
			marginBottom: '5vh'
		}
	}

	return (
		<MainLayout title="Register Company">
			<Form
				onSubmit={registerCompany}
				render={({ handleSubmit }) => (
					<>
					<div style={{ height: '5vh' }}></div>
						<h1 className="title text-center">REGISTER YOUR COMPANY</h1>
						<form className="container py-8" onSubmit={handleSubmit} style={classes.form}>
							<div className="flex sm:flex-col gap-4 mt-8 mb-4 sm:mb-0">
								<div className="overflow-hidden rounded-md sm:mx-auto min-w-[264px] max-w-[264px] min-h-[264px] max-h-[264px] bg-opacity-0">
									<Dropzone
										acceptType={{ "image/*": [] }}
										setFile={(f: any, type: any) => {
											setFile({ file: f, type: type });
										}}
										setImage={(i: any) => {
											setImage(i);
										}}
									/>
								</div>
								<div className="grow">
									<Field id="name" name="name" label="Name*" placeholder="Apple">
										{(props: any) => <FinalFormInput {...props} required />}
									</Field>
									<div className="grid grid-cols-2 sm:grid-cols-1 gap-x-2">
										<Field
											id="industry"
											name="industry"
											label="Industry*"
											placeholder="Please select"
											options={_industries}
										>
											{(props: any) => (
												<FinalFormInput component="select" required {...props} />
											)}
										</Field>
										<Field
											id="url"
											name="url"
											label="Website URL"
											placeholder="https://www.example.com"
										>
											{(props: any) => <FinalFormInput {...props} />}
										</Field>
										<Field
											id="location"
											name="location"
											label="Location*"
											placeholder="Location"
										>
											{(props: any) => <FinalFormInput required {...props} />}
										</Field>
										<Field
											id="size"
											name="size"
											label="Size*"
											placeholder="Please select"
											options={_companySizes}
										>
											{(props: any) => (
												<FinalFormInput component="select" {...props} required />
											)}
										</Field>
										<Field
											id="founded"
											name="founded"
											label="Founded Date"
											placeholder="MM/DD/YYYY"
										>
											{(props: any) => <FinalFormInput required {...props} />}
										</Field>
										<Field
											type="email"
											id="contact"
											name="contact"
											label="Contact*"
											placeholder="info@example.com"
										>
											{(props: any) => <FinalFormInput {...props} required />}
										</Field>
									</div>
								</div>
							</div>
							<Field
								id="description"
								name="description"
								label="Description"
								placeholder="Please write about your company"
							>
								{(props: any) => (
									<FinalFormInput component="textarea" rows={10} {...props} />
								)}
							</Field>
							<div
								className="flex gap-2 items-center font-bold"
								onClick={() => setToken(generateRandomToken(40))}
								style={{marginTop: '2vh'}}
							>
								Token:
								<input
									type="text"
									value={token}
									className="border border-darkgrey rounded-full outline-none w-full px-5 py-2"
									placeholder="Click to generate a new token"
									disabled
									title="Click to generate a new token"
								/>
							</div>
							<button className="primary ml-auto mt-6">REGISTER</button>
						</form>
					</>
				)}
			/>
		</MainLayout>
	);
};

export default Company;
