module.exports = {
  dist: {                                      // Target
    options: {                                 // Target options
      removeComments: true,
      collapseWhitespace: false
    },
    files: [{
        expand: true,
        cwd: 'build/',
        src: '*.html',
        dest: 'build/'
    }]
  }
}