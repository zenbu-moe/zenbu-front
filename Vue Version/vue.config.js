module.exports = {
  pages: {
  	'index': {
  		entry: './src/pages/Home/main.js',
  		template: 'public/index.html',
  		title: 'Home',
  		filename: 'index.html',
  		chunks: ['chunk-vendors', 'chunk-common', 'index']
  	},
  	'about': {
  		entry: './src/pages/About/main.js',
  		template: 'public/index.html',
  		title: 'About',
  		filename: 'about.html',
  		chunks: ['chunk-vendors', 'chunk-common', 'about']
  	},
  	'forum': {
  		entry: './src/pages/Forum/main.js',
  		template: 'public/index.html',
  		title: 'Forum',
  		filename: 'forum.html',
  		chunks: ['chunk-vendors', 'chunk-common', 'forum']
  	},
  	'media': {
  		entry: './src/pages/MediaTemplate/main.js',
  		template: 'public/index.html',
  		title: 'Media',
  		filename: 'media.html',
  		chunks: ['chunk-vendors', 'chunk-common', 'media']
  	},
  }
}
