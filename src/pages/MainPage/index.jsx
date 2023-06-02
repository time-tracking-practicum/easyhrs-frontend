import React from 'react';

import './Main.css';
import img from '../../images/mainLogo.png';

export default function MainPage() {
	return (
		<div className="main page__main">
			<div className="main__container">
				<img
					className="main__image"
					src={img}
					alt="Логотип приложения EasyHrs"
				/>
				<h1 className="main__title">EasyHrs</h1>
			</div>
		</div>
	);
}
