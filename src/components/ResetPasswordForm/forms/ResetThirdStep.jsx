import { PASSWORD_FROMS_TEXT as TEXT } from '../../../utils/constants';
import SidebarButton from '../../SidebarButton';

const ResetThirdStep = ({ onSubmit }) => (
	<>
		<p className="resetForm__text resetForm__text_bold">
			{TEXT.RESET.THIRD.DESCRIPTION}
		</p>
		<form
			className="resetForm__form"
			action="#"
			name="reset-password"
			onSubmit={onSubmit}
		>
			<div className="resetForm__btnContainer resetForm__btnContainer_justify-center">
				<SidebarButton
					size="primary"
					type="submit"
					text={TEXT.RESET.THIRD.CONTINUE_BUTTON}
				/>
			</div>
		</form>
	</>
);

export default ResetThirdStep;
