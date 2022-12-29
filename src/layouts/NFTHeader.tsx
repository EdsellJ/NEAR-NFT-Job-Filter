import Logo from "components/Logo";
import Menu from "components/Menu";

export default function NFTHeader() {
	return (
		<header className="container mx-auto justify-between">
			<Logo />
			<Menu />
		</header>
	);
}
