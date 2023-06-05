import Header from '../../components/Header';
import './MainPage.css';

export default function MainPage() {
	return (
		<div className="main page__main">
			<div className="main__menu">
				<h3 className="main__menu-title">EasyHrs</h3>
			</div>
			<div className="main__container">
				<Header sectionName="Мои задачи" newtask />
			</div>
		</div>
	);
}
