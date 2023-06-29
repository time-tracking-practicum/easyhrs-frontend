// Текст формы Регистрации
export const passInputHint =
	'Пароль может содержать цифры и латинские буквы Минимальная длина — 6 символов';
export const regFormInputHint = 'Уже есть аккаунт?';
export const regFormTitle = 'Регистрация';
export const regFormHitnButtonText = 'Войти';
export const regFormSubmitBtnText = 'Зарегистрироваться';

// Текст формы входа
export const loginFormInputHint = 'Еще нет аккаунта?';
export const loginFormTitle = 'Вход';
export const loginFormHitnButtonText = 'Зарегистрироваться';
export const loginFormSubmitBtnText = 'Войти';
export const loginFormForgetPassText = 'Забыли пароль?';

// Плейсхолдеры инпутов
export const emailPlaceholder = 'E-mail';
export const passPlaceholder = 'Пароль';
export const repeatPassPlaceholder = 'Подтверждение пароля';

// Текст формы восстановления пароля

export const passFormTitle = 'Забыли пароль?';
export const passFormInputHint =
	'Введите электронный адрес, указанный при регистрации. На него будет отправлена информаия для восстановления пароля.';
export const passFormSubmitBtnText = 'Отправить';
export const passFormCancelBtnText = 'Отмена';

// Текст страницы профиль
export const profileSectionName = 'Профиль';
export const profileAvatarBtnText = 'Изменить фото';
export const profileNameFormText = 'Добавить имя и фамилию';
export const profileNicknameFormText = 'Добавить никнейм (псевдоним)';
export const profileUserDataSubtitle = 'Персональные данные';
export const profileLoginInfoSubtitle = 'Информация для входа';
export const profileResetPassText = 'Сбросить пароль';
export const profileExitBtnText = 'Выйти из учетной записи';

// Текст инпутов на странице профиля
export const nameInputs = [
	{
		name: 'firstName',
		label: 'Имя',
		type: 'text',
	},
	{
		name: 'lastName',
		label: 'Фамилия',
		type: 'text',
	},
];

export const nickInput = [
	{
		name: 'username',
		label: 'Никнейм',
		type: 'text',
	},
];

// Текст формы сброса и восстановления пароля
export const PASSWORD_FROMS_TEXT = {
	RESET: {
		HEADING: 'Сброс пароля',
		FIRST: {
			DESCRIPTION:
				'Для продолжения необходимо подтвердить, что вы являетесь владельцем аккаунта',
			CANCEL_BUTTON: 'Отменить',
			FORGOT_PASS_BUTTON: 'Забыли пароль?',
			CONTINUE_BUTTON: 'Продолжить',
		},
		SECOND: {
			DESCRIPTION:
				'Пароль может содержать цифры и латинские буквы. Минимальная длина - 6 символов',
			CANCEL_BUTTON: 'Отменить',
			CONTINUE_BUTTON: 'Продолжить',
		},
		THIRD: { DESCRIPTION: 'Пароль успешно изменен', CONTINUE_BUTTON: 'Ок' },
	},
	FORGOT: {
		HEADING: 'Забыли пароль?',
		FIRST: {
			DESCRIPTION:
				'Введите электронный адрес, указанный при регистрации. На него будет отправлена информаия для восстановления пароля.',
			CONTINUE_BUTTON: 'Продолжить',
			CANCEL_BUTTON: 'Отменить',
		},
		SECOND: {
			DESCRIPTION: 'Данные для смены пароля успешно отправлены',
			CONTINUE_BUTTON: 'Ок',
		},
	},
};

export const FORM_STEP = {
	RESET: {
		FIRST: 'STEP_RESET_FIRST',
		SECOND: 'STEP_RESET_SECOND',
		THIRD: 'STEP_RESET_THIRD',
	},
	FORGOT: {
		FIRST: 'STEP_FORGOT_FIRST',
		SECOND: 'STEP_FORGOT_SECOND',
	},
};

export const INITIAL_FORM_STATE = {
	email: '',
	password: '',
	newPassword: '',
	confirmPassword: '',
};
