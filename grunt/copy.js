module.exports = {
  assets: {
    options: {
        noProcess: ['**/*.{png,gif,jpg,ico,pdf}'],
        processContentExclude: ['**/*.{png,gif,jpg,ico,psd,ttf,otf,woff,svg}']
      },
        files: [{
            expand: true,
            src: 'assets/**/*',
            dest: "build/"
        }]
    }
}