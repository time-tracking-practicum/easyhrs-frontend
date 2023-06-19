import './NavTab.css';
import { Link } from 'react-router-dom';

export default function NavTab() {
	return (
		<nav className="navtab">
			<Link to="/" className="navtab__item">
				Главная
			</Link>
		</nav>
	);
}
