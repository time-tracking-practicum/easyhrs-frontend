import Header from '../../components/Header';
import ProfileForm from '../../components/ProfileForm';
import './ProfilePage.css';

export default function ProfilePage() {
	return (
		<section className="profile">
			<Header sectionName="Профиль" />
			<div className="profile__container">
				<ProfileForm />
			</div>
		</section>
	);
}
