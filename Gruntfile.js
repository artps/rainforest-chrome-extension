module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.initConfig({
    manifest: grunt.file.readJSON('./src/manifest.json'),
    browserify: {
      options: {
        debug: true
      },
      popup: {
        src: './src/app/popup.js',
        dest: './dist/popup.js'
      }
    },
    clean: {
      dist: ['./dist/']
    },
    copy: {
      assets: {
        expand: true,
        cwd: './src/',
        src: ['./{**/,}*.{json,html,png,css}'],
        dest: './dist/'
      }
    }
  });

  grunt.registerTask('default', [
    'clean:dist',
    'copy',
    'browserify:popup'
  ]);
};
