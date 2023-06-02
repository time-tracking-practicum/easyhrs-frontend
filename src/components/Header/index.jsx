import './Header.css';

import imgLogo from '../../images/logo.png';

export default function Header() {
	return (
		<>
			<h1 className="header">EasyHrs</h1>
			<img src={imgLogo} alt="Картинка Логотип EasyHrs" />
		</>
	);
}
