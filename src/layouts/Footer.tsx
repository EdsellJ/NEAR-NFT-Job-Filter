import { Link } from 'react-router-dom';
import links from 'config/footer.json';

const Footer = () => {
	return (
		<footer className='flex flex-wrap justify-center gap-x-8 sm:gap-x-3 gap-y-2 border-t border-grey p-2 text-sm'>
			{links.map((link, index) => (
				<Link
					to={link.url}
					key={`footer-link-${index}`}
					className='font-semibold'
				>
					{link.text}
				</Link>
			))}
		</footer>
	);
};

export default Footer;
