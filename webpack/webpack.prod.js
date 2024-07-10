const TerserPlugin = require('terser-webpack-plugin')

process.env.NODE_ENV = 'production'

module.exports = {
	mode: 'production',
	devtool: 'source-map',
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				parallel: true,
			}),
		],
	},
}
