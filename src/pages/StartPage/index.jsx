import React from 'react';

import './StartPage.css';
import startLogo from '../../images/startLogo.png';

export default function StartPage() {
	return (
		<div className="start page__start">
			<div className="start__container-gradient">
				<div className="start__gradien-top" />
				<div className="start__gradient-right" />
				<div className="start__gradient-bottom" />
			</div>
			<div className="start__block">
				<div className="start page__start">
					<div className="start__container">
						<img
							className="start__image"
							src={startLogo}
							alt="Логотип приложения EasyHrs"
						/>
						<h1 className="start__title">EasyHrs</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
