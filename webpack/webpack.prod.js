
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

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
	plugins: [
		new BundleAnalyzerPlugin()
	]
}
