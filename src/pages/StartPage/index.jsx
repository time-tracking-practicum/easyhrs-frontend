import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import Login from '../../components/Login';
import Registration from '../../components/Registration';
import RemindPassForm from '../../components/RemindPassForm';

import startLogo from '../../images/startLogo.png';
import logoTop from '../../images/logo-top.svg';
import logoLeft from '../../images/logo-left.svg';
import logoBottom from '../../images/logo-bottom.svg';

import './StartPage.css';

export default function StartPage({ onSetCurrentUser }) {
	const [isRegistration, setIsRegistration] = useState(true);
	const [isLogin, setIslogin] = useState(false);
	const [isRemindPassForm, setIsRemindPassForm] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const nav = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(true);
		}, 3000);
	}, []);

	useEffect(() => {
		const localToken = localStorage.getItem('token');
		const sessionToken = sessionStorage.getItem('token');
		if (localToken || sessionToken) {
			nav('/main');
		}
	});

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
				<img className="start__logo-top" src={logoTop} alt="Логотип EasyHrs" />
				<img
					className="start__logo-left"
					src={logoLeft}
					alt="Логотип EasyHrs"
				/>
				<img
					className="start__logo-bottom"
					src={logoBottom}
					alt="Логотип EasyHrs"
				/>
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
						onSetCurrentUser={onSetCurrentUser}
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
