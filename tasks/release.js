module.exports = function(grunt) {

  grunt.registerTask('release', function() {

    var tasks = [],
      sync = {};
      
    var sync = {
      scripts: {
        files: [
          {
            cwd: './build/styles',
            src: [
              '*.css', '*.map' 
            ],
            dest: './dist/styles'
          },
          {
            cwd: './build/scripts',
            src: [
              '**'
            ],
            dest: './dist/scripts'
          },
          {
            cwd: './build/pages',
            src: [
              '*'
            ],
            dest: './dist'
          },
          {
            cwd: './bower_components/bootstrap/dist/fonts',
            src: [
              '*'
            ],
            dest: './dist/fonts'
          },
          {
            cwd: './bower_components/bootstrap/dist/css',
            src: [
              '*.min.css', '*.map'
            ],
            dest: './dist/styles'
          },
          {
            cwd: './bower_components/bootstrap/dist/js',
            src: [
              '*.min.js'
            ],
            dest: './dist/scripts'
          }
        ]
      }
    };
    grunt.config.set('sync', sync);
    grunt.task.run('sync');


  });

}