module.exports = {
    options: {
        processors: [
            require('cssnano')({
                autoprefixer: false,
                sourcemap: true
            }),
            require('autoprefixer')({browsers: ['last 3 version']})
        ]
    },
    dist: {
        src: '<%= paths.build %>/css/main.css',
        dest: '<%= paths.build %>/css/main.min.css'
    }
}