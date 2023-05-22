module.exports = {
	module: {
		rules: [
			// Regla para procesar archivos Sass
			{
				test: /\.s[ac]ss$/i,
				use: ['vue-style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
