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
            dest: './dist/public/styles'
          },
          {
            cwd: './build/scripts',
            src: [
              '**'
            ],
            dest: './dist/public/scripts'
          },
          {
            cwd: './build/pages',
            src: [
              '*'
            ],
            dest: './dist/pages'
          },
          {
            cwd: './bower_components/bootstrap/dist/fonts',
            src: [
              '*'
            ],
            dest: './dist/public/fonts'
          },
          {
            cwd: './bower_components/bootstrap/dist/css',
            src: [
              '*.min.css', '*.map'
            ],
            dest: './dist/public/styles'
          },
          {
            cwd: './bower_components/bootstrap/dist/js',
            src: [
              '*.min.js'
            ],
            dest: './dist/public/scripts'
          }
        ]
      }
    };
    grunt.config.set('sync', sync);
    grunt.task.run('sync');


  });

}