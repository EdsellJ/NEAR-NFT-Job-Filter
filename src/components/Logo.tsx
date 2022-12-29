import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to="/" className="w-1/6">
			<img src="/images/logo.png" alt="Logo" />
		</Link>
	);
}
