import { useState, useEffect } from 'react';

import Login from '../../components/Login';
import Registration from '../../components/Registration';
import RemindPassForm from '../../components/RemindPassForm';

import startLogo from '../../images/startLogo.png';
import logoTop from '../../images/logo-top.svg';
import logoLeft from '../../images/logo-left.svg';
import logoBottom from '../../images/logo-bottom.svg';

import './StartPage.css';

export default function StartPage({ onSetCurrentUser }) {
	const [isVisible, setIsVisible] = useState(false);
	const [form, setForm] = useState('Register');

	useEffect(() => {
		setTimeout(() => {
			setIsVisible(true);
		}, 3000);
	}, []);

	function showForm(formName) {
		setForm(formName);
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
				{form === 'Login' && (
					<Login
						onFormChange={() => showForm('Register')}
						remindPass={() => showForm('RemindPassForm')}
						isVisible={isVisible}
					/>
				)}
				{form === 'Register' && (
					<Registration
						onFormChange={() => showForm('Login')}
						isVisible={isVisible}
						onSetCurrentUser={onSetCurrentUser}
					/>
				)}
				{form === 'RemindPassForm' && (
					<RemindPassForm
						isVisible={isVisible}
						onCancelButton={() => showForm('Login')}
					/>
				)}
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
