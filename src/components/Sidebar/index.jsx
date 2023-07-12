import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import closeImage from '../../images/icon-close.svg';
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
			<>
				<div onClickCapture={handleClose} className="sidebar__overlay" />
				<div className="sidebar" style={style}>
					{children}
					<button className="sidebar__close-button" onClick={handleClose}>
						<img
							className="sidebar__close-button-img"
							alt="Закрыть"
							src={closeImage}
						/>
					</button>
				</div>
			</>,
			container
		)
	);
};

export default Sidebar;
