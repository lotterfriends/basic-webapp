'use strict';

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.loadTasks('./tasks');
	
	// configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('./package.json'),
	});

	grunt.registerTask('default', [
		'setup',
		'build-scripts',
		'build-styles',
		'build-pages',
		'release'
	]);

};