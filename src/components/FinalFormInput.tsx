interface Props {
	type?: string;
	component?: 'input' | 'textarea' | 'select' | 'autocomplete';
	input: any;
	id?: string;
	name?: string;
	label?: string;
	placeholder?: string;
	defaultValue?: string;
	options?: any;
	disabled?: boolean;
	readOnly?: boolean;
	required?: boolean;
	rows?: number;
	pipe?: (value: string) => string;
}

const FinalFormInput = ({
	type = 'text',
	component = 'input',
	input,
	id,
	name,
	label,
	placeholder,
	defaultValue,
	options,
	disabled = false,
	readOnly = false,
	required = false,
	rows = 3,
	pipe,
	...props
}: Props) => {
	const handleChange = (e: any) => {
		input.onChange(pipe ? pipe(e.target.value) : e.target.value);
	};

	return (
		<div>
			{label !== '' && (
				<label htmlFor={id} className='ml-2 text-xs font-bold'>
					{label}
				</label>
			)}
			{component === 'input' && (
				<input
					type={type}
					id={id}
					name={name}
					className='border border-darkgrey rounded-full outline-none w-full px-5 py-2'
					placeholder={placeholder}
					defaultValue={defaultValue}
					disabled={disabled}
					onChange={handleChange}
					required={required}
					{...input}
				/>
			)}
			{component === 'select' && (
				<select
					id={id}
					name={name}
					className='border border-darkgrey rounded-full outline-none w-full px-5 py-2 appearance-none'
					defaultValue=''
					onChange={handleChange}
					required={required}
				>
					<option value='' disabled selected hidden>
						{placeholder}
					</option>
					{options.map((option: any, index: number) => (
						<option className='my-2' key={index} value={option.value}>
							{option.label}
						</option>
					))}{' '}
				</select>
			)}
			{component === 'textarea' && (
				<textarea
					type={type}
					id={id}
					name={name}
					rows={rows}
					className='border border-darkgrey rounded-2xl outline-none w-full px-5 py-3'
					placeholder={placeholder}
					defaultValue={defaultValue}
					disabled={disabled}
					onChange={handleChange}
					required={required}
					{...input}
				/>
			)}
		</div>
	);
};

export default FinalFormInput;
