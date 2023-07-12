/* eslint-disable no-nested-ternary */
import './SidebarButton.css';

const SidebarButton = ({ text, type, size, onClick, disabled }) => (
	<button
		className={`sidebar__button ${
			type === 'submit'
				? 'sidebar__button_submit'
				: type === 'cancel'
				? 'sidebar__button_cancel'
				: ''
		} ${
			size === 'primary'
				? 'sidebar__button_primary'
				: size === 'secondary'
				? 'sidebar__button_secondary'
				: ''
		}`}
		type={type === 'submit' ? 'submit' : 'button'}
		onClick={onClick}
		disabled={disabled}
	>
		{text}
	</button>
);

export default SidebarButton;
