module.exports = function(grunt) {

	grunt.registerTask('setup', function() {

		var tasks = [],
			clean = {},
			mkdir = {},
			bowercopy = {},
			amd_tamer = {};

		// cleanup previews stuff
		clean = [	
			'./build',
			'./dist'
		];
		tasks.push('clean');
		grunt.config.set('clean', clean);

		// create folders
		mkdir = {
			basic: {
				options: {
					create: [
						'./build',
						'./build/images',
						'./build/styles',
						'./build/scripts',
						'./build/pages',
						'./build/vendor',
						'./build/vendor/styles',
						'./build/vendor/scripts',
						'./dist'
					]
				}
			}
		};
		tasks.push('mkdir');
		grunt.config.set('mkdir', mkdir);


		bowercopy = {
			options: {
				destPrefix: 'build/vendor'
			},
			libs: {
				files: {
					// requirejs
					'scripts/requirejs/requirejs.js': 'requirejs/require.js',
					// flight
					'scripts/flight/index.js': 'flight/index.js',
					'scripts/flight/advice.js': 'flight/lib/advice.js',
					'scripts/flight/base.js': 'flight/lib/base.js',
					'scripts/flight/component.js': 'flight/lib/component.js',
					'scripts/flight/compose.js': 'flight/lib/compose.js',
					'scripts/flight/debug.js': 'flight/lib/debug.js',
					'scripts/flight/logger.js': 'flight/lib/logger.js',
					'scripts/flight/registry.js': 'flight/lib/registry.js',
					'scripts/flight/utils.js': 'flight/lib/utils.js',
					// jquery
					'scripts/jquery/jquery.js': 'jquery/dist/jquery.js'
				}
			}
		};
		tasks.push('bowercopy');
		grunt.config.set('bowercopy', bowercopy);

		amd_tamer = {
			requirejs : {
				options: {
					base: './build/vendor/scripts/requirejs/'
				},
				files: {
					'./build/vendor/scripts/requirejs/requirejs.tamed.js':
						[
							'./build/vendor/scripts/requirejs/*.js'
						]
				}
			},
			flight: {
				options: {
					base: './build/vendor/scripts/flight/'
				},
				files: {
					'./build/vendor/scripts/flight/flight.tamed.js':
						[
							'./build/vendor/scripts/flight/*.js'
						]
				}
			}
		};
		tasks.push('amd_tamer:requirejs');
		tasks.push('amd_tamer:flight');
		
		grunt.config.set('amd_tamer', amd_tamer);

		// run tasks
		grunt.task.run(tasks);

	});

}