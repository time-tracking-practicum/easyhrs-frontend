import './Help.css';

import HelpList from './HelpList';
import HelpForm from './HelpForm';

function Help() {
	return (
		<div className="help__container">
			<HelpList />
			<HelpForm />
		</div>
	);
}

export default Help;
