System.config({
	transpiler: 'babel',
	map: {
		// only versions 5 work with bower and npm
		
		// with cdn directly
		// babel: 'https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.js',
		
		// with cdn via bower
		// babel: 'bower_components/browser/index.js',
		
		// with npm install specific version
		babel: 'node_modules/babel-core/browser.js',
	}
});