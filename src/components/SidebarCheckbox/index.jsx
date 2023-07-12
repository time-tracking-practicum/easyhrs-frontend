import './SidebarCheckbox.css';

const SidebarCheckbox = ({ isChecked, onChange, name, text, readOnly }) => (
	// eslint-disable-next-line jsx-a11y/label-has-associated-control
	<label className="sidebar-checkbox">
		<div
			className={`sidebar-checkbox__mark ${
				isChecked
					? 'sidebar-checkbox__mark_checked'
					: 'sidebar-checkbox__mark_unchecked'
			}`}
		/>
		{text}
		<input
			onChange={onChange}
			className="sidebar-checkbox__input"
			name={name}
			type="checkbox"
			checked={isChecked}
			readOnly={readOnly}
		/>
	</label>
);

export default SidebarCheckbox;
