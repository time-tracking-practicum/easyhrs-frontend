/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import './SidebarSelect.css';
import SidebarCheckbox from '../SidebarCheckbox';
import SidebarLabel from '../SidebarLabel';
import EditInputButton from '../EditInputButton';

/* Проп items имеет тип:
{
  selected: null | {id: number, title: string}, 
  all: [{id: number, title: string}]
} 
*/
const SidebarSelect = ({
	items,
	setItems,
	placeholder,
	style,
	disabled,
	label,
	isEditable,
}) => {
	const { selected, all } = items;
	const [isDisabled, setIsDisabled] = useState(true);

	const handleEditButtonClick = () => {
		setIsDisabled(false);
	};

	const handleSelect = (e) => {
		const { id } = e.value.props;
		setItems((prevState) => ({
			...prevState,
			selected: prevState.all.find((item) => item.id === Number(id)),
		}));
	};

	return (
		<div className="sidebar-select__wrapper" style={style}>
			<Dropdown
				className="sidebar-select"
				onChange={handleSelect}
				disabled={isEditable ? isDisabled : disabled}
				placeholder={selected?.title || placeholder}
				emptyMessage="Здесь пока пусто"
				options={all?.map((item) => (
					<div className="sidebar-select__options-element" id={item.id}>
						<SidebarCheckbox
							name={item.title}
							isChecked={item.id === selected?.id}
							readOnly
						/>
						<span>{item.title}</span>
					</div>
				))}
			/>
			{label && <SidebarLabel placeholder={placeholder} />}
			{isEditable && isDisabled && (
				<EditInputButton onClick={handleEditButtonClick} />
			)}
		</div>
	);
};

export default SidebarSelect;
