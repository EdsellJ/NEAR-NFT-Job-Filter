import { Link } from "react-router-dom";

interface Props {
	noLink?: boolean;
}

export default function Logo({ noLink }: Props) {
	return (
		<>
			{noLink ? (
				<img src="/images/logo.png" alt="Logo" />
			) : (
				<Link to="/" className="w-1/6">
					<img src="/images/logo.png" alt="Logo" />
				</Link>
			)}
		</>
	);
}
