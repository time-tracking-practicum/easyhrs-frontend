import { useState } from 'react';

import './HelpItem.css';

import iconPlus from '../../../images/icon-plus.svg';
import iconMinus from '../../../images/icon-minus.svg';

function HelpItem({ infoName, infoText }) {
	const [toggleButton, setToggleButton] = useState(false);

	const handleToggleButton = () => setToggleButton(!toggleButton);

	return (
		<>
			<button className="help__item" onClick={handleToggleButton}>
				<h4 className="help__item-name">{infoName}</h4>
				<img
					className="help__icon-toggle"
					src={toggleButton ? iconMinus : iconPlus}
					alt=""
				/>
			</button>
			<p className={`help__info ${toggleButton ? 'help__info_visible' : ''}`}>
				{infoText}
			</p>
		</>
	);
}

export default HelpItem;
