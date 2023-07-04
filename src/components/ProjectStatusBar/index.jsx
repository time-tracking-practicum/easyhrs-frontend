import './ProjectStatusBar.css';

export default function ProjectStatusBar({ title }) {
	return (
		<li className="projectstatus">
			<div className="projectstatus__info">
				<div className="projectstatus__info-wrapper">
					<h4 className="projectstatus__info-name">{title}</h4>
					<button className="projectstatus__info-btn">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M10 17L15 12L10 7V17Z" fill="black" />
						</svg>
					</button>
				</div>
				<p className="projectstatus__info-time">1 час 56 мин</p>
			</div>
			<div className="projectstatus__bar">
				<span className="projectstatus__progress" />
			</div>
		</li>
	);
}
