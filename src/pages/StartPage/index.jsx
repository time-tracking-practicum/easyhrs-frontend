import { useState, useEffect } from 'react';

import './StartPage.css';
import startLogo from '../../images/startLogo.png';
import Login from '../../components/Login';
import Registration from '../../components/Registration';
import RemindPassForm from '../../components/RemindPassForm';

export default function StartPage() {
	const [isRegistration, setIsRegistration] = useState(true);
	const [isLogin, setIslogin] = useState(false);
	const [isRemindPassForm, setIsRemindPassForm] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(true);
		}, 3000);
	}, []);

	function goToLoginForm() {
		setIsRegistration(false);
		setIslogin(true);
	}

	function goToRegForm() {
		setIslogin(false);
		setIsRegistration(true);
	}

	function goToRemindPass() {
		setIslogin(false);
		setIsRemindPassForm(true);
	}

	return (
		<div className="start page__start">
			<div className="start__container-gradient">
				<div className="start__gradien-top" />
				<div className="start__gradient-right" />
				<div className="start__gradient-bottom" />
			</div>
			<div className="start__block">
				{isLogin && (
					<Login
						onFormChange={() => goToRegForm()}
						remindPass={() => goToRemindPass()}
						isVisible={isVisible}
					/>
				)}
				{isRegistration && (
					<Registration
						onFormChange={() => goToLoginForm()}
						isVisible={isVisible}
					/>
				)}
				{isRemindPassForm && <RemindPassForm isVisible={isVisible} />}
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
