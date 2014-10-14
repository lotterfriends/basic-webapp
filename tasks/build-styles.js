module.exports = function(grunt) {

  grunt.registerTask('build-styles', function() {


    var sync = {
      scripts: {
        files: [
          {
            cwd: './src/styles',
            src: [
              '*.scss'
            ],
            dest: './build/styles'
          }
        ]
      }
    };
    grunt.config.set('sync', sync);
    grunt.task.run('sync');

    // Convert css from sass files
    var sass = {
      all: {
        files: [{
          expand: true,
          cwd: './build/styles',
          src: '*.scss',
          dest: './build/styles',
          ext: '.css'
        }]
      }
    };
    grunt.config.set('sass', sass);
    grunt.task.run('sass');
   

  });

}