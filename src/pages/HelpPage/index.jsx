import './HelpPage.css';

import Header from '../../components/Header';
import Help from '../../components/Help';

function HelpPage() {
	return (
		<section className="help">
			<Header sectionName="Помощь" />
			<Help />
		</section>
	);
}

export default HelpPage;
