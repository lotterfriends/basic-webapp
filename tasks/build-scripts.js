module.exports = function(grunt) {

	grunt.registerTask('build-scripts', function() {

		var tasks = [],
			sync = {},
			concat = {};
			
		var sync = {
			scripts: {
				files: [
					{
						cwd: './src/scripts',
						src: [
							'**'
						],
						dest: './build/scripts'
					},
					{
						cwd: './build/vendor/scripts/jquery',
						src: [
							'*'
						],
						dest: './build/scripts'
					}
				]
			}
		};

		grunt.config.set('sync', sync);
		grunt.task.run('sync');

		concat = {
			vendors: {
				src: [
					// external libraries
					'./build/vendor/scripts/requirejs/requirejs.tamed.js',
					'./build/vendor/scripts/**/*.tamed.js'
				],
				dest: './build/scripts/vendors.js'
			}
		}

		grunt.config.set('concat', concat);
		grunt.task.run('concat');

	});

}