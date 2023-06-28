import { NavLink, useNavigate } from 'react-router-dom';

import iconBell from '../../images/icon-bell.svg';
import iconProfile from '../../images/icon-profile.svg';
import iconBack from '../../images/icon-back.svg';
import './Header.css';

// sectionName='name': Название секции,
// newtask: булевое значение на добавление кнопки,
// branch='name': Название ветки с возвратом назад
function Header({ sectionName, newtask, branch, timer, setDropTimer }) {
	const navigate = useNavigate();
	const handleDrop = () => {
		setDropTimer(true);
	};

	return (
		<div className="header">
			<div className="header__container">
				{sectionName && <h2 className="header__section">{sectionName}</h2>}
				{newtask && (
					<button className="header__button-task">Создать задачу</button>
				)}
				{branch && (
					<div className="header__nav-container">
						<img
							className="header__icon-back"
							src={iconBack}
							width={8}
							height={14}
							alt="Иконка назад"
						/>
						<NavLink className="header__navlink" to={navigate(-1)}>
							{branch}
						</NavLink>
					</div>
				)}
				{timer && (
					<button
						type="button"
						className="header__navlink-timer"
						onClick={handleDrop}
					>
						Свернуть
					</button>
				)}
			</div>
			<div className="header__icons-container">
				<img
					className="header__icon"
					src={iconBell}
					width={20}
					height={22}
					alt="Иконка уведомлений"
				/>
				<NavLink to="/profile">
					<img
						className="header__icon"
						src={iconProfile}
						width={40}
						height={40}
						alt="Иконка профиля"
					/>
				</NavLink>
			</div>
		</div>
	);
}

export default Header;
