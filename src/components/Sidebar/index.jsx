import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Sidebar.css';

const Sidebar = ({ children, isOpen, handleClose, style = {} }) => {
	useEffect(() => {
		const escapeClose = (e) => {
			if (e.key === 'Escape') {
				handleClose();
			}
		};
		document.body.addEventListener('keydown', escapeClose);
		return () => document.body.removeEventListener('keydown', escapeClose);
	}, [handleClose]);

	const container = document.getElementById('react-sidebar');

	return (
		isOpen &&
		createPortal(
			<div className="sidebar__overlay">
				<div className="sidebar" style={style}>
					{children}
				</div>
			</div>,
			container
		)
	);
};

export default Sidebar;
