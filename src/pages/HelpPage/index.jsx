import './HelpPage.css';

import Header from '../../components/Header';
import Help from '../../components/Help';

import feedbackApi from '../../utils/FeedbackApi';

function HelpPage() {
	const handlePostFeedback = async (user, email, message) => {
		try {
			await feedbackApi.postFeedback(user, email, message);
			alert('Ваша проблема отправлена, ожидайте.');
		} catch (error) {
			console.log(`Ошибка: ${error.message}`);
			alert('Произошла проблема при отправке.');
		}
	};

	return (
		<section className="help">
			<Header sectionName="Помощь" />
			<Help handleFeedback={handlePostFeedback} />
		</section>
	);
}

export default HelpPage;
