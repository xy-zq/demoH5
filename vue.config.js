const path = require('path')
const myTheme = path.resolve(__dirname, "./src/assets/vantChange.less")

module.exports = {
	outputDir: process.env.outputDir, //build输出目录
	lintOnSave: false, //是否开启eslint
	indexPath: './html/index.html',
	productionSourceMap: false,
	publicPath: process.env.NODE_ENV === 'production' ? '../' : '/',
	configureWebpack: {
		resolve: {
			modules: [path.resolve('node_modules'), 'node_modules'],
		}
	},
	css: {
		loaderOptions: {
			less: {
				modifyVars: {
					hack: `true; @import "${myTheme}";`
				}
			},
		}
	},
	devServer: {
		open: true, //设置自动打开
	},
}
