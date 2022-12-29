import Logo from "components/Logo";
import Menu from "components/Menu";

export default function NFTHeader() {
	return (
		<header className="w-full shadow">
			<div className="container mx-auto">
				<div className="flex w-full items-center justify-between py-8">
					<Logo />
					<Menu />
				</div>
			</div>
		</header>
	);
}
