/* eslint-disable no-console */
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Header from '../../components/Header';
import ProfileAvatarSection from '../../components/ProfileAvatarSection';
import ProfileForm from '../../components/ProfileForm';
import './ProfilePage.css';
import ProfileInput from '../../components/ProfileInput';
import * as text from '../../utils/constants';
import ProfileFormButton from '../../components/ProfileFormButton';
import roundArrow from '../../images/icon-roundArrow.svg';
import ProfileFormExitButton from '../../components/ProfileFormExitButton';
import Sidebar from '../../components/Sidebar';
import ResetPasswordForm from '../../components/ResetPasswordForm';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import userApi from '../../utils/UserApi';
import plusIcon from '../../images/icon-profileAddButton.svg';

export default function ProfilePage({ onSetCurrentUser }) {
	const { email, username, firstName, lastName, id, photo } =
		useContext(UserContext);
	const [disabledNameInputs, setDisabledNameInputs] = useState(true);
	const [disabledNicknameInputs, setDisabledNicknameInputs] = useState(true);
	const [disabledEmailInputs, setDisabledEmailInputs] = useState(true);
	const [isPasswordFormOpen, setIsPasswordFormOpen] = useState(false);
	const nav = useNavigate();
	const { values, handleChange, errors } = useFormAndValidation({
		firstName,
		lastName,
		username,
		email,
		photo,
	});

	const handleEnableInputs = (input) => {
		switch (input) {
			case 'name':
				setDisabledNameInputs(!disabledNameInputs);
				break;
			case 'email':
				setDisabledEmailInputs(!disabledEmailInputs);
				break;
			case 'nickname':
				setDisabledNicknameInputs(!disabledNicknameInputs);
				break;
			default:
				setDisabledNameInputs(true);
				setDisabledNicknameInputs(true);
				setDisabledEmailInputs(true);
				break;
		}
	};

	const handleExit = () => {
		localStorage.clear();
		sessionStorage.clear();
		nav('/');
	};

	const handleOpenPasswordForm = () => {
		setIsPasswordFormOpen(true);
	};

	const handleClosePasswordForm = () => {
		setIsPasswordFormOpen(false);
	};

	const setCurrentUserData = (newData) => {
		onSetCurrentUser({
			email: newData.email,
			username: newData.username,
			firstName: newData.first_name,
			lastName: newData.last_name,
			id: newData.id,
			photo: newData.photo,
		});
	};
	const handlePatchUserName = async (e) => {
		try {
			e.preventDefault();
			if (values.firstName !== firstName || values.lastName !== lastName) {
				const newData = await userApi.changeUserData(
					{
						email: values.email,
						first_name: values.firstName,
						last_name: values.lastName,
					},
					id
				);
				setCurrentUserData(newData);
				handleEnableInputs('name');
				return;
			}
			handleEnableInputs('name');
		} catch (error) {
			console.log(error);
		}
	};

	const handlePatchUserNickname = async (e) => {
		try {
			e.preventDefault();
			if (values.username !== username) {
				const newData = await userApi.changeUserData(
					{
						email: values.email,
						username: values.username,
					},
					id
				);
				setCurrentUserData(newData);
				handleEnableInputs('nickname');
				return;
			}
			handleEnableInputs('nickname');
		} catch (error) {
			console.log(error);
		}
	};

	const handlePatchUserEmail = async (e) => {
		try {
			e.preventDefault();
			if (!errors.email && values.email !== email) {
				console.log(errors);
				console.log(e.target);
				const newData = await userApi.changeUserData(
					{
						email: values.email,
					},
					id
				);
				setCurrentUserData(newData);
				handleEnableInputs('email');
				return;
			}
			if (values.email === email) handleEnableInputs('email');
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const getUserData = async () => {
			const userData = await userApi.getCurrentUser();
			console.log(userData);
			setCurrentUserData(userData);
		};
		getUserData();
	}, [photo]);

	return (
		<section className="profile">
			<Header sectionName={text.profileSectionName} />
			<div className="profile__container">
				<h2 className="profile__subtitle">{text.profileUserDataSubtitle}</h2>
				<ProfileAvatarSection
					image={values.photo}
					onchange={handleChange}
					onSetCurrentUser={setCurrentUserData}
				/>
				<ProfileForm
					formName="nameForm"
					text={text.profileNameFormText}
					showInputs={firstName || lastName}
					showSubmitButton={!disabledNameInputs}
					onSubmit={handlePatchUserName}
					buttonIcon={plusIcon}
				>
					{text.nameInputs.map((input) => (
						<ProfileInput
							type={input.type}
							name={input.name}
							label={input.label}
							key={input.name}
							value={values[input.name]}
							disabled={disabledNameInputs}
							onEnable={() => handleEnableInputs('name')}
							onChange={handleChange}
						/>
					))}
				</ProfileForm>
				<ProfileForm
					formName="nicknameForm"
					text={text.profileNicknameFormText}
					showInputs={username}
					showSubmitButton={!disabledNicknameInputs}
					onSubmit={handlePatchUserNickname}
					buttonIcon={plusIcon}
				>
					{text.nickInput.map((input) => (
						<ProfileInput
							type={input.type}
							name={input.name}
							label={input.label}
							key={input.name}
							value={values[input.name]}
							disabled={disabledNicknameInputs}
							onEnable={() => handleEnableInputs('nickname')}
							onChange={handleChange}
						/>
					))}
				</ProfileForm>
				<h2 className="profile__subtitle">{text.profileLoginInfoSubtitle}</h2>
				<ProfileForm
					showInputs
					showSubmitButton={!disabledEmailInputs}
					onSubmit={handlePatchUserEmail}
					buttonIcon={plusIcon}
				>
					<ProfileInput
						type="email"
						name="email"
						label="E-mail"
						disabled={disabledEmailInputs}
						onEnable={() => handleEnableInputs('email')}
						value={values.email}
						onChange={handleChange}
						required
					/>
				</ProfileForm>
				<ProfileFormButton
					buttonImg={roundArrow}
					text={text.profileResetPassText}
					onclick={handleOpenPasswordForm}
				/>
				<ProfileFormExitButton
					text={text.profileExitBtnText}
					onclick={handleExit}
				/>
			</div>
			<Sidebar
				isOpen={isPasswordFormOpen}
				handleClose={handleClosePasswordForm}
			>
				<ResetPasswordForm handleSidebarClose={handleClosePasswordForm} />
			</Sidebar>
		</section>
	);
}
