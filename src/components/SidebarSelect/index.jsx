/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Dropdown } from 'primereact/dropdown';
import './SidebarSelect.css';
import SidebarCheckbox from '../SidebarCheckbox';

/* Проп items имеет тип:
{
  selected: null | {id: number, title: string}, 
  all: [{id: number, title: string}]
} 
*/
const SidebarSelect = ({ items, setItems, placeholder }) => {
	const { selected, all } = items;

	const handleSelect = (e) => {
		const { id } = e.value.props;
		setItems((prevState) => ({
			...prevState,
			selected: prevState.all.find((item) => item.id === Number(id)),
		}));
	};

	return (
		<Dropdown
			style={{}}
			className="sidebar-select"
			onChange={handleSelect}
			placeholder={selected?.title || placeholder}
			options={all.map((item) => (
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
		// <div className="sidebar-select__container">
		// 	<div onClick={toggleOpen} className="sidebar-select">
		// 		<p className="sidebar-select__selected-item">
		// 			{selected?.title || placeholder}
		// 		</p>
		// 	</div>
		// 	{isOpen && (
		// 		<div className="sidebar-select__options-container">
		// 			{all.map((item) => (
		// <div
		// 	onClick={handleSelect}
		// 	key={item.id}
		// 	id={item.id}
		// 	className="sidebar-select__options-element"
		// >
		// 	<SidebarCheckbox
		// 		name={item.title}
		// 		isChecked={item.id === selected?.id}
		// 		readOnly
		// 	/>
		// 	<span>{item.title}</span>
		// </div>
		// 			))}
		// 		</div>
		// 	)}
		// </div>
	);
};

export default SidebarSelect;
