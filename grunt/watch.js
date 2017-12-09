// Watches for changes to CSS or templates then runs grunt tasks
module.exports = {
    options: {
        interval: 1000
    },
    data: {
        files: ['<%= paths.src %>/data/**/*'],
        tasks: ['assemble', 'exec:updateAssets'],
        reload: true
    },
    styles: {
        files: ['<%= paths.src %>/scss/**/*'],
        tasks: ['css'],
        reload: true
    },
    js: {
        files: ['<%= paths.src %>/js/**/*'],
        tasks: ['js'],
        reload: true
    },
    pages: {
        files: ['<%= paths.templates %>/pages/*','<%= paths.templates %>/layouts/*','<%= paths.templates %>/partials/**/*'],
        tasks: ['assemble'],
        reload: true
    }
};
