interface Props {
	label: string;
}

export default function Checkbox({ label }: Props) {
	return (
		<div className="flex items-center text-deep-blue my-4">
			<input type="checkbox" className="mr-4" />
			<label>{label}</label>
		</div>
	);
}
