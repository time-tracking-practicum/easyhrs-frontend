import { PASSWORD_FROMS_TEXT as TEXT } from '../../../utils/constants';
import SidebarButton from '../../SidebarButton';

const ForgotSecondStep = ({ onSubmit }) => (
	<>
		<p className="resetForm__text resetForm__text_bold">
			{TEXT.FORGOT.SECOND.DESCRIPTION}
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
					text={TEXT.FORGOT.SECOND.CONTINUE_BUTTON}
				/>
			</div>
		</form>
	</>
);

export default ForgotSecondStep;
