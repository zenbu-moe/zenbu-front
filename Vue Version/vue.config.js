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
  	'login': {
  		entry: './src/pages/Login/main.js',
  		template: 'public/index.html',
  		title: 'Login',
  		filename: 'login.html',
  		chunks: ['chunk-vendors', 'chunk-common', 'login']
  	},
  	'registration': {
  		entry: './src/pages/Registration/main.js',
  		template: 'public/index.html',
  		title: 'registration',
  		filename: 'registration.html',
  		chunks: ['chunk-vendors', 'chunk-common', 'registration']
  	},
  }
}
