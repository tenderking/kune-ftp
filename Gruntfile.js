module.exports = function(grunt) {
  grunt.initConfig({
    ftp_deploy: {
      build: {
        auth: {
          host: '${{ secrets.FTP_HOST }}',
          port: 21,
          authKey: '${{ secrets.FTP_AUTH_KEY }}'
        },
        src: 'dist',
        dest: '/public_html/nuxt'
      }
    }
  });

  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.registerTask('ftp-deploy', ['ftp-deploy']);
};
