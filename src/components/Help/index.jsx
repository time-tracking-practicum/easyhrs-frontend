import './Help.css';

import HelpList from './HelpList';
import HelpForm from './HelpForm';

function Help({ handleFeedback }) {
	return (
		<div className="help__container">
			<HelpList />
			<HelpForm handleFeedback={handleFeedback} />
		</div>
	);
}

export default Help;
