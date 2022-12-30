import { NavLink } from "react-router-dom";

import menuContent from "json/menu.json";

export default function Menu() {
	const activeStyle = {
		padding: "8px",
		borderBottom: "3px solid black",
	};

	return (
		<nav className="w-1/3 flex items-center">
			<ul className="w-2/3 flex space-x-6">
				{menuContent.map((item) => (
					<li key={item.text}>
						<NavLink
							to={item.link}
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
						>
							{item.text}
						</NavLink>
					</li>
				))}
			</ul>
			{/* <img src="/images/dino-icons.png" alt="dino-icon" className="w-8" /> */}
		</nav>
	);
}
