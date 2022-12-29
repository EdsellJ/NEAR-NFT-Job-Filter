import { Link } from "react-router-dom";

import menuContent from "json/menu.json";

export default function Menu() {
	return (
		<nav>
			<ul>
				{menuContent.map((item) => (
					<li key={item.text}>
						<Link to={item.link}>{item.text}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
