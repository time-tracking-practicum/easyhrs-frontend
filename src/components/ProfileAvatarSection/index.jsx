/* eslint-disable no-console */
import { useContext, useEffect, useRef, useState } from 'react';
import './ProfileAvatarSection.css';
import defaultImg from '../../images/avatar.svg';
import buttonImg from '../../images/icon-pencil_violet.svg';
import { UserContext } from '../../contexts/UserContext';
import userApi from '../../utils/UserApi';

export default function ProfileAvatarSection({ image, getCurrentUser }) {
	const { id, email } = useContext(UserContext);
	const [avatar, setAvatar] = useState(image || defaultImg);
	const filePicker = useRef(null);

	const handlePick = () => {
		filePicker.current.click();
	};

	function encryptPhoto(inputPhoto) {
		return new Promise((res, rej) => {
			const reader = new FileReader();
			reader.readAsDataURL(inputPhoto);
			reader.onloadend = () => {
				const { result } = reader;
				res(result);
			};
			reader.onerror = () => {
				rej(new Error(`Ошибка обработки фото ${inputPhoto}`));
			};
		});
	}

	const handleChange = async (e) => {
		try {
			const result = await encryptPhoto(e.target.files[0]);
			const newUserData = await userApi.changeUserData(
				{
					email: `${email}`,
					photo: result.replace(`data:image/jpeg;base64,`, ``),
				},
				id
			);
			setAvatar(newUserData.photo);
			getCurrentUser();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setAvatar(image);
	}, [image]);

	return (
		<div className="profile__avatar-container">
			<img
				src={avatar}
				alt="Аватар пользователя"
				className="profile__avatar-image"
			/>
			<input
				type="file"
				name="photo"
				className="profile__avatar-input_hidden"
				ref={filePicker}
				onChange={handleChange}
				accept="image/*,.png,.jpg"
			/>
			<button
				className="profile__avatar-button"
				type="button"
				onClick={handlePick}
			>
				<img
					src={buttonImg}
					alt="Иконка кнопки"
					className="profile__avatar-button-img"
				/>
				Изменить фото
			</button>
		</div>
	);
}
