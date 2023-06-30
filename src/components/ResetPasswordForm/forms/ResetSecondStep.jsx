import { PASSWORD_FROMS_TEXT as TEXT } from '../../../utils/constants';
import SidebarButton from '../../SidebarButton';
import SidebarInput from '../../SidebarInput';

const ResetSecondStep = ({
	values,
	errors,
	handleChange,
	isValid,
	onSubmit,
	onButtonsClick,
}) => {
	const arePasswordsEqual = values.newPassword === values.confirmPassword;

	return (
		<>
			<p className="resetForm__text">{TEXT.RESET.SECOND.DESCRIPTION}</p>
			<form
				className="resetForm__form"
				action="#"
				name="reset-password"
				onSubmit={onSubmit}
			>
				<fieldset className="resetForm__fieldset">
					{!arePasswordsEqual &&
						!!values.newPassword &&
						!!values.confirmPassword && (
							<span className="resetForm-error">Пароли не совпадают</span>
						)}
					<SidebarInput
						value={values.newPassword}
						type="password"
						name="newPassword"
						hidden
						autoComplete="new-password"
						errText={errors.newPassword}
						onChange={handleChange}
						error={errors.newPassword}
						min={6}
						required
						isValid={isValid}
						placeholder="Новый пароль"
					/>
					<SidebarInput
						value={values.confirmPassword}
						type="password"
						name="confirmPassword"
						hidden
						autoComplete="new-password"
						errText={errors.confirmPassword}
						onChange={handleChange}
						error={errors.confirmPassword}
						min={6}
						required
						isValid={isValid}
						placeholder="Подтверждение пароля"
					/>
				</fieldset>
				<div className="resetForm__btnContainer">
					<SidebarButton
						size="primary"
						type="submit"
						text={TEXT.RESET.SECOND.CONTINUE_BUTTON}
					/>
					<SidebarButton
						size="primary"
						type="cancel"
						text={TEXT.RESET.SECOND.CANCEL_BUTTON}
						onClick={onButtonsClick[0]}
					/>
				</div>
			</form>
		</>
	);
};

export default ResetSecondStep;
