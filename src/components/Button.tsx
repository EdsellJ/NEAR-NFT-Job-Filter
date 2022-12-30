interface Props {
	className: string;
	text: string;
	onClickHandler?: () => void;
}

export default function Button({ className, text, onClickHandler }: Props) {
	return (
		<button className={className} onClick={onClickHandler}>
			{text}
		</button>
	);
}
