module.exports = function(grunt) {

  require('load-grunt-config')(grunt, {

    // Pass data to tasks
    data: {

      // Re-usable filesystem path variables
      paths: {
        src:        'src',
        src_img:    'assets/img',
        build:      'build',
        build_img:  'build/assets/img',
        templates:  'src/templates'
      },

      // secrets.json is ignored in git because it contains sensitive data
      // See the README for configuration settings
      // secrets: grunt.file.readJSON('secrets.json')

    }
  });
};