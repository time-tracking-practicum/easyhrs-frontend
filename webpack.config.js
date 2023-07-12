const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

let mode = 'development'; // По умолчанию режим development
let target = 'web';

if (process.env.NODE_ENV === 'production') {
	// Режим production, если
	// при запуске вебпака было указано --mode=production
	mode = 'production';
	target = 'browserslist'; // в продакшен режиме используем browserslist
}

const plugins = [
	new HtmlWebpackPlugin({
		template: './src/index.html', // Данный html будет использован как шаблон
	}),
	new MiniCssExtractPlugin({
		filename: '[name].[contenthash].css', // Формат имени файла
	}),
]; // Создаем массив плагинов

if (process.env.SERVE) {
	// Используем плагин только если запускаем devServer
	plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
	mode,
	target,
	plugins,
	entry: './src/index.jsx', // Указываем точку входа - главный модуль приложения,
	// в который импортируются все остальные
	devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, 'build'), // Директория, в которой будет
		// размещаться итоговый бандл, папка build в корне приложения
		assetModuleFilename: 'assets/[hash][ext][query]', // Все ассеты будут
		// складываться в build/assets
		clean: true, // Очищает директорию dist перед обновлением бандла
		// Свойство стало доступно с версии 5.20.0, до этого использовался
		// CleanWebpackPlugin
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '/'),
		},
		compress: true,
		port: 3000,
		hot: true, // Включает автоматическую перезагрузку страницы при изменениях
		open: true, // Открывает при запуске
		historyApiFallback: true,
	},
	module: {
		rules: [
			{ test: /\.(html)$/, use: ['html-loader'] }, // Добавляем загрузчик для html
			{
				test: /\.(s[ac]|c)ss$/i, // /\.(le|c)ss$/i если вы используете less
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			}, // Добавляем загрузчики стилей
			{
				test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
				type: 'asset/resource',
				// В режиме разработки все изображения будут помещаться в build/assets
			},
			{
				test: /\.(woff2?|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/, // не обрабатываем файлы из node_modules
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true, // Использование кэша для избежания рекомпиляции
						// при каждом запуске
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
};
