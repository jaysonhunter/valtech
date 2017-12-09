module.export = {
    scsslint: {
        allFiles: [
          'src/scss/**/*.scss'
        ],
        options: {
          bundleExec: true,
          config: '.scss-lint.yml',
          reporterOutput: 'scss-lint-report.xml',
          colorizeOutput: true
        }
    }
}