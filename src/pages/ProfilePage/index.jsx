import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
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

export default function ProfilePage() {
	const { name, email = 'Почта', nickname } = useContext(UserContext);
	const [disabledNameInputs, setDisabledNameInputs] = useState(true);
	const [disabledNicknameInputs, setDisabledNicknameInputs] = useState(true);
	const [disabledEmailInputs, setDisabledEmailInputs] = useState(true);
	const { userEmail } = useContext(UserContext);
	const nav = useNavigate();

	const handleEnableInputs = (input) => {
		switch (input) {
			case 'name':
				setDisabledNameInputs(false);
				break;
			case 'email':
				setDisabledEmailInputs(false);
				break;
			case 'nickname':
				setDisabledNicknameInputs(false);
				break;
			default:
				setDisabledNameInputs(true);
				setDisabledNicknameInputs(true);
				setDisabledEmailInputs(true);
				break;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleEnableInputs(e.target.closest('form').name);
	};

	const handleExit = () => {
		localStorage.clear();
		sessionStorage.clear();
		nav('/');
	};

	return (
		<section className="profile">
			<Header sectionName={text.profileSectionName} />
			<div className="profile__container">
				<h2 className="profile__subtitle">{text.profileUserDataSubtitle}</h2>
				<ProfileAvatarSection text={text.profileAvatarBtnText} />
				<ProfileForm
					formName="nameForm"
					text={text.profileNameFormText}
					showInputs={name && email}
					showSubmitButton={!disabledNameInputs}
					onSubmit={handleSubmit}
				>
					{text.nameInputs.map((input) => (
						<ProfileInput
							name={input.name}
							label={input.label}
							key={input.name}
							disabled={disabledNameInputs}
							onEnable={() => handleEnableInputs('name')}
						/>
					))}
				</ProfileForm>
				<ProfileForm
					formName="nicknameForm"
					text={text.profileNicknameFormText}
					showInputs={nickname}
					showSubmitButton={!disabledNicknameInputs}
					onSubmit={handleSubmit}
				>
					{text.nickInput.map((input) => (
						<ProfileInput
							name={input.name}
							label={input.label}
							key={input.name}
							disabled={disabledNicknameInputs}
							onEnable={() => handleEnableInputs('nickname')}
						/>
					))}
				</ProfileForm>
				<h2 className="profile__subtitle">{text.profileLoginInfoSubtitle}</h2>
				<ProfileForm
					showInputs={email}
					showSubmitButton={!disabledEmailInputs}
					onSubmit={handleSubmit}
				>
					<ProfileInput
						name="email"
						label="E-mail"
						disabled={disabledEmailInputs}
						onEnable={() => handleEnableInputs('email')}
						value={userEmail}
					/>
				</ProfileForm>
				<ProfileFormButton
					buttonImg={roundArrow}
					text={text.profileResetPassText}
				/>
				<ProfileFormExitButton
					text={text.profileExitBtnText}
					onclick={handleExit}
				/>
			</div>
		</section>
	);
}
