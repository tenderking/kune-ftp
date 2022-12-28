module.exports = function(grunt) {
  grunt.initConfig({
    // Define your tasks and configurations here
  });

  // Load the grunt-ftp-deploy plugin
  grunt.loadNpmTasks('grunt-ftp-deploy');

  // Register the ftp-deploy task
  grunt.registerTask('ftp-deploy', ['ftp-deploy']);
};
