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

// Текст кнопок на странице профиля
export const radioButtons = [
	{
		title: 'Пароль + СМС',
		text: 'Вход с паролем и коротким кодом из смс или почты',
		value: 'option1',
		name: 'sms',
	},
	{
		title: 'Одноразовый пароль',
		text: 'Вход с одноразовым паролем из смс или почты',
		value: 'option2',
		name: 'oneTimePass',
	},
	{
		title: 'Обычный пароль',
		text: 'Пароль должен быть сложным и уникальным',
		value: 'option3',
		name: 'usualPass',
	},
];
