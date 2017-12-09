module.exports = function(grunt) {
    return {
      dev: {
        options: {
          server:  {
            baseDir: './'
          },
          startPath: './build',
          logLevel: 'debug',
          watchTask: true,
          watchOptions: {
            ignoreInitial: true,
            ignored: '*.html'
          },
          plugins: [
            {
              module: 'bs-html-injector',
              options: {
                files: ['./build/*.html', './build/css/*.css', './build/js/*.js']
              }
            }
          ],
          notify: {
            styles: [
              'display: none',
              'padding: 15px',
              'font-family: sans-serif',
              'position: fixed',
              'font-size: 1em',
              'z-index: 9999',
              'bottom: 0px',
              'right: 0px',
              'border-top-left-radius: 5px',
              'background-color: #1B2032',
              'opacity: 0.4',
              'margin: 0',
              'color: white',
              'text-align: center'
            ]
          }
        }
      }
    }
}