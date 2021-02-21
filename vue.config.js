module.exports = {
  pages: {
  	'index': {
  		entry: './src/main.js',
  		template: 'index.html',
  		title: 'Home',
  		filename: 'index.html',
  		chunks: ['chunk-vendors', 'chunk-common', 'index']
  	}
  }
}
