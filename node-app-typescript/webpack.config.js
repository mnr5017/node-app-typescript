'use strict'

//only two options that are required are entry and target. We declare our entry 
//point using the entry field, and we tell Webpack we’re working in Node.js with 
//the target field.


module.exports = (env = {}) => {
	const config = {
		entry: ['./src/main.js'],
		mode: env.development ? 'development' : 'production',
		target: 'node',
		devtool: env.development ? 'cheap-eval-source-map' : false,
		resolve: { // tells webpack what files to watch
		  extensions: ['.ts', '.js'],
		  modules: ['node_modules', 'src', 'package.json'],
		},
		module: {
		  rules: [
		    {
		    	test: /\.ts$/,
		    	use: 'ts-loader',
		    },
		  ],
		},
		plugins: [] // requires for config.plugins.push(...);
	};

	if (env.nodemon) {
	  config.watch = true;
	  config.plugins.push(new NodemonPlugin());
	}

  return config;
};