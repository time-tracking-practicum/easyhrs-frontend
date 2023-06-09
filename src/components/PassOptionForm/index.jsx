import { useState } from 'react';
import { radioButtons } from '../../utils/constants';
import PassOptionRadioBtn from '../PassOptionRadioBtn';
import './PassOptionForm.css';

export default function PassOptionForm() {
	const [checked, setChecked] = useState('option1');
	const isChecked = (value) => value === checked;
	const onSelect = ({ target: { value } }) => {
		setChecked(value);
	};
	return (
		<form className="profile__passOptions">
			<h2 className="profile__passOptions-title">Способ входа</h2>
			{radioButtons.map((button) => (
				<PassOptionRadioBtn
					key={button.name}
					title={button.title}
					text={button.text}
					value={button.value}
					name={button.name}
					checked={isChecked(button.value)}
					onSelect={onSelect}
				/>
			))}
		</form>
	);
}
