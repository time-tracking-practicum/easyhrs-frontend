import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Header from '../../components/Header';
import ProfileAvatarSection from '../../components/ProfileAvatarSection';
import ProfileForm from '../../components/ProfileForm';
import './ProfilePage.css';
import ProfileInput from '../../components/ProfileInput';
import {
	nameInputs,
	nickInput,
	profileAvatarBtnText,
	profileNameFormText,
	profileNicknameFormText,
	profileSectionName,
	profileUserDataSubtitle,
} from '../../utils/constants';

export default function ProfilePage() {
	const { name, email, nickname } = useContext(UserContext);
	const [disabledNameInputs, setDisabledNameInputs] = useState(true);
	const [disabledNicknameInputs, setDisabledNicknameInputs] = useState(true);

	const handleEnableNameInputs = () => {
		setDisabledNameInputs(!disabledNameInputs);
	};

	const handleEnableNicknameInputs = () => {
		setDisabledNicknameInputs(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setDisabledNameInputs(true);
		setDisabledNicknameInputs(true);
	};

	return (
		<section className="profile">
			<Header sectionName={profileSectionName} />
			<div className="profile__container">
				<h2 className="profile__subtitle">{profileUserDataSubtitle}</h2>
				<ProfileAvatarSection text={profileAvatarBtnText} />
				<ProfileForm
					text={profileNameFormText}
					showInputs={name && email}
					showSubmitButton={!disabledNameInputs}
					onSubmit={handleSubmit}
				>
					{nameInputs.map((input) => (
						<ProfileInput
							name={input.name}
							label={input.label}
							key={input.name}
							disabled={disabledNameInputs}
							onEnable={handleEnableNameInputs}
						/>
					))}
				</ProfileForm>
				<ProfileForm
					text={profileNicknameFormText}
					showInputs={nickname}
					showSubmitButton={!disabledNicknameInputs}
					onSubmit={handleSubmit}
				>
					{nickInput.map((input) => (
						<ProfileInput
							name={input.name}
							label={input.label}
							key={input.name}
							disabled={disabledNicknameInputs}
							onEnable={handleEnableNicknameInputs}
						/>
					))}
				</ProfileForm>
			</div>
		</section>
	);
}
