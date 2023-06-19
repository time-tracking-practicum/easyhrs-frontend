import './NavTab.css';
import { Link } from 'react-router-dom';

export default function NavTab() {
	return (
		<nav className="navtab">
			<Link to="/main">
				<h3 className="navtab__logo">EasyHrs</h3>
			</Link>
			<Link to="/main" className="navtab__item">
				Главная
			</Link>
			<Link to="/matrix" className="navtab__item">
				Матрица
			</Link>
			<Link to="/statistics" className="navtab__item">
				Статистика
			</Link>
			<Link to="/settings" className="navtab__item">
				Настройки
			</Link>
			<Link to="/help" className="navtab__item">
				Помощь
			</Link>
		</nav>
	);
}
