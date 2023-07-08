import './HelpItem.css';

function HelpItem({ infoName }) {
	return (
		<button onClick={() => console.log('123')} className="help__item">
			<h4 className="help__item-name">{infoName}</h4>
		</button>
	);
}

export default HelpItem;
