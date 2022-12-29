import { Link } from "react-router-dom";

import menuContent from "json/menu.json";

export default function Menu() {
	return (
		<nav className="w-1/3 flex items-center">
			<ul className="w-2/3 flex space-x-6">
				{menuContent.map((item) => (
					<li key={item.text}>
						<Link to={item.link}>{item.text}</Link>
					</li>
				))}
			</ul>
			<img src="/images/dino-icons.png" alt="dino-icon" className="w-8" />
		</nav>
	);
}
