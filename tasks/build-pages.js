module.exports = function(grunt) {

  grunt.registerTask('build-pages', function() {

    var tasks = [],
      sync = {};
      
    var sync = {
      pages: {
        files: [
          {
            cwd: './src/pages',
            src: [
              '*'
            ],
            dest: './build/pages'
          }
        ]
      }
    };
    grunt.config.set('sync', sync);
    grunt.task.run('sync');


  });

}