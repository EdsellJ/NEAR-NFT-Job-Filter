interface Props {
	type?: string;
	component?: "input" | "textarea" | "select" | "autocomplete";
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
	type = "text",
	component = "input",
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
		<div className="grow">
			{label !== "" && (
				<label htmlFor={id} className="ml-2 text-xs font-bold">
					{label}
				</label>
			)}
			{component === "input" && (
				<input
					type={type}
					id={id}
					name={name}
					className="w-full px-5 py-2"
					style={{ border: '1px solid lightgray', margin: '5px' }}
					placeholder={placeholder}
					defaultValue={defaultValue}
					disabled={disabled}
					onChange={handleChange}
					required={required}
					{...input}
				/>
			)}
			{component === "select" && (
				<select
					id={id}
					name={name}
					className="w-full px-5 py-2 appearance-none"
					style={{ border: '1px solid lightgray', color: 'grey', margin: '5px' }}
					defaultValue=""
					onChange={handleChange}
					required={required}
				>
					<option value="" disabled hidden>
						{placeholder}
					</option>
					{options.map((option: any, index: number) => (
						<option className="my-2" key={index} value={option.value}>
							{option.label}
						</option>
					))}{" "}
				</select>
			)}
			{component === "textarea" && (
				<textarea
					type={type}
					id={id}
					name={name}
					rows={rows}
					className="w-full px-5 py-3"
					style={{ border: '1px solid lightgray', margin: '5px' }}
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
