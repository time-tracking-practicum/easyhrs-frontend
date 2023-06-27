import { PASSWORD_FROMS_TEXT as TEXT } from '../../../utils/constants';
import SidebarButton from '../../SidebarButton';
import SidebarInput from '../../SidebarInput';

const ResetFirstStep = ({
	values,
	errors,
	handleChange,
	isValid,
	onSubmit,
	onButtonsClick,
}) => (
	<>
		<p className="resetForm__text">{TEXT.RESET.FIRST.DESCRIPTION}</p>
		<form
			className="resetForm__form"
			action="#"
			name="reset-password"
			onSubmit={onSubmit}
		>
			<fieldset className="resetForm__fieldset">
				<SidebarInput
					value={values.password}
					type="password"
					name="password"
					hidden
					autoComplete="current-password"
					errText={errors.password}
					onChange={handleChange}
					error={errors.password}
					min={6}
					required
					isValid={isValid}
					placeholder="Пароль"
				/>
			</fieldset>
			<div className="resetForm__linkContainer">
				<SidebarButton
					onClick={onButtonsClick[0]}
					size="secondary"
					text={TEXT.RESET.FIRST.FORGOT_PASS_BUTTON}
				/>
			</div>
			<div className="resetForm__btnContainer">
				<SidebarButton
					size="primary"
					type="submit"
					text={TEXT.RESET.FIRST.CONTINUE_BUTTON}
				/>
				<SidebarButton
					size="primary"
					type="cancel"
					text={TEXT.RESET.FIRST.CANCEL_BUTTON}
					onClick={onButtonsClick[1]}
				/>
			</div>
		</form>
	</>
);

export default ResetFirstStep;
