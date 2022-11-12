import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import MainLayout from 'layouts/MainLayout';
import FinalFormInput from 'components/FinalFormInput';
import Dropzone from 'components/Dropzone';
import { useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import { registerCompany } from 'utils/company';
import { generateRandomToken } from 'utils';

const Company = () => {
	const [file, setFile] = useState({});
	console.log(file);

	const companyTypes = useAppSelector(
		(state: RootState) => state.companySlice.type
	);

	const companySizes = useAppSelector(
		(state: RootState) => state.companySlice.size
	);

	const token = generateRandomToken(64);

	console.log(token);

	const _companyTypes = companyTypes.map((companyType) => {
		return {
			value: companyType._id,
			label: companyType.type,
		};
	});

	const _companySizes = companySizes.map((companySize) => {
		return {
			value: companySize._id,
			label: companySize.size,
		};
	});
	return (
		<MainLayout title='Register Company'>
			<Form
				onSubmit={registerCompany}
				render={({ handleSubmit }) => (
					<form className='container py-8' onSubmit={handleSubmit}>
						<h1 className='text-primary text-center'>REGISTER YOUR COMPANY</h1>
						<div className='flex sm:flex-col gap-4 mt-8 mb-4 sm:mb-0'>
							<div className='overflow-hidden rounded-md sm:mx-auto min-w-[264px] min-h-[264px] bg-opacity-0'>
								<Dropzone
									acceptType={{ 'image/*': [] }}
									setFile={(f: any, type: any) => {
										setFile({ file: f, type: type });
									}}
								/>
							</div>
							<div className='grow'>
								<Field id='name' name='name' label='Name*' placeholder='Apple'>
									{(props: any) => <FinalFormInput {...props} required />}
								</Field>
								<div className='grid grid-cols-2 sm:grid-cols-1 gap-x-2'>
									<Field
										id='type'
										name='type'
										label='Type*'
										placeholder='Please select'
										options={_companyTypes}
									>
										{(props: any) => (
											<FinalFormInput component='select' required {...props} />
										)}
									</Field>
									<Field
										id='url'
										name='url'
										label='Website URL'
										placeholder='https://www.example.com'
									>
										{(props: any) => <FinalFormInput {...props} />}
									</Field>
									<Field
										id='location'
										name='location'
										label='Location*'
										placeholder='Location'
									>
										{(props: any) => <FinalFormInput required {...props} />}
									</Field>
									<Field
										id='size'
										name='size'
										label='Size*'
										placeholder='Please select'
										options={_companySizes}
									>
										{(props: any) => (
											<FinalFormInput component='select' {...props} required />
										)}
									</Field>
									<Field
										id='founded'
										name='founded'
										label='Founded Date'
										placeholder='MM/DD/YYYY'
									>
										{(props: any) => <FinalFormInput required {...props} />}
									</Field>
									<Field
										type='email'
										id='contact'
										name='contact'
										label='Contact*'
										placeholder='info@example.com'
									>
										{(props: any) => <FinalFormInput {...props} required />}
									</Field>
								</div>
							</div>
						</div>
						<Field
							id='description'
							name='description'
							label='Description'
							placeholder='Please write about your company'
						>
							{(props: any) => (
								<FinalFormInput component='textarea' rows={10} {...props} />
							)}
						</Field>
						<Field
							id='token'
							name='token'
							label='Token*'
							defaultValue={token}
							disabled
						>
							{(props: any) => <FinalFormInput {...props} required />}
						</Field>
						<button className='primary ml-auto mt-6'>REGISTER</button>
					</form>
				)}
			/>
		</MainLayout>
	);
};

export default Company;
