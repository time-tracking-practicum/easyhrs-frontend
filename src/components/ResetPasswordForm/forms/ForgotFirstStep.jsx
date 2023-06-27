import { PASSWORD_FROMS_TEXT as TEXT } from '../../../utils/constants';
import SidebarButton from '../../SidebarButton';
import SidebarInput from '../../SidebarInput';

const ForgotFirstStep = ({
	values,
	errors,
	handleChange,
	isValid,
	onSubmit,
}) => (
	<>
		<p className="resetForm__text">{TEXT.FORGOT.FIRST.DESCRIPTION}</p>
		<form
			className="resetForm__form"
			action="#"
			name="reset-password"
			onSubmit={onSubmit}
		>
			<fieldset className="resetForm__fieldset">
				<SidebarInput
					value={values.email}
					type="email"
					name="email"
					hidden
					autoComplete="email"
					errText={errors.email}
					onChange={handleChange}
					error={errors.email}
					required
					isValid={isValid}
					placeholder="E-mail"
				/>
			</fieldset>
			<div className="resetForm__btnContainer">
				<SidebarButton
					size="primary"
					type="submit"
					text={TEXT.FORGOT.FIRST.CONTINUE_BUTTON}
				/>
				<SidebarButton
					size="primary"
					type="cancel"
					text={TEXT.FORGOT.FIRST.CANCEL_BUTTON}
				/>
			</div>
		</form>
	</>
);

export default ForgotFirstStep;
