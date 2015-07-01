module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    'gh-pages': {
      options: {
        base: 'slides',
        message: 'Auto-generated commit'
      },
      src: '**/*'
    }
  });
  
  // Use Grunt to push to your gh-pages branch hosted on GitHub or any other branch anywhere else.
  grunt.loadNpmTasks('grunt-gh-pages');

  //register new grunt tasks
  grunt.registerTask('deploy', ['gh-pages']);

};