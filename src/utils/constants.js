// Текст формы Регистрации
export const passInputHint = 'Пароль должен содержать не менее 8 символов';
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
export const emailPlaceholder = 'Введите ваш Email';
export const passPlaceholder = 'Введите пароль';
export const repeatPassPlaceholder = 'Повторите пароль';

// Текст формы восстановления пароля

export const passFormTitle = 'Забыли пароль?';
export const passFormInputHint =
	'Укажите свой Email под которым вы зарегистрированы на сайте и на него будет отправлена информация для восстановления пароля';
export const passFormSubmitBtnText = 'Отправить';

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
