interface Props {
	className: string;
	type?: "button" | "submit" | "reset";
	text: string;
	onClickHandler?: () => void;
}

export default function Button({
	className,
	type = "button",
	text,
	onClickHandler,
}: Props) {
	return (
		<button className={className} type={type} onClick={onClickHandler}>
			{text}
		</button>
	);
}
