import { Link } from "react-router-dom";

export default function Logo() {
	return (
		<Link to="/">
			<img src="/images/logo.png" alt="Logo" />
		</Link>
	);
}