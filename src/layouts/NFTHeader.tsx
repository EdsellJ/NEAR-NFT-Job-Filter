import Logo from "components/Logo";
import Menu from "components/Menu";

export default function NFTHeader() {
	return (
		<header className="w-full bottom-shadow bg-white">
			<div className="container mx-auto">
				<div className="flex w-full items-center justify-between py-6">
					<Logo />
					<Menu />
				</div>
			</div>
		</header>
	);
}
